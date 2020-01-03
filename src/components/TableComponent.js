import React from 'react'

function TableComponent(props) {
    let expense = props.expense;
    let rowNumber = props.rowNumber;
    return (
        <tr>
            <td> {rowNumber} </td>
            <td> {expense.date} </td>
            <td> {expense.description} </td>
            <td> {expense.amount} </td>
            <td> {expense.where} </td>        
            <td> </td>
        </tr>
    )
}

export default TableComponent