import React, { Component } from 'react'
import Searchforms from './components/Searchforms';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Alertmessage from './components/Alertmessage';
import Map from './components/Map';
import CityData from './components/CityData';

export class App extends Component {



 
  constructor(props){
    super(props);
    this.state={
      mycityName : '',
      cityData:{},
      show:false,
      alert:'',
      error:''
    }
  }
 
 
   updateCityNameState= (e) =>{
     this.setState({
      mycityName :e.target.value,
       
     })
    //  console.log(this.state)
   }

   getCityData=async (e)=>{
     e.preventDefault();
     try{ const axiosData= await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.4cbbc812278b30d2b7dbaedbcc824622&q=${this.state.mycityName}&format=json`);

     this.setState({
      cityData:axiosData.data[0],
      show:true,
      alert:false
     })
    }
    catch (error){
      this.setState({
        error:error.message,
        alert:true
      })
    }
    

    //  console.log(axiosData);
   }


  render() {
    return (
      <div>
         {this.state.alert&&
       <Alertmessage
       error={this.state.error}
       />
         }
       <Searchforms
       getCityData={this.getCityData}
       updateCityNameState={this.updateCityNameState}
       />

        {(this.state.show) &&
        <>
      
        <Map
        cityData={this.state.cityData}
        />
    
     <CityData
     cityData={this.state.cityData}
     
     />

        </>
        }
      </div>
    )
  }
}

export default App
