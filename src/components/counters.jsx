import React from "react";
import Counter from "./counter";

const Counters = (props) => {
  return (
    <React.Fragment>
      <button
        className="btn btn-outline-warning btn-sm m-2"
        onClick={props.onReset}
      >
        Reset
      </button>
      <button
        className="btn btn-outline-success btn-sm m-2"
        onClick={props.onAdd}
      >
        Add Item
      </button>
      {props.counters.map((c) => (
        <Counter
          key={c.id}
          counter={c}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          onDelete={props.onDelete}
        ></Counter>
      ))}
    </React.Fragment>
  );
};

export default Counters;