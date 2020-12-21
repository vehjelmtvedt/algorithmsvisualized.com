import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './components/sketch'
import Button from 'react-bootstrap/Button'
import Header from './components/Header'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './Home.css'
import Confetti from 'react-dom-confetti';


export default class Home extends Component {



    constructor(){
        super();
        this.state = {algo: "bubble", reset: "false", active: window.sorted};
        this.chooseAlgo = this.chooseAlgo.bind(this);
        this.resetCanvas = this.resetCanvas.bind(this);
        this.headerRef = React.createRef();
    }

    chooseAlgo() {
        this.setState({algo:this.headerRef.current.state["algorithm"]})
        this.resetCanvas("false");
    }

    resetCanvas(value) {
        this.setState({reset: value})
    }

    shootConfetti(event) {
        console.log(event.target.value);
        this.setState({'active': event.target.value});
        this.setState({'active': false});
    }


  render() {
    return (
        <>
            <Confetti active={ this.state.active } config={ this.config }/>
            <Header ref={this.headerRef}/>
            <Jumbotron className="jumbotron">
                <div className="sketchcontainer">
                    
                    <Button onClick={this.chooseAlgo}>Start sorting</Button>
                    <Button onClick={() => this.resetCanvas('true')}>Reset</Button>
                    <P5Wrapper sketch={sketch} algo={this.state.algo} reset={this.state.reset}></P5Wrapper>
                </div>
            </Jumbotron>
        </>
    );
  }
}
