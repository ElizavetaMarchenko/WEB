import React from 'react';
import MaterialBlock from './MaterialBlock';

const Materials = () => {
  return (
    <div>
      <MaterialBlock className='school_block' title='Учебный материал' />
      <MaterialBlock className='clothing_block' title='Одежда' />
      <MaterialBlock className='differents_block' title='Разное' />
    </div>
  );
};

export default Materials;