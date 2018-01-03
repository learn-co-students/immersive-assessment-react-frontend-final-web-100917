import React from 'react'

const CategoryField = (props) => {
  const { category, checked } = props

  let handleClick = (event) => {
    props.handleSelection(props.category)
  }

  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">

        <input
          type="radio"
          name="category"
          checked={ checked }
          onClick={handleClick}
        />
        <label>{ category }</label>

      </div>
    </div>
  )
}

export default CategoryField
