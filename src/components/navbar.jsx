import React, { Component } from 'react';
//import Select from "react-select"
import covid from "./covid.svg"

class NavBar extends Component {

    render() { 
        return (
            <nav className="navbar navbar-dark bg-dark">
                <img style={{width:"30px", height:"30px"}}  src={covid} alt="icon"/>
                <h1 className="navbar-brand mb-0 ">COVID-19</h1>
                <h3 className="navbar-brand mb-0 ">{this.props.text}  </h3>      
                <div className="col-sm-3">
                    <span className="navbar-brand mb-0 ">Select country:</span > 
                    <select  value={this.props.selectedOption} onChange={(e)=>this.props.onSelected(e.target.value)}>
                        <option>no selected</option>
                        {this.props.data.map((obj) => <option key={obj.country}>{obj.country}</option>)}
                    </select>
                </div>
            </nav>
          );
    }
}
 
export default NavBar;