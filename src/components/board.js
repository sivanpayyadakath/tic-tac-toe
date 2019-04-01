import React, { Component } from 'react';
import Square from './square'

class Board extends Component{

rendersquare(i){
    return <Square value={i}/>;
}

render(){

    const status = 'Next Player: X'
    return(
       <div>
            <div className="status">{status}</div>
            <div>
                {this.rendersquare(1)}
                {this.rendersquare(2)}
                {this.rendersquare(3)}
            </div>
            <div>
                {this.rendersquare(4)}
                {this.rendersquare(5)}
                {this.rendersquare(6)}
            </div>
            <div>
                {this.rendersquare(7)}
                {this.rendersquare(8)}
                {this.rendersquare(9)}
            </div>
       </div>       
    );
        }
    }

    export default Board;
