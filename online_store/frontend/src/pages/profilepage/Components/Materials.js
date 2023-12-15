import React from 'react';
import MaterialBlock from './MaterialBlock';

const Materials = (props) => {
  console.log("id=")
  console.log(props.id)
  return (
    <div>
      <MaterialBlock className='school_block' title='Учебный материал' id = {props.id}/>
      <MaterialBlock className='clothing_block' title='Одежда' id = {props.id}/>
      <MaterialBlock className='differents_block' title='Разное' id = {props.id}/>
    </div>
  );
};

export default Materials;