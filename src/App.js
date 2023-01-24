import "./App.css";
import Footer from "./Components/Footer/Footer";
import MainHeader from "./Components/MainHeader/MainHeader";
import SonyHeader from "./Components/SonyHeader/SonyHeader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Pages/Error";
import Shop from "./Pages/Shop";
import Home from "./Pages/Home";
import GameDetail from "./Pages/GameDetail";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import gameData from "./Assets/Data/game.json";

function App() {
  const gameItems = gameData;
  const [cartItems, setCartItems] = useState([]);

  const handleAddGame = (game) => {
    const gameExist = cartItems.find((item) => item.ID === game.ID);
    if (gameExist) {
      setCartItems(
        cartItems.map((item) =>
          item.ID === game.ID
            ? { ...gameExist, quantity: gameExist.quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...game, quantity: 1 }]);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHeader cartItems={cartItems} gameItems={gameItems} />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "shop",
          element: <Shop gameItems={gameItems} handleAddGame={handleAddGame} />,
        },
        {
          path: "shop/:gameId",
          element: (
            <GameDetail cartItems={cartItems} handleAddGame={handleAddGame} gameItems={gameItems} />
          ),
        },
        {
          path: "cart",
          element: <Cart cartItems={cartItems} handleAddGame={handleAddGame} />,
        },
      ],
    },
  ]);

  return (
    <div className='App'>
      <SonyHeader />

      <RouterProvider router={router} />

      <Footer />
    </div>
  );
}

export default App;
