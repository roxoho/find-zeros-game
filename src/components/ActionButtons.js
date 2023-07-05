import React, { useContext,useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Startnewgame = ()=>{
    const [playerName,setPLayerName1]=useState('Player');
    const{reset, initialnumbers}=useContext(GlobalContext)
    function handlename1(e){
        const news=e.target.value;
        setPLayerName1(news);
    }
    function handlereset(){
        reset(initialnumbers);
    }
    return(

        <>
        <div className="name">{playerName} vs The Game</div>
        <label htmlFor="player" className="player">Enter Your Name :</label> <input type="text" value={playerName} onChange={handlename1} /><br />
        </>
    )
}