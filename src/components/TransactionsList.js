import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {

  const allTransactions = props.transactions.map(transaction => <Transaction transaction={transaction} key={'transaction-' + transaction.id}/>)

  // // creating a filter for transactions based on active category
  // const allTransactions = () => {
  //   props.transactions.map(transaction => {
  //     if (props.activeCategory === 'All') {
  //   <Transaction transaction={transaction} key={'transaction-' + transaction.id}/>
  //   } else if (props.activeCategory === transaction.category) {
  //     <Transaction transaction={transaction} key={'transaction-' + transaction.id}/>
  //   }
  // }


  //


  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {allTransactions}

      </tbody>
    </table>
  )
}

export default TransactionsList
