import React from 'react'

function TableHead() {
    return (
        <thead className="thead-light">
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Where</th>
                <th>Actions</th>
            </tr>
        </thead>
    )
}

export default TableHead