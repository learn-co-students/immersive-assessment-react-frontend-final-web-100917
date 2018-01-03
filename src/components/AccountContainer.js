import React from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
// import {transactions} from '../transactionsData'

class AccountContainer extends React.Component {
  state = {
    transactions: [],
    activeCategory: 'All'
  }

  componentDidMount = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(data => this.setState({transactions: data}))
  }

  handleChange(category) {
    this.setState({activeCategory: category})
  }

  render() {
    console.log(this.state.activeCategory)
    return (
      <div className="ui grid container">

        <CategorySelector
          activeCategory={this.state.activeCategory}
          handleChange={this.handleChange}
        />

        <TransactionsList
          activeCategory={this.state.activeCategory}
          transactions={this.state.transactions}
        />

      </div>
    )
  }
}

export default AccountContainer
