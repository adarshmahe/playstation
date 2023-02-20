import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = ({ cartItems, gameItems }) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const onChangeSeach = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm, searchRedirect) => {
    setValue(searchTerm);
    navigate(`/shop/${searchRedirect}`);
  };

  return (
    <>
      <nav className='d-flex justify-content-between header-nav sticky-top'>
        <div className='d-flex shared-nav align-items-center navbar navbar-expand-lg '>
          <div className='ps-logo'>
            <Link
              className='shared-nav-ps-logo-link'
              to='/playstation'
              aria-label='PlayStation.com'
            >
              <svg
                className='shared-nav-ps-logo'
                width='50px'
                height='50px'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 50 50'
              >
                <g>
                  <g>
                    <path
                      d='M5.8,32.1C4.3,33.1,4.8,35,8,35.9c3.3,1.1,6.9,1.4,10.4,0.8c0.2,0,0.4-0.1,0.5-0.1v-3.4l-3.4,1.1
           c-1.3,0.4-2.6,0.5-3.9,0.2c-1-0.3-0.8-0.9,0.4-1.4l6.9-2.4V27l-9.6,3.3C8.1,30.7,6.9,31.3,5.8,32.1z M29,17.1v9.7
           c4.1,2,7.3,0,7.3-5.2c0-5.3-1.9-7.7-7.4-9.6C26,11,23,10.1,20,9.5v28.9l7,2.1V16.2c0-1.1,0-1.9,0.8-1.6C28.9,14.9,29,16,29,17.1z
            M42,29.8c-2.9-1-6-1.4-9-1.1c-1.6,0.1-3.1,0.5-4.5,1l-0.3,0.1v3.9l6.5-2.4c1.3-0.4,2.6-0.5,3.9-0.2c1,0.3,0.8,0.9-0.4,1.4
           l-10,3.7V40L42,34.9c1-0.4,1.9-0.9,2.7-1.7C45.4,32.2,45.1,30.8,42,29.8z'
                      fill='#0070d1'
                    ></path>
                  </g>
                </g>
              </svg>
            </Link>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          <div className='container-fluid'>
            <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 collapse navbar-collapse' id="navbarSupportedContent">
              <li>
                <Link to='/shop' className='nav-link px-2 link-dark'>
                  Games
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='nav-link px-2 link-dark disabled opacity-25'
                >
                  Hardware
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='nav-link px-2 link-dark disabled opacity-25'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='nav-link px-2 link-dark disabled opacity-25'
                >
                  News
                </Link>
              </li>
              <li>
                <Link to='/shop' className='nav-link px-2 link-dark'>
                  Shops
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='nav-link px-2 link-dark disabled opacity-25'
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='d-flex align-items-center'>
          <div className='sign-in-btn me-3 d-flex align-items-center'>
            {isAuthenticated ? (
              <>
                <div class='dropdown user-nav me-3'>
                  <img
                    src={user.picture}
                    alt={user.name}
                    className='dropdown-toggle'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  />

                  <ul class='dropdown-menu'>
                    <li>
                      <button
                        className='dropdown-item fw-semibold py-3 border-bottom'
                        type='button'
                      >
                        <div className='d-flex align-items-center user-nav-details'>
                          <img src={user.picture} alt={user.name} />
                          <p>{user.name}</p>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        className='dropdown-item fw-semibold py-3'
                        type='button'
                      >
                        {user.email}
                      </button>
                    </li>
                    <li>
                      <button
                        className='dropdown-item fw-semibold py-3'
                        type='button'
                        onClick={() =>
                          logout({ returnTo: window.location.origin })
                        }
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>

                <div className='cart-btn'>
                  <Link to='/cart' type='button' className='btn btn-demo'>
                    <i className='bi bi-cart4 fs-4'></i>
                    <span className='badge bg-primary rounded-pill ms-1'>
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
              </>
            ) : (
              <button
                type='button'
                className='btn btn-primary'
                onClick={() => loginWithRedirect()}
              >
                Sign In
              </button>
            )}
          </div>

          {/* <div className='cart-btn'>
                  <Link to='/cart' type='button' className='btn btn-demo'>
                    <i className='bi bi-cart4 fs-4'></i>
                    <span className='badge bg-primary rounded-pill ms-1'>
                      {cartItems.length}
                    </span>
                  </Link>
                </div> */}

          <div className='header-search dropdown'>
            <button
              className='shared-nav-icon shared-nav-search'
              data-bs-toggle='dropdown'
              aria-expanded='false'
              data-bs-auto-close='inside outside'
            >
              <i className='bi bi-search'></i>
            </button>

            <form className='dropdown-menu p-0 border-0 nav-search-form'>
              <div className='d-flex'>
                <input
                  type='search'
                  placeholder='Search'
                  className='form-control rounded-0 fs-3 fw-light'
                  value={value}
                  onChange={onChangeSeach}
                />
                <div
                  className='btn btn-primary text-white rounded-0 fs-3'
                  onClick={() => onSearch(value)}
                >
                  <i className='bi bi-search'></i>
                </div>
              </div>
              <ul class='list-group'>
                {gameItems
                  .filter((item) => {
                    const searchTerm = value.toLowerCase();
                    const gameTitle = item.Title.toLowerCase();
                    const searchRedirect = item.ID;

                    return (
                      searchRedirect &&
                      searchTerm &&
                      gameTitle.startsWith(searchTerm) &&
                      gameTitle !== searchTerm
                    );
                  })
                  .slice(0, 10)
                  .map((item, id) => (
                    <li
                      key={id}
                      onClick={() => onSearch(item.Title, item.ID)}
                      className='dropdown-menu list-group-item'
                    >
                      {item.Title}
                    </li>
                  ))}
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
