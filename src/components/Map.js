import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

export class Map extends Component {
    render() {
        return (
            <div>
                <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.4cbbc812278b30d2b7dbaedbcc824622&q&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=15`} rounded />
            </div>
        )
    }
}

export default Map
