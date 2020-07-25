import React, { Component } from 'react';
import NavBar from "./components/navbar"
import Content from "./components/content"
import Diagram from "./components/Diagram"
import Axios from "axios"
import  "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./tableStyle.css"
import myTxt from "./components/population.txt"

class App extends Component {
  constructor(){
    super()
    this.state = {
       error:null,
       isLoaded:false,
       data:[],
       date:null,
       selectedOption: null,
       population:null,
       photoURL:"https://picsum.photos/500"
      }
}
    
FileName(){
    const URL="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/_DATE_.csv";
    const date=new Date()//mindig az aktualis datumal jon letre
    date.setDate(date.getDate()-2)//a tegnapi datum kell nekunk mindig
    const month=date.getMonth()+1   //mert a januarnak 0 felel meg
    const monthPaddid=month<10 ?  `0${month}` : month;
    const day=date.getDate();
    const dayPadded=day<10 ? `0${day}` : day;
    const yesterday= `${monthPaddid}-${dayPadded}-${date.getFullYear()}`;
    //console.log("tegnap="+yesterday)
    this.setState({date:yesterday})
    return URL.replace("_DATE_",yesterday);            
}

componentDidMount(){
    Axios.get(this.FileName())
       .then((response) =>{
            const arr=response.data.split("\n")
            const arrObj=arr.map(row=> Object.assign({}, row.split(",")))
            console.log(arrObj[0])
            arrObj.splice(0,1);//a fejlec nem kell
            console.log(arrObj[0])
            let json = {
                items: []
            };             
            arrObj.map((item,index)=> {  
               if( json.items.some(obj=> obj.country ===item[3])){
                    //console.log("mar van");
                    let i=json.items.findIndex(e=>e.country===item[3]);
                    //console.log(item[3]+"mar van:"+i+"-"+(json.items[i].confirmed+parseInt(item[7])));
                    json.items[i].confirmed=parseInt(json.items[i].confirmed)+parseInt(item[7]);
                    json.items[i].deaths=parseInt(json.items[i].deaths)+parseInt(item[8]);
                    json.items[i].recovered=parseInt(json.items[i].recovered)+parseInt(item[9]);
                    json.items[i].active=item[10] ? parseInt(json.items[i].active)+parseInt(item[10]) :json.items[i].active;
               }else
                   json.items.push({ 
                        "country"  : item[3],
                        "confirmed":item[7],
                        "deaths":item[8],
                        "recovered":item[9],
                        "active"  : item[10]
                    })
                });
            //rendezes:
            json.items.sort((a,b) => (a.country > b.country) ? 1 : ((b.country > a.country) ? -1 : 0)); 
            //hibas adatok torlese:
            json.items = json.items.filter(x => x.confirmed>0);
            json.items = json.items.filter(x => x.country!=='"Korea');

            this.setState({
                    isLoaded:true,
                    data:json.items,
                    error:null
            })
       })
}
handleSelect = (val)=> {
  this.setState({selectedOption:val})
  if(val!=="no selected"){
    fetch(myTxt)
    .then(response=>response.text())
    .then(
      (text)=>{
        const obj=text.split("\n")
        const filteredData=obj.filter(str=>str.includes(val))
        console.log("filteredData="+filteredData.length)
        if(filteredData.length===0) {
          console.log("orszag kodozasi hiba");
          this.setState({population:0,
                         error:"orszag kodolasi hiba :(" 
          })
        }else{
          const splitedObj=filteredData.map(str=>str.split(";"))
          this.setState({population:splitedObj[0][1]})
        }},
      (error)=>{
        this.setState({
          selectedOption:null,
          population:0
        })
      }
      )
  }else
    this.setState({
      selectedOption:null,
      population:0,
      error:null
    })
}

  render() { 
    console.log(this.state.selectedOption+" render-bol");
    return (
      <div className="container border shadow">
        <NavBar text={this.state.isLoaded ? " date: "+this.state.date  : "is loading..." } 
                data={this.state.data} 
                onSelected={this.handleSelect}
                selectedOption={this.state.selectedOption}/>
        <main  className='row'>
              
              <div className="col-sm-5">
                 <Diagram country={this.state.selectedOption} 
                          population={this.state.population} 
                          data={this.state.data}
                          photoURL={this.state.photoURL}
                          error={this.state.error}/>
              </div>  

              <div className="col-sm-7">
                  <Content data={this.state.data} />
              </div>

        </main>
      </div>
      
      );
  }
}
 
export default App;