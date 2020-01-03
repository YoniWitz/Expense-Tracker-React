import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function FormComponent(props) {
    let state = props.state;
    let changeHandle = props.changeHandle;
    //console.log(state);
    return (
        <Form>
            <Form.Group controlId="formBasicDate">
                <Form.Label>Date:</Form.Label>
                <Form.Control value={state.date} name="date" onChange={changeHandle} type="date" placeholder="mm/dd/yyyy" />            
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
                <Form.Label>Description:</Form.Label>
                <Form.Control value={state.description} name="description" onChange={changeHandle} type="text" placeholder="What did you spend on?" />
            </Form.Group>

            <Form.Group controlId="formBasicAmount">
                <Form.Label>Amount:</Form.Label>
                <Form.Control value={state.amount} name="amount" onChange={changeHandle} type="number" placeholder="How much?" />
            </Form.Group>

            <Form.Group controlId="formBasicWhere">
                <Form.Label>Where:</Form.Label>
                <Form.Control value={state.where} name="where" onChange={changeHandle} type="text" placeholder="Ebay, Moments Cafe, etc." />
            </Form.Group>
           
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default FormComponent