import React from 'react'
import Transaction from '../components/Transaction'

const TransactionsList = props => {
  console.log(props)
  
  const allTransactions = props.transactions.map((transaction,index) => { return(
    <Transaction key={index} transaction={transaction}/>)
  })

  const filteredTransactions = props.transactions.filter( transaction => 
    transaction.category === props.activeCategory).map((transaction, index)=> {return ( 
    <Transaction key={index} transaction={transaction}/>)})
    



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

        {props.activeCategory ==='All' ? allTransactions : filteredTransactions} 
        

      </tbody>
    </table>
  )
}

export default TransactionsList
