import React, { Component } from 'react';
import Title from "./title"
import Content from "./content"
import Nav from "./nav"

class Head extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#111"}}>
                <Title />
                <Content />
                <Nav />
            </div>
        );
    }
}
export default Head;
