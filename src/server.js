import express from "express";
import path from "path";
import compression from 'compression';

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import Helmet from "react-helmet";
import routes from "./app/routes";
import Layout from "./app/components/Layout";
import createStore, { initializeSession } from "./app/store";
import api from "./api/index";

const app = express(api);

app.use(compression());

app.use('/static',express.static(path.resolve(__dirname, "../dist")));
app.use('/static',express.static(path.resolve(__dirname, "../public")));

app.use("/api", api);

app.get("/*", (req, res) => {
    const context = {};
    const store = createStore();

    const dataRequirements =
        routes
            .filter(route => matchPath(req.url, route)) // filter matching paths
            .map(route => route.component) // map to components
            .filter(comp => comp.serverFetch) // check if components have data requirement
            .map(comp => store.dispatch(comp.serverFetch())); // dispatch data requirement

    Promise.all(dataRequirements).then(() => {
        const jsx = (
   
            <ReduxProvider store={store}>
                <StaticRouter context={context} location={req.url}>
                    <Layout/>
                </StaticRouter>
            </ReduxProvider>
          
        );
        const reactDom = renderToString(jsx);
        const reduxState = store.getState();
        const helmetData = Helmet.renderStatic();

        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(htmlTemplate(reactDom, reduxState, helmetData));
    } );
} );

app.listen(8080, () => console.log("Listen on port 8080"));

function htmlTemplate(reactDom, reduxState, helmetData) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            <link rel="stylesheet" href="static/main.css">
            <link rel="shortcut icon" href="static/favicon.ico" alt="favicon de redbee">
            <title>React SSR</title>
        </head>

        <body>
            <div id="app">${reactDom}</div>
            <script>
                window.REDUX_DATA = ${JSON.stringify(reduxState)}
            </script>
            <script src="static/app.bundle.js"></script>
        </body>
        </html>
    `;
}
