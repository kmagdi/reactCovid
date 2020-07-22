import React, { Component } from 'react';
import Display from "./Display"


class Content extends Component {
   
    render() { 
        return (
            <div className="row shadow p-3 bg-light">
                <div className="table-responsive-sm ">
                <table className="table table-hover table-bordered m-2">
                    <thead style={{backgroundColor: "#c4cccf"}}>
                        <tr className="text-center">
                            <th className="text-left" scope="col">country</th>
                            <th scope="col">confirmed</th>
                            <th scope="col">deaths</th>
                            <th scope="col">recovered</th>
                            <th scope="col">active</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.props.data.map((obj)=><Display key={obj.country} item={obj}/>)
                         }
                    </tbody>
                </table>
             </div> 
               
            </div>
            );
    }
}
 
export default Content;