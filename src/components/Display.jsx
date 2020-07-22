import React, { Component } from 'react';

class UserDisplay extends Component {
  
    render() { 
        return (
            <React.Fragment>
                <tr className="text-center">
                    <td className="text-left">{this.props.item.country}</td>
                    <td >{this.props.item.confirmed}</td>
                    <td >{this.props.item.deaths}</td>
                    <td >{this.props.item.recovered}</td>
                    <td >{this.props.item.active}</td>
                </tr>              
            </React.Fragment>         
        );
    }
}
 
export default UserDisplay;