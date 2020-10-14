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
    }
    
    render() {
        return (
            <Navbar bg="dark" expand="md" fixed="top" className="navbar">
                <Navbar.Brand className="navbrand" href="/"><p className="heading">Algorithms &nbsp;<span className="secondHeading">Visualized</span></p></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="navlinks">
                        <Nav.Link onClick={() => this.handleClick('bubble')}><p className="navlink">Bubble Sort</p></Nav.Link>
                        <Nav.Link onClick={() => this.handleClick('selection')}><p className="navlink">Selection Sort</p></Nav.Link>
                        <Nav.Link onClick={() => this.handleClick('insertion')}><p className="navlink">Insertion Sort</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}