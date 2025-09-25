// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc } from "./counterSlice";
import { dec } from "./counterSlice";

function Counter() {
    var {count}= useSelector(state=>state.counterR);
     var dispatch = useDispatch();
    return (
        <div className="border border-2 m-3 p-3 border-secondary rounded-3">
            <h1>Counter:{count}</h1>
            <button className="rounded-3" style={{marginRight:"2%"}}onClick={()=>{dispatch(inc())}}>Increment</button>
            <button className="rounded-3" onClick={()=>{dispatch(dec())}}>Decrement</button>
        </div>
    )
}
export default Counter;