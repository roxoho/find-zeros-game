import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Number = ({ value }) => {
  const [isActive, setIsActive] = useState(true);
  const { numbers, setValue, setTemp } = useContext(GlobalContext);

  const handleClick = () => {
    setIsActive(!isActive ? isActive : !isActive);
    const temp = [...numbers[0][3]];

    let isValuePresent = false;
    for (let j = 0; j < temp.length; j++) {
      if (value[0] === temp[j][0]) {
        isValuePresent = true;
        break;
      }
    }

    if (!isValuePresent) {
      setValue([...numbers[0][3], [value[0], value[1]]]);
    }

    setTemp([value[0]]);
  };
  
  return (
    <div className={`square-box ${isActive ? 'active' : 'inactive'}`} onClick={handleClick}>
      <h3><span>{isActive ? "" : value[1]}</span></h3>
    </div>
  );
};
