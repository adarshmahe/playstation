import React from 'react'
import Navigation from './Navigation'
import { Outlet } from "react-router-dom";

const MainHeader = ({cartItems, gameItems}) => {
  return (
    <div>
        <Navigation cartItems={cartItems} gameItems={gameItems} />
        <Outlet />
    </div>
  )
}

export default MainHeader