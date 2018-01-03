import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import CategorySelector from './CategorySelector';
// import { transactions } from '../transactionsData';

class AccountContainer extends Component {
  constructor(props) {
    super(props);
    //... your code here
    this.state = {
      transactions: [],
      activeCategory: 'All'
    };
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(transactions => this.setState({ transactions }));
  }

  handleChange = newCategory => {
    this.setState({ activeCategory: newCategory });
  };

  filteredCategories = () => {
    if (this.state.activeCategory === 'All') {
      return this.state.transactions;
    } else {
      return this.state.transactions.filter(transaction =>
        transaction.category.includes(this.state.activeCategory)
      );
    }
  };

  render() {
    return (
      <div className="ui grid container">
        <CategorySelector
          activeCategory={this.state.activeCategory}
          handleChange={this.handleChange}
        />

        <TransactionsList transactions={this.filteredCategories()} />
      </div>
    );
  }
}

export default AccountContainer;
