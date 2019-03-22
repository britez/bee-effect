import React, {Component} from 'react';
import DevTools  from '../DevTools';

export default class BaseComponent extends Component {

    constructor(props){
        super(props);
        this.addDevTools = this.addDevTools.bind(this);
    }

     addDevTools() {
         return (process.env.NODE_ENV === 'production')?<div/>:<DevTools/>
     }

    render(){
        return <div/>
    }


}