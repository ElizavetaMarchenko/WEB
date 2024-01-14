import React from 'react';
import MaterialBlock from './MaterialBlock';

const Materials = (props) => {
  console.log("id=")
  console.log(props.id)
  return (
    <div>
      <MaterialBlock className='my_product_block' title='Мои товары' id = {props.id}/>
       {/* <MaterialBlock className='like_block' title='Понравившиеся' id = {props.id}/> */}
    </div>
  );
};

export default Materials;