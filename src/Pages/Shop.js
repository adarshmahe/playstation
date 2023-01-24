import React from "react";
import DigitalGames from "../Components/DigitalGames/DigitalGames";

export default function Shop({gameItems, handleAddGame}) {
  return (
    <>
      <DigitalGames handleAddGame={handleAddGame} gameItems={gameItems} />
    </>
  );
}
