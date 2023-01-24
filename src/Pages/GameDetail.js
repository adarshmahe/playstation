import React from 'react'
import GameDetails from '../Components/GameDetails/GameDetails'

export default function GameDetail({gameItems, handleAddGame, productItems}) {
  return (
    <div>
        <GameDetails handleAddGame={handleAddGame} gameItems={gameItems} productItems={productItems} />
    </div>
  )
}
