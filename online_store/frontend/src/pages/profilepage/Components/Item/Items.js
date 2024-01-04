import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (

      <main>
      {Array.isArray(this.props.items)
        ? this.props.items.map(el=>(
            <Item key={el.id} item={el} search = {this.props.SetSearch}/>
        ))
        : null}
      </main>
    )
  }
}

export default Items;