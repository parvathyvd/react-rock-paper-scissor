import React, { Component } from 'react';
import './App.css';
import Player1 from './components/Player1/Player1';
import Player2 from './components/Player2/Player2';
import Result from './components/Result/Result';



const RSPARRAY = ["rock","paper","scissor" ];

class App extends Component {
  state={ player1 : '',
          player2 : '',
        }
 
       

 
  onClickGameStartHandler = () =>{
    let counter = 0;
    let myInterval = setInterval(() =>{
      counter++;
    this.setState({ 
        player1: RSPARRAY[Math.floor(Math.random()*3)],
        player2 : RSPARRAY[Math.floor(Math.random()*3)],
        winner: ''
    })
    if(counter>10){
      clearInterval(myInterval);
      this.setState({
        winner: this.wingame()
      })
    }
  },400)
};


  wingame = () =>{
    const {player1,player2} = this.state
    if(player1 === player2){
      console.log('Draw')

      return `That's a Draw! Try Again`
    }
    if(player1==='rock' && player2 ==='scissor' ||
       player1==='paper' && player2 ==='rock' ||
       player1==='scissor' && player2 ==='paper'){
        console.log('You win');

        return `PlayerA Wins :)`
      }
       console.log('You Loose');

    return `PlayerA Loose :(`;

  }


  render() {
    return (
      <div className="App">
        <h1 className="display-4 pt-5 text-purple">Rock Paper Scissor Game</h1>
          <div className="row">
            <div className ="col-sm-6">
              <Player1 
              result ={this.state.player1} />
              </div>
            <div className ="col-sm-6">
            <Player2 
            result ={this.state.player2} />
            </div>
          </div>
          <div className="row">
            <div className ="col-sm-12">
          <button className="btn btn-outline-success btn-lg" onClick={this.onClickGameStartHandler}>Start Game</button>
          <Result final ={this.state.winner} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
