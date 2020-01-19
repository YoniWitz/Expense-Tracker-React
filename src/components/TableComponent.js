import React from 'react'

import Button from 'react-bootstrap/Button'

function TableComponent(props) {
    let expense = props.expense;
    let rowNumber = props.rowNumber;
    let handleDelete = props.handleDelete;
    return (
        <tr>
            <td> {rowNumber} </td>
            <td> {expense.date} </td>
            <td> {expense.description} </td>
            <td> {expense.amount} </td>
            <td> {expense.where} </td>
            <td> <Button variant="danger" onClick={handleDelete}>Remove</Button></td>
        </tr>
    )
}

export default TableComponent