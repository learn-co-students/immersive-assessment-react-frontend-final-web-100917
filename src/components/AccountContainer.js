import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor() {
    super()
      this.state = {
        transactions: [],
        selectedCategory: "All"
      }
  }

  getData = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(json => this.setState({transactions: json}))
  }

  componentDidMount(){
    this.getData()
  }

  handleSelection = (category) => {
    this.setState({selectedCategory: category})
  }

  filter = () => (
    this.state.transactions.filter((transaction)=>{return transaction.category === this.state.selectedCategory})
  )

  applyFilter = () => {
    if(this.state.selectedCategory === "All"){
      return this.state.transactions
    } else {
      return this.filter()
    }
  }


  render() {

    console.log(this.state)
    return (
      <div className="ui grid container">

        <CategorySelector handleSelection={this.handleSelection}/>

        <TransactionsList transactions={this.applyFilter()} />

      </div>
    )
  }
}

export default AccountContainer
