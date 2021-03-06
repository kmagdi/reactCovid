import React, { Component } from 'react';
//import Select from "react-select"
import covid from "./covid.svg"

class NavBar extends Component {

    render() { 
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="col-sm-1">
                    <img style={{width:"30px", height:"30px"}}  src={covid} alt="icon"/>
                </div>
                
                
                <div className="col-sm-3">
                    <span className="navbar-brand mb-0 ">Select country:</span > 
                    <select value={this.props.selectedOption} onChange={(e)=>this.props.onSelected(e.target.value)}>
                        <option>no selected</option>
                        {this.props.data.map((obj) => <option key={obj.country}>{obj.country}</option>)}
                    </select>
                </div>
                <div className="col-sm-8 text-center">
                    <h1 className="navbar-brand mb-0 ">COVID-19</h1>
                    <h3 className="navbar-brand mb-0 ">{this.props.text}  </h3>   
                </div>
                   
            </nav>
          );
    }
}
 
export default NavBar;