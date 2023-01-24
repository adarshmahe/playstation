import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import gameData from "../../Assets/Data/game.json";
import "./BlogSlider.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function BlogSlider() {
  const [titles, setTitles] = useState(gameData);

  return (
    <div className='py-5 mb-5'>
      <div className='container'>
        <h2 className='fw-light fs-1'>The latest news from PlayStation Blog</h2>
        <Carousel
          arrows={true}
          centerMode={true}
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition='all .5'
          transitionDuration={500}
          containerClass='carousel-container pb-4'
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px blog-item'
        >
          {titles.slice(0, 24).map((name, id) => (
            <div key={id} className='my-5'>
              <div className='blogs-wrapper mb-3'>
                <div className='px-2'>
                  <Link to={`/shop/${name.ID}`} className="text-decoration-none text-black">
                    <img className='mb-2' src={name.image} alt={name.Title} />
                    <h3>{name.Title}</h3>
                    <p>Genre: {name.Genre}</p>
                    <p>Status: {name.Status}</p>
                    <p>
                      <b>Publisher:</b> {name.Publisher}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
