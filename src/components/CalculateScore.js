import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const FinalScore=()=>{
    const {numbers}=useContext(GlobalContext);
    const arr = [...numbers[0][3]];
    let k="";
   let t=0;
    for (let i=0;i<arr.length;i++) {

      if(arr[i][1]===0){
        t+=1;
      }

      else{}
      if(arr.length>=50 && t<10){k="You Lose";
    break;}
      else if(t>=10){
        k="You Win";
        break;

    }

    }
    return(
        <div className="middle">
          <div className="line">DIFFICULTY LEVEL: HARD</div>
           <div className="line">Objective : You Have to find 10 Zeros "0" to win the game</div>
              <div className="line">You Only have 50 moves to do this task</div>
              <div className="line">The boxes have values hidden in them 'from 0 to 9'</div>
              <br/>
              <div className="ans">{k}</div>
          <br />
          <div className="moves">Moves Left : {(50-arr.length)>0?50-arr.length:0}</div>
        </div>
    )
}