import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Image from "./Image";
import Timeline from "./Timeline";
import Blockquote from "./Blockquote";
import Wikilink from "./Wikilink";

class Index extends React.Component{
    render() {
        return (
            <div>
            <Header />
            <Image />
            <Timeline />
            <Blockquote />
            <Wikilink />
            </div>
        )
    }
}

ReactDOM.render(
    <Index />, 
    document.getElementById('app')
);