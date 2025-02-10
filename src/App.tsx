import ListGroup from "./components/tracker";
import InputComponent from "./components/InputComponent";
import { useState } from "react";

function App() {
  const [anime, setAnime] = useState([
    "Attack On Titan",
    "Black Clover",
    "One Piece",
  ]);

  const handleAddItem = (newItem: string) => {
    if (newItem.trim() !== "") {
      setAnime((prevItems) => [...prevItems, newItem]); // Add new item
    }
  };
  const removeItem = (removedItem: string) => {
    setAnime((prevItem) => prevItem.filter((item) => item !== removedItem));
  };
  return (
    <div>
      <ol className="list-group list-group-numbered">
        {anime.map((item, index) => (
          <ListGroup
            onDelete={() => removeItem(item)}
            key={index}
            name={item}
          />
        ))}
      </ol>
      <InputComponent addItem={handleAddItem}></InputComponent>
    </div>
  );
}

export default App;
