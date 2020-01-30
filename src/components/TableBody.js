import React from 'react'

import TableRow from './TableRow'

function TableBody(props) {
    let { expenses, handleDelete } = props;

    let returnedExpenses = expenses.map((expense, i) =>
        <TableRow 
        handleDelete={() => handleDelete(i)} 
        key={i} 
        expense={expense} 
        rowNumber={i + 1} />
    )
    return (
        <tbody>
            {returnedExpenses}
        </tbody>
    )
} 

export default TableBody