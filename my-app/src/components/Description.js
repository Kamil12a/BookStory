import "../styles/displayBooks.css";
import { useState } from "react";
export function Description({ book, id }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    showDescription ? setShowDescription(false) : setShowDescription(true);
  };
  return (
    <>
      {book.hasOwnProperty("descriptionShorter") && (
        <>
          {showDescription && (
            <>
              <p className="descriptionOfBook"> opis: {book.description}</p>
              <button onClick={handleClick} className="buttonExpand">
                skróc
              </button>
            </>
          )}
          {!showDescription && (
            <>
              <p className="descriptionOfBook">
                {" "}
                opis: {book.descriptionShorter}...
              </p>
              <button onClick={handleClick} id={id} className="buttonExpand">
                rozwin
              </button>
            </>
          )}
        </>
      )}
      {!book.hasOwnProperty("descriptionShorter") && (
        <>
          <p className="descriptionOfBook"> opis: brak</p>
        </>
      )}
    </>
  );
}
