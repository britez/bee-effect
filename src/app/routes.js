import Home from "./pages/Home";
import Areas from "./pages/Areas";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Secret from "./pages/Secret";
export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/areas",
        component: Areas,
        exact: true,
    },
    {
        path: "/about",
        component: About,
        exact: true,
    },
    {
        path: "/contact",
        component: Contact,
        exact: true,
    },
    {
        path: "/secret",
        component: Secret,
        exact: true,
    },
];
