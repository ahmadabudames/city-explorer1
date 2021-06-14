import React, { Component } from 'react'


export class Map extends Component {
    render() {
        return (
            <div>
                 <img src={`https:maps.locationiq.com/v3/staticmap?key=pk.4cbbc812278b30d2b7dbaedbcc824622&q¢er=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=15`}/>
            </div>
        )
    }
}

export default Map
