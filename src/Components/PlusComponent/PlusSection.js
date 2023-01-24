import React from "react";
import { Link } from "react-router-dom";

import plusLogo from "../../Assets/Images/ps-plus-black-badge.png";
import plusDec from "../../Assets/Images/ps-plus-dec-monthly-games.jpg";

const plusBg = {
  backgroundImage:
    "url('https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-monthly-games-banner-desktop-01-en-27may22?$4000px$')",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function PlusSection() {
  return (
    <div style={plusBg}>
      <div className='container py-5'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='plus-content text-start'>
              <img src={plusLogo} alt='plus logo' className='w-50 mb-4' />
              <p className="fs-5 fw-light mb-4">
                Enhance your PlayStation experience with access to online
                multiplayer, monthly games, exclusive discounts and more.
              </p>
              <Link to="/shop" type='button' className='btn btn-primary'>
                Explore Playstation Plus
              </Link>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='plus-image my-5'>
              <img src={plusDec} alt='plus decemeber' className='w-100' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
