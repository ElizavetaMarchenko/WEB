import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
<<<<<<< HEAD
        <img src={"./img/"+this.props.item.img}/>
=======
        <img src={this.props.item.img}/>
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}р</b>
        <div className='add-to-cart'>+</div>
      </div>
    )
  }
}

export default Item;