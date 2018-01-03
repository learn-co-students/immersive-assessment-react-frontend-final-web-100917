import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {


    componentDidMount() {
      fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
      .then((data)=>data.json())
      .then(data=>this.setState({
        transaction: data
      }))
    }

    state = {
      transaction: [],
      activeCategory: ""
    }


  handleChange = (cat) => {
    const label = cat.category
    this.setState({
      activeCategory: label
    })
  }

  render() {
    console.log(this.state.activeCategory)
    return (
      <div className="ui grid container">

        <CategorySelector handleChange={this.handleChange} activeCategory={this.state.activeCategory}/>

        <TransactionsList transList={this.state}/>

      </div>
    )
  }
}

export default AccountContainer
