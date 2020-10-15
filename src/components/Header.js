import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css'



export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {algorithm: "bubble"};
    }

    handleClick(algo) {
        this.setState({algorithm: algo})
        // add active class to relevant element
        if (algo === "bubble") {
            document.getElementById(algo).classList.add("active");
            document.getElementById("selection").classList.remove("active");
            document.getElementById("insertion").classList.remove("active");
        } else if (algo === "selection") {
            document.getElementById(algo).classList.add("active");
            document.getElementById("bubble").classList.remove("active");
            document.getElementById("insertion").classList.remove("active");
        } else {
            document.getElementById(algo).classList.add("active");
            document.getElementById("selection").classList.remove("active");
            document.getElementById("bubble").classList.remove("active");
        }

    }
    
    render() {
        return (
            <Navbar bg="dark" expand="md" fixed="top" className="navbar">
                <Navbar.Brand className="navbrand" href="/"><p className="heading">Algorithms &nbsp;<span className="secondHeading">Visualized</span></p></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="navlinks">
                        <Nav.Link onClick={() => this.handleClick('bubble')}><p id="bubble" className="navlink">Bubble Sort</p></Nav.Link>
                        <Nav.Link onClick={() => this.handleClick('selection')}><p id="selection" className="navlink">Selection Sort</p></Nav.Link>
                        <Nav.Link onClick={() => this.handleClick('insertion')}><p id="insertion" className="navlink">Insertion Sort</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}