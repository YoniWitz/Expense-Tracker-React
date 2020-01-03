import React from 'react'


import FormComponent from './FormComponent'
import TableComponent from './TableComponent'


class ExpenseTracker extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div><FormComponent />
                <TableComponent />
            </div>)
    }
}
export default ExpenseTracker