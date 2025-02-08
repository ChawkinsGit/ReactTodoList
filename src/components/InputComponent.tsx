import { useState } from "react";

interface Props {
  addItem: (item: string) => void;
}
function InputComponent({ addItem }: Props) {
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
      <button onClick={handleClick}>Add anime</button>
    </div>
  );
}

export default InputComponent;
