export default (state, action) => {
  function set(val){
    val[0][3]=action.payload;
    return val;
  }
  function sett(val){
    let k=1;
    for(const num of val[0][4]){
      if(num===action.payload){
        k=0;
        break;
      }
    }
    if(k===0)return val;
    val[0][4]=[...val[0][4],action.payload]
    return val;
  }
  
  
    switch (action.type) {
      case 'setValue':
        return set([...state]);
      case 'reset':
        return action.payload;
        case 'setTemp':
          return sett([...state]);
      default:
        return state;
    }
  };
  