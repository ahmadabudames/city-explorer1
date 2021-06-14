import React, { Component } from 'react'

export class CityData extends Component {
    render() {
        return (
            <div>
                <p>
                    `the city name is {this.props.cityData.display_name}`
                </p>
                <p>
                    `the latitude : {this.props.cityData.lat}`
                </p>
                <p>
                    `the longitude : {this.props.cityData.lon}`
                </p>
            </div>
        )
    }
}

export default CityData
