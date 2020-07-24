import React, { Component } from 'react';
//import Select from "react-select"

class NavBar extends Component {

    render() { 
        return (
            <nav className="navbar navbar-dark bg-dark">
                <h1 className="navbar-brand mb-0 h1">COVID-19  {this.props.text}</h1>
                <div className="col-sm-3">
                    <span className="text-white">Select country:</span > 
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