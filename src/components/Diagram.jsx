import React, {Component } from 'react';


class Diagram extends Component {
    render() { 
        return (
            <div>
                 {this.props.population===0? "" :this.props.country+" population:"+this.props.population}
            </div>           
          );
    }
}
 
export default Diagram