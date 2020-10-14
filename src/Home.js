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
        this.randomColor = this.randomColor.bind(this);
    }

    randomColor(){
        this.setState({algo:"algorithm"}
        )
    }


  render() {
    return (
        <>  
            
            <Header/>
            <Jumbotron className="jumbotron">
                <div className="sketchcontainer">
                    <Button onClick={this.randomColor}>Start sorting</Button>
                    <P5Wrapper sketch={sketch} algo={this.state.algo}></P5Wrapper>
                </div>
            </Jumbotron>
        </>
    );
  }
}

