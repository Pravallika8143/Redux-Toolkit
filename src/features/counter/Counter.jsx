import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec } from "./counterSlice";

function Counter() {
  const { count } = useSelector((state) => state.counterR);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <div className="card shadow-sm w-50 mx-auto text-center p-4">
        <h2 className="mb-2">Counter</h2>

        <div className="display-6 mb-2">
          {count}
        </div>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-success"
            onClick={() => dispatch(inc())}
          >
            + Increment
          </button>

          <button
            className="btn btn-danger"
            onClick={() => dispatch(dec())}
          >
            - Decrement
          </button>

          {/* <button
            className="btn btn-danger"
            onClick={() => dispatch(res())}
          >
            Reset
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Counter;
