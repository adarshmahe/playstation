import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import gameData from "../../Assets/Data/game.json";
import { CustomButtonGroup } from "./ButtonGroup";
import "./NewReleasesSlider.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
};

export default function NewReleasesSlider() {
  const [titles, setTitles] = useState(gameData);

  return (
    <div className='bg-black py-5 text-start text-white mb-5'>
      <div className='container position-relative'>
        <h3 className='game-collection-title'>New releases</h3>
        <h5 className='game-collection-subtitle'>
          Great PS5 and PS4 games available now
        </h5>
        <Carousel
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<CustomButtonGroup />}
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition='all .5'
          transitionDuration={500}
          containerClass='carousel-container'
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          {titles.slice(0, 24).map((name, id) => (
            <div key={id} className='my-5'>
              <Link to={`/shop/${name.ID}`} className='text-decoration-none'>
                <div className='games-cover mb-3'>
                  <img src={name.image} alt={name.Title} />
                </div>
                <h3 className='games-title'>{name.Title}</h3>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
