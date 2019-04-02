import React, { Component } from 'react';
import Square from './square'

class Board extends Component{
constructor(props){
    super(props);
    this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
        };
}

handleClick(i) {
  if(this.state.squares[i] == null){  
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X': 'O';
    this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
        });
  }    
}

rendersquare(i){
    return( 
    <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
    />
    );
}

render(){

    const status = 'Next Player:' + (this.state.xIsNext? 'X':'O');
    return(
       <div>
            <div className="status">{status}</div>
            <div>
                {this.rendersquare(0)}
                {this.rendersquare(1)}
                {this.rendersquare(2)}
            </div>
            <div>
                {this.rendersquare(3)}
                {this.rendersquare(4)}
                {this.rendersquare(5)}
            </div>
            <div>
                {this.rendersquare(6)}
                {this.rendersquare(7)}
                {this.rendersquare(8)}
            </div>
       </div>       
    );
        }
    }

    export default Board;
