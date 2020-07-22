import React, {Component } from 'react';


class Diagram extends Component {
    constructor(props){
        super()
        this.state={
            population:0
        }
    }
   
    render() { 
        return (
            <div>
                 {this.props.country}
            </div>
           
          );
    }
}
 
export default Diagram;