import { useState } from "react";

function InputComponent({ addItem }) {
  const [inputVal, setInputVal] = useState("");

  const handleClick = () => {
    addItem(inputVal);
    setInputVal("");
  };
  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleClick()}>Add anime</button>
    </div>
  );
}

export default InputComponent;
