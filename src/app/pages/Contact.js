import React from "react";
import Helmet from "react-helmet";
import BaseComponent from "../components/common/model/baseComponent";

export default class Contact extends BaseComponent {

    render(){
        return(
            <div>
                {this.addDevTools()}
                <div>
        <h2>This is the contact page</h2>
        <Helmet>
            <title>Contact Page</title>
            <meta name="description" content="This is a proof of concept for React SSR" />
        </Helmet>
    </div>

            </div>
        )
    }
}
   


