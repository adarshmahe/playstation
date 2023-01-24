import React from "react";
import { Link } from "react-router-dom";

import "./FeaturedGame.css";

export default function FeaturedGame() {
  return (
    <div
      className='featured-game-wrapper'
      style={{
        backgroundImage:
          "url('https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-hero-banner-desktop-01-ps5-en-11aug22?$4000px$')",
      }}
    >
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-5 text-start text-white'>
            <img
              src='https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-logo-01-en-18may22?$1200px--t$'
              alt='last of us'
              className="w-100 my-5"
            />
            <h2 className="fs-1 fw-light mb-3">Available now&nbsp;</h2>
            <p>
              Relive the beloved game that started it all - rebuilt for
              PS5.
            </p>
            <Link to="/shop" type='button' className='btn btn-danger mt-3 mb-5'>
              Buy now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
