import React from 'react'

import FormComponent from './form-component'
import TableComponent from './table-component'
import TableHead from './table-head'

import Table from 'react-bootstrap/Table'


class ExpenseTracker extends React.Component {
    constructor() {
        super();

        this.state = {
            description: "",
            date: "",
            amount: "",
            where: "",
            expenses: []//expenses
        }

        this.changeHandle = this.changeHandle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        this.setState(prevState => {
            let newExpenses = prevState.expenses.slice();
            newExpenses.splice(id, 1);

            window.localStorage.setItem('expenses', JSON.stringify(newExpenses));

            return ({
                expenses: newExpenses
            })
        })
    }

    changeHandle(event) {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        let newExpense = {
            description: this.state.description,
            date: this.state.date,
            amount: this.state.amount,
            where: this.state.where
        }

        this.setState(prevState => {
            let newExpenses = prevState.expenses.slice();
            newExpenses.push(newExpense);

            window.localStorage.setItem('expenses', JSON.stringify(newExpenses));

            return ({
                description: "",
                date: "",
                amount: "",
                where: "",
                expenses: newExpenses
            })
        })

        event.preventDefault();
    }

    componentDidMount() {
        let expenses = typeof (Storage) !== "undefined" ? JSON.parse(window.localStorage.getItem('expenses')) || [] : [];

        this.setState({ expenses: expenses })
    }

    render() {
        const returnedExpenses = this.state.expenses.map((expense, i) =>
            <TableComponent handleDelete={() => this.handleDelete(i)} key={i} expense={expense} rowNumber={i + 1} />
        )

        const { description, date, amount, where } = this.state;
        const isEnabled = description.length > 0 && date.length > 0
            && amount.length > 0 && where.length > 0;

        return (
            <main>
                <h1>Simple expense manager project</h1>
                <h2>Add a new item:</h2>
                <br />

                <FormComponent isEnabled={isEnabled} fields={this.state} handleSubmit={this.handleSubmit} changeHandle={this.changeHandle} />
                <br />

                <Table responsive bordered>
                    <TableHead />
                    <tbody>
                        {returnedExpenses}
                    </tbody>
                </Table>
            </main>
        )
    }
}

export default ExpenseTracker