import { useState } from "react";
import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// interface Props {
//   children: ReactNode;
//   onClose: () => void
// }
const TrackerGroup = () => {
  let animes = ["Attack On Titan", "Black Clover", "One Piece"];
  const [visiblity, setVisibility] = useState(true);

  return (
    <>
      <div>
        <ol className="list-group list-group-numbered">
          {animes.map((anime) => (
            <li className="list-group-item" key={anime}>
              {anime}
              <button
                type="button"
                className="btn-close"
                onClick={() => setVisibility(false)}
                aria-label="Close"
              ></button>
            </li>
          ))}
        </ol>
        <input type="text" />
      </div>
    </>
  );
};

export default TrackerGroup;
