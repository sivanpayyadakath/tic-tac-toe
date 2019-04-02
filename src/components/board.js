import React, { Component } from 'react';
import Square from './square'

class Board extends Component{




rendersquare(i){
    return( 
    <Square 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
    />
    );
}

render(){
    return(
       <div>
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
