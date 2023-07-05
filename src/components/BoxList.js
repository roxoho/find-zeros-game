import React, { useContext } from 'react';
import { Number } from './Number';
import { GlobalContext } from '../context/GlobalState';

export const BoxList = () => {

  const { numbers }=useContext(GlobalContext);
  const newNumbers = [...numbers];
  return (
   
    <div className="container">
          <div className="grid">
      {newNumbers.map((item) => (
        <Number key={item[0]} value={item} />
      ))}
    </div>
    </div>
  );
};
