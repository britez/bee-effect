import React from "react";
import BaseComponent from "../components/common/model/baseComponent";

export default class About extends BaseComponent{
    render(){
        return (<div>
            {this.addDevTools()}
            <h2>This is the about page</h2>

        </div>)
    }
} 