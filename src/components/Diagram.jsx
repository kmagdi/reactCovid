import React, {Component } from 'react';


class Diagram extends Component {
    
    render() { 
        const {population,country}=this.props;
        return (
            <div>
                 {(population===0 || population===null ) ? "" : (country+" population:"+ population)}
            </div>           
          );
    }
}
 
export default Diagram