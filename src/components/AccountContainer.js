import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import CategorySelector from "./CategorySelector";

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      activeCategory: "All"
    };
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(trans => this.setState({ transactions: trans }));
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ activeCategory: event.target.value });
  };

  filteredTransactions = () => {
    const allTransactions = this.state.transactions.slice();
    if (this.state.activeCategory === "All") {
      return allTransactions;
    }
    return allTransactions.filter(
      trans => trans.category === this.state.activeCategory
    );
  };

  render() {
    console.log(this.filteredTransactions);
    return (
      <div className="ui grid container">
        <CategorySelector
          activeCategory={this.state.activeCategory}
          handleChange={this.handleChange}
        />

        <TransactionsList transactions={this.filteredTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
