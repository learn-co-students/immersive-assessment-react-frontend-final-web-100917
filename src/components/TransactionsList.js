import React from "react";
import Transaction from "./Transaction";

const TransactionsList = props => {
  console.log(props);
  const transArray = props.transactions.map(transaction => {
    return (
      <Transaction
        posted_at={transaction.posted_at}
        description={transaction.description}
        category={transaction.category}
        amount={transaction.amount}
      />
    );
  });

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Posted At</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>

        {transArray}
      </tbody>
    </table>
  );
};

export default TransactionsList;
