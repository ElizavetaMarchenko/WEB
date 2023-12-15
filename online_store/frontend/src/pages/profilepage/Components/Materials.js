import React from 'react';
import MaterialBlock from './MaterialBlock';

const Materials = (props) => {
  console.log("id=")
  console.log(props.id)
  return (
    <div>
<<<<<<< HEAD
      <MaterialBlock className='school_block' title='Учебный материал' />
      <MaterialBlock className='clothing_block' title='Одежда' />
      <MaterialBlock className='differents_block' title='Разное' />
=======
      <MaterialBlock className='school_block' title='Учебный материал' id = {props.id}/>
      <MaterialBlock className='clothing_block' title='Одежда' id = {props.id}/>
      <MaterialBlock className='differents_block' title='Разное' id = {props.id}/>
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
    </div>
  );
};

export default Materials;