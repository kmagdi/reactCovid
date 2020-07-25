import React, {Component } from 'react';


class Diagram extends Component {

    renderJSX(){
        return(
            <div className="text-center">
                <img style={{maxWidth: "100%" , height: "auto" }} className="img-fluid p-2 m-2" src={this.props.photoURL} alt="random photo"/>
            </div>
        )
            
    }
    
    render() { 
        const {population,country,photoURL}=this.props;
        const photo="<img src={"+photoURL+"} alt='random photo'/>"
        return (
            <div>
                 {(population===0 || population===null ) ? this.renderJSX() : (country+" population:"+ population)}         
            </div>           
          );
    }
}
 
export default Diagram