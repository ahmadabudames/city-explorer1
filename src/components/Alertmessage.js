import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export class Alertmessage extends Component {
    render() {
        return (
            <div>
           
        <Alert>
          this is a {this.props.error}
        </Alert>
        
            </div>
        )
    }
}

export default Alertmessage
