import React, { Component } from 'react';
import UserDisplay from "./UserDisplay"
import users from './users.json'


class Content extends Component {
    constructor(){
        super()
        this.state = {
           error:null,
           isLoaded:false,
            data:[]
          }
    }
    componentDidMount(){
        //console.log(users.length)
        this.setState({
                isLoaded:true,
                data:users
            })
    }
    
    render() { 
        const text=this.state.isLoaded ? ""  : "is loading..." 
        return (
            <React.Fragment>
                <div>{text}</div> 
                <div className="table-responsive-sm">
                <table className="table">
                    <caption>List of users</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">username</th>
                            <th scope="col">email</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.state.data.map((obj)=><UserDisplay key={obj.id} user={obj}/>)}
                    </tbody>
                </table>
             </div> 
               
            </React.Fragment>
            );
    }
}
 
export default Content;