import React from "react";
import SlotM from "./Sloat"; // Import the SlotM component from the Sloat file
import "./Game.css"; // Import the Game.css stylesheet

const App = () => {
  return (
    <div>
      {/* Heading for the Slot Machine Game */}
      <h1 className="heading">
        🎰 Welcome to
        <span style={{ fontWeight: "bolder" }}> Slot Machine Game</span> 🎰
      </h1>

      {/* Container for the slot machine game */}
      <div className="container">
        {/* Div to hold multiple SlotM components */}
        <div className="SloatCheck">
          {/* SlotM components with different props to show various slot outcomes */}
          <SlotM x="😄" y="😄" z="😄" />
          <SlotM x="😄" y="😫" z="😄" />
          <SlotM x="🍎" y="🍌" z="🍎" />
          <SlotM x="👩‍❤️‍👩" y="👩‍❤️‍👩" z="👩‍❤️‍👩" />
        </div>
      </div>
    </div>
  );
};

export default App;
