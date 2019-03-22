import React from "react";
import BaseComponent from "../components/common/model/baseComponent";

export default class Secret extends BaseComponent {

    render(){
        return (<div>
            {this.addDevTools()}
            <h2>This is the secret page</h2>
        </div>)
    }
}
