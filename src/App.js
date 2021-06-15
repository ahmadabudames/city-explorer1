import React, { Component } from 'react'
import Searchforms from './components/Searchforms';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Alertmessage from './components/Alertmessage';
import Map from './components/Map';
import CityData from './components/CityData';
import Weather from './components/Weather';

export class App extends Component {




  constructor(props) {
    super(props);
    this.state = {
      mycityName: '',
      cityData: {},
      show: false,
      alert: '',
      error: '',
      lat: '',
      lon: ''

    }
  }


  updateCityNameState = (e) => {
    this.setState({
      mycityName: e.target.value,

    })
    //  console.log(this.state)
  }

  getCityData = async (e) => {
    e.preventDefault();
    await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.4cbbc812278b30d2b7dbaedbcc824622&q=${this.state.mycityName}&format=json`).then(locationRes => {

      this.setState({
        cityData: locationRes.data[0],
        lat: locationRes.data[0].lat,
        lon: locationRes.data[0].lon,
      });
      axios.get(`http://localhost:8080/weather?lon=${this.state.lon}&lat=${this.state.lat}`).then(weatherRes => {
        this.setState({
          weatherData: weatherRes.data,
          show: true,
          alert: false
        })

      });
    });


      


    //  console.log(axiosData);
  }


  render() {
    return (
      <div>
        {this.state.alert &&
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
            <Weather
              weather={this.state.weatherData}
            />

          </>
        }
      </div>
    )
  }
}

export default App
