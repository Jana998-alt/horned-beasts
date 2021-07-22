import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export class DropdownElement extends Component {

    

    render() {
        return (
            <div>
                <Form.Group as={Row} className="mb-3" onClick={this.props.filterHornes}>
                    <Form.Label column sm={2}>filter by number of horns</Form.Label>
                    <Form.Control as='select' name="bStatus" >
                    <option value="All">All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="100">One hundred</option>
                    </Form.Control>
                </Form.Group>

            </div >
        )
    }
}

export default DropdownElement
