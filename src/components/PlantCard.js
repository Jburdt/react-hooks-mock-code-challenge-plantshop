import React, { useState } from "react";

function PlantCard({plant}) {
  const [text, setText] = useState("In Stock")

  const handleChangedText = () => {
    setText('sold out')
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {true ? (
        <button onClick={handleChangedText} className="primary">{text}</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
