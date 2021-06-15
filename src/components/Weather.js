import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
export class Weather extends Component {
    render() {
        return (
          <>
          {
              this.props.weather.map(weatherObj=>{
                  return(
                      <>
                      <ListGroup>
                          {weatherObj.description}
                      </ListGroup>
                      <ListGroup>
                      {weatherObj.date}
                      </ListGroup>
                      </>
                  )
              })
          }
          </>
        )
    }
}

export default Weather
