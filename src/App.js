import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  const [disabled, setDisabled] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <button
        style={{
          backgroundColor: disabled ? "gray" : buttonColor,
          color: "white",
        }}
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}>
        Change to {newButtonColor}
      </button>
      <input
        id='disable-button-checkbox'
        type='checkbox'
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
