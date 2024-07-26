import React from "react";
import "./Game.css";

// Define a functional component SlotM that takes props as its argument
const SlotM = (props) => {
  // Destructure the props to extract x, y, and z
  let x = props.x;
  let y = props.y;
  let z = props.z;

  // Check if all the props (x, y, z) are the same
  if (x === y && y === z) {
    return (
      <>
        {/* If all values match, render this block */}
        <div className="slot-machine">
          <div className="row matching">
            <span className="emoji">{x}</span>
            <span className="emoji">{y}</span>
            <span className="emoji">{z}</span>
            <div className="status">This is matching</div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* If values do not match, render this block */}
        <div className="slot-machine">
          <div className="row not-matching">
            <span className="emoji">{x}</span>
            <span className="emoji">{y}</span>
            <span className="emoji">{z}</span>
            <div className="status">This is not matching</div>
          </div>
        </div>
      </>
    );
  }
};

export default SlotM;
