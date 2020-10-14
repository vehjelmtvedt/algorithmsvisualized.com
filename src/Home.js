import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './components/sketch'
import Button from 'react-bootstrap/Button'
import Header from './components/Header'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './Home.css'


export default class Home extends Component {

    constructor(){
        super();
        this.state = {algo: "bubble"};
        this.chooseAlgo = this.chooseAlgo.bind(this);
        this.headerRef = React.createRef();
    }


    chooseAlgo() {
        this.setState({algo:this.headerRef.current.state["algorithm"]})
    }

   
  render() {
    return (
        <>  
            <Header ref={this.headerRef}/>
            <Jumbotron className="jumbotron">
                <div className="sketchcontainer">
                    <Button onClick={this.chooseAlgo}>Start sorting</Button>
                    <P5Wrapper sketch={sketch} algo={this.state.algo}></P5Wrapper>
                </div>
            </Jumbotron>
        </>
    );
  }
}

