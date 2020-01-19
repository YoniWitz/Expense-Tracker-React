import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col } from 'react-bootstrap'

function FormComponent(props) {
    let fields = props.fields;
    let changeHandle = props.changeHandle;
    let handleSubmit = props.handleSubmit;
    let isEnabled = props.isEnabled;

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="formBasicDate">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control value={fields.date} name="date" onChange={changeHandle} type="date" placeholder="mm/dd/yyyy" />
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicDescription">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control value={fields.description} name="description" onChange={changeHandle} type="text" placeholder="What did you spend on?" />
                </Form.Group>

            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formBasicAmount">
                    <Form.Label>Amount:</Form.Label>
                    <Form.Control value={fields.amount} name="amount" onChange={changeHandle} type="number" placeholder="How much?" />
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicWhere">
                    <Form.Label>Where:</Form.Label>
                    <Form.Control value={fields.where} name="where" onChange={changeHandle} type="text" placeholder="Ebay, Moments Cafe, etc." />
                </Form.Group>
            </Form.Row>

            <Button disabled={!isEnabled} variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default FormComponent