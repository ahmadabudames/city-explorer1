import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";



export class App extends Component {



 
  constructor(props){
    super(props);
    this.state={
      mycityName : ''
    }
  }
 
 
   updateCityNameState= (e) =>{
     this.setState({
      mycityName :e.target.value 
       
     })
     console.log(this.state)
   }


  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter City Name</Form.Label>
            <Form.Control onChange={this.updateCityNameState} type="text" placeholder="Enter City Name" />





          </Form.Group>
          <Button variant="primary" type="submit">
            Explore
          </Button>
        </Form>
      </div>
    )
  }
}

export default App
