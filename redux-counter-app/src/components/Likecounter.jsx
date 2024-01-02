import React from 'react';
import {useDispatch,useSelector} from "react-redux"
import { incrementLike, decrementLike } from '../action/Actions';

// Create the Redux store

const LikeCounter = () => {
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.reducer)
  return (
    <div style={{flexDirection:"column",display:"flex",justifyContent:"center",textAlign:"center"}} >
      <h1>Counter App Redux</h1>
      <h2>{count}</h2>
      <div>
      <button onClick={() => dispatch(incrementLike())}>Like</button>
      <button onClick={() => dispatch(decrementLike())}>Unlike</button>

      </div>
    </div>
  );
};

export default LikeCounter;
