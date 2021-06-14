import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export class Searchforms extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.getCityData}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter City Name</Form.Label>
                        <Form.Control onChange={this.props.updateCityNameState} type="text" placeholder="Enter City Name" />





                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Explore
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Searchforms
