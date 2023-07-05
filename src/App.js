import React from 'react';
import { Header } from './components/Header';
import { BoxList } from './components/BoxList';
import { GlobalProvider } from './context/GlobalState';
import { FinalScore } from './components/CalculateScore';

export default function App(){

  
  return(
    
    <div className='g'>
    <GlobalProvider>
    <div className='item1'><Header /></div>
    <div className="item4"><FinalScore /> </div>
    <div className='item3'><BoxList /> </div>
    </GlobalProvider>
    </div>
  )
}