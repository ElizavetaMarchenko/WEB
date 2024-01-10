import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {
  render() {
    return (
      <div className='item'>
        <Link to={`/product/${this.props.item.id}`}>
          <img src={this.props.item.img} alt={this.props.item.title} />
        </Link>
        <div>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}р</b>
        </div>
      </div>
    );
  }
}

export default Item;