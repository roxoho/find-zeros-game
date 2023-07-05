import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//import { Shuffle } from "../components/ActionButtons";

const numbers = [];

  for (let i = 1; i <= 100; i++) {
    const obj = [i,i%10,1,[],[]];
    numbers.push(obj);
  }
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}
//console.log(numbers);
export const GlobalContext = createContext(numbers);

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer,numbers);

    function setValue(val){
        dispatch({
            type: 'setValue',
            payload: val,
        })
    }
    function setTemp(val){
        dispatch({
            type: 'setTemp',
            payload: val,
        })}
    function reset(val){
        dispatch({
            type: 'reset',
            payload: val,
        })
    }
   
  

    return (<GlobalContext.Provider value={
        {
            numbers:state,
            initialnumbers:state,
            setValue,
            reset,
            setTemp,
        }

    }>
        {children}
    </GlobalContext.Provider>);
}
