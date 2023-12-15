import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el=>(
            <Item key={el.id} item={el} />
        ))}
      </main>
    )
  }
}

<<<<<<< HEAD
export default Items;
=======
export default Items;
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
