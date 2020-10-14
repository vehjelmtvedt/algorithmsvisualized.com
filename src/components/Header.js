import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css'



export default class Header extends Component {
    
    render() {
        return (
            <Navbar bg="dark" expand="md" fixed="top" className="navbar">
                <Navbar.Brand className="navbrand" href="/"><p className="heading">Algorithms &nbsp;<span className="secondHeading">Visualized</span></p></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="navlinks">
                        <Nav.Link href="/"><p className="navlink">Bubble Sort</p></Nav.Link>
                        <Nav.Link href="/projects"><p className="navlink">Selection Sort</p></Nav.Link>
                        <Nav.Link href="/contact"><p className="navlink">Insertion Sort</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}