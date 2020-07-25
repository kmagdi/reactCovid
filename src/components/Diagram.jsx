import React, {Component } from 'react';
import Chart from "react-google-charts";

class Diagram extends Component {

    renderJSX(){
        return(
            <div className="text-center">
                <img style={{maxWidth: "100%" , height: "auto" }} className="img-fluid p-2 m-2" src={this.props.photoURL} alt="random photo"/>
            </div>
        )
            
    }
    confirmed(){
        const filteredData=this.props.data.filter((obj)=>obj.country===this.props.country)
        return filteredData.map(obj=>obj.confirmed);
    }
    active(){
        const filteredData=this.props.data.filter((obj)=>obj.country===this.props.country)
        return filteredData.map(obj=>obj.active);
    }
    recovered(){
        const filteredData=this.props.data.filter((obj)=>obj.country===this.props.country)
        return filteredData.map(obj=>obj.recovered);
    }
    deaths(){
        const filteredData=this.props.data.filter((obj)=>obj.country===this.props.country)
        return filteredData.map(obj=>obj.deaths);
    }
    
    render() { 
       // console.log("adat="+this.confirmed());
        const {population,country,error}=this.props;
        return (
            <div className="text-center">            
                  {(population===0 || population===null ) ? error : 
                            <Chart
                                width={'500px'}
                                height={'300px'}
                                chartType="PieChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['population', 'splitting'],
                                    ['Recovered',parseInt(this.recovered())],
                                    ['Active',parseInt(this.active())],
                                    ['Deaths',parseInt(this.deaths())]
                                ]}
                                options={{
                                    title: country+" -confirmed:"+this.confirmed(),
                                }}
                                rootProps={{ 'data-testid': '1' }}
                            />                                           
                 }
                 {(population===0 || population===null ) ? this.renderJSX() : 
                            <Chart
                                width={'500px'}
                                height={'300px'}
                                chartType="PieChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['population', 'splitting'],
                                    ['Healthy', parseInt(population)-parseInt(this.confirmed())],
                                    ['Confirmed',parseInt(this.confirmed())]
                                ]}
                                options={{
                                    title: country+" -confirmed:"+this.confirmed(),
                                }}
                                rootProps={{ 'data-testid': '1' }}
                            />                                           
                 }               
            </div>           
          );
    }
}
 
export default Diagram