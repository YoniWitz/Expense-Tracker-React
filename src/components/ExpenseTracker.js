import React from 'react'


import FormComponent from './FormComponent'
import TableComponent from './TableComponent'


class ExpenseTracker extends React.Component {
    constructor() {
        super();
        this.state = {
            description: "",
            date: "",
            amount: "",
            where: "",
            expenses:[]
        }
        this.changeHandle = this.changeHandle.bind(this);
    }

    changeHandle(event) {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <FormComponent state={this.state} changeHandle={this.changeHandle} />
                <TableComponent state={this.state}/>
            </div>)
    }
}
export default ExpenseTracker