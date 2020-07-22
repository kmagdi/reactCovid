import React, { Component } from 'react';
import UserDisplay from "./UserDisplay"

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
        const url="https://jsonplaceholder.typicode.com/users"
        fetch(url)
            .then(response=>response.json())
            .then((result)=>{
                this.setState({
                    isLoaded:true,
                    data:result
                })
            },(error)=>{
                this.setState({
                    isLoaded:false,
                    error
                })
                }
            )
    }
    
    render() { 
        const text=this.state.isLoaded ? ""  : "is loading....." 
        const row=this.state.data.map((obj)=><UserDisplay key={obj.id} user={obj}/>)
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
                         {row.length > 0 ? row :null }
                    </tbody>
                </table>
             </div> 
               
            </React.Fragment>
            );
    }
}
 
export default Content;