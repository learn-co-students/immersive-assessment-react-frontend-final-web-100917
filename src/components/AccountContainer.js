import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
 state = {
   transactions: [],
   activeCategory: 'All'
 }

 componentDidMount() {
  fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(d => this.setState({transactions: d}))
  } 

  handleChange = event => {
    this.setState({ activeCategory: event.target.name})
  }


  render() {
    console.log(this.state.transactions)
    return (
      <div className="ui grid container">

        <CategorySelector activeCategory={this.state.activeCategory} handleChange={this.handleChange} />

        <TransactionsList transactions={this.state.transactions} activeCategory={this.state.activeCategory}/>

      </div>
    )
  }
}

export default AccountContainer
