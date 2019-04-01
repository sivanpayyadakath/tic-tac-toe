import React, {Component} from 'react';

class Square extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }

    render(){
        return(
            <button className="square">
                {this.props.value}
            </button>
        )
    }
}


export default Square;