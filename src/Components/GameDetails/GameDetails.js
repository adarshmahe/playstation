import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./GameDetails.css";
import { addToCart } from "../../Features/CartSlice";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../../Features/ProductsAPI";

export default function GameDetails() {
  
  const { data, isLoading } = useGetAllProductsQuery();
  
  const [addtoCart, setAddToCart] = useState("Add to Cart");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  let currentProduct;
  let para = useParams();
  if (isLoading) {
    console.log("flaggin..");
  } else {
    const { gameId } = para;
    currentProduct = data.find((item) => item.ID == gameId);
  }

  const handleAddToCart = () => {
    dispatch(addToCart(currentProduct));
    navigate('/cart', {replace: true});
    navigate(0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: "black" }}>
      <div
        className='hero-banner'
        style={{
          backgroundImage: `url(${currentProduct.image})`,
        }}
      ></div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-5'>
            <div className='game-details text-start text-white p-4'>
              <h3>{currentProduct.Title}</h3>
              <h5 className='fw-light mb-5'>Status: {currentProduct.Status}</h5>
              <h4>₹ {currentProduct.Price ? currentProduct.Price : "2000"}</h4>
              <div className='d-flex'>
                <button
                  className='btn btn-warning me-3 w-100'
                  onClick={() => {
                    handleAddToCart(currentProduct);
                    setAddToCart("In Cart");
                  }}
                >
                  {addtoCart}
                </button>
                <button className='btn btn-outline-warning'>
                  <i className='bi bi-heart'></i>
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-7'>
            <ul className='game-compactability text-white text-start py-5'>
              <li>
                <i className='bi bi-badge-hd me-2'></i> Highlights Supported?:{" "}
                {currentProduct["Highlights Supported?"]}
              </li>
              <li>
                <i className='bi bi-cast me-2'></i> Fully Optimized?:{" "}
                {currentProduct["Fully Optimized?"]}
              </li>
              <li>
                <i className='bi bi-journal me-2'></i> Publisher:{" "}
                {currentProduct.Publisher}
                Interactive
              </li>
              <li>
                <i className='bi bi-controller me-2'></i> Genre:{" "}
                {currentProduct.Genre}
              </li>
            </ul>
          </div>
        </div>

        <div className='row justify-content-center text-white'>
          <div className='col-md-8'>
            <h2 className='mb-5'>Game and Legal Info</h2>
            <div className='game-info-box text-start mb-5 p-5'>
              <p>
                Set in a brutally unforgiving post-apocalyptic world overrun by
                the undead, 7 Days to Die is an open-world game that is a unique
                combination of first person shooter, survival horror, tower
                defense, and role-playing games. It presents combat, crafting,
                looting, mining, exploration, and character growth, in a way
                that's completely new to the survival game genre.
              </p>
              <br />
              <br />
              <p>
                Explore – Huge, unique and rich environments, offering the
                freedom to play the game any way you want.
              </p>
              <br />
              <br />
              <p>
                Craft – Craft and repair weapons, clothes, armor, tools,
                vehicles, and more.
              </p>
              <br />
              <br />
              <p>
                Build – Take over a ruin, or build from the ground-up. Design
                your fortress to include traps and defensive positions to
                survive the undead - the world is fully destructible and
                moldable.
              </p>
              <br />
              <br />
              <p>
                Cooperate or Compete – Includes two player split screen mode,
                with support for up to 4 players online, in Player versus
                Player, co-op survival, or co-op creative modes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
