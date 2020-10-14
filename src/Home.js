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
        this.state = {algo: "bubble", reset: "false"};
        this.chooseAlgo = this.chooseAlgo.bind(this);
        this.resetCanvas = this.resetCanvas.bind(this);
        this.headerRef = React.createRef();
    }


    chooseAlgo() {
        this.setState({algo:this.headerRef.current.state["algorithm"]})
    }

    resetCanvas() {
        this.setState({reset: "true"})
    }

   
  render() {
    return (
        <>  
            <Header ref={this.headerRef}/>
            <Jumbotron className="jumbotron">
                <div className="sketchcontainer">
                    <Button onClick={this.chooseAlgo}>Start sorting</Button>
                    <Button onClick={this.resetCanvas}>Reset</Button>
                    <P5Wrapper sketch={sketch} algo={this.state.algo} reset={this.state.reset}></P5Wrapper>
                </div>
            </Jumbotron>
        </>
    );
  }
}

