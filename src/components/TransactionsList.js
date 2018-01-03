import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {

  if (props.transList.activeCategory === "") {
      const filteredList = props.transList.transaction.map }
  else {
    const filteredList = filterList
    }
  

  const filterList = props.transList.transaction.filter(trans => trans.category === props.transList.activeCategory)
  console.log(filterList)


  const postedAt = filterList.map((t, index)=>{
      return ( <Transaction trans={t} category={props.transList.activeCategory}/> )
  })
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
        {postedAt}
      </tbody>
    </table>
  )
}

export default TransactionsList
