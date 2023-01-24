import React, { useState } from "react";
import "./HardwareShowcase.css";
import hardwareList from "../../Assets/Data/hardware.json";

export default function HardwareShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center mt-5'>
        <div className='col-12'>
          <div
            id='myCarousel'
            className='carousel slide'
            data-bs-ride='false'
            align='center'
          >
            <div className='carousel-inner'>
              {hardwareList.map((item, index) => (
                <div
                  className={`carousel-item ${
                    selectedIndex === index ? "active" : ""
                  }`}
                  key={index}
                >
                  <div className='container text-center mb-5'>
                    <div className='row align-items-center'>
                      <div className='col-md-4'>
                        <div className='hardware-content text-start'>
                          <div className='title-block '>
                            <h3 class="fw-light fs-1 mb-4">{item.Title}</h3>
                            <p class="fs-4 fw-light mb-4">{item.Description}</p>
                            <button type='button' className='btn btn-primary'>
                              {item.ButtonText}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-8'>
                        <div className='hardware-image'>
                          <figure>
                            <picture>
                              <img src={item.Image} alt={item.Title} />
                            </picture>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <ol className='carousel-indicators list-inline hardware-thumbnail'>
              {hardwareList.map((item, index) => (
                <li
                  className={`list-inline-item overflow-hidden ${
                    selectedIndex === index ? "active" : ""
                  }`}
                  key={index}
                >
                  <a
                    id={item.ID}
                    className='selected'
                    data-bs-slide-to={index}
                    data-bs-target='#myCarousel'
                  >
                    <div className='rounded-4 overflow-hidden p-2'>
                      <img src={item.Image} className='img-fluid' />
                      <p className='m-0'>{item.Title}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
