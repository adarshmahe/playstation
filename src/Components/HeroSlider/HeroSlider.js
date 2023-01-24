import Carousel from "react-bootstrap/Carousel";
import "./HeroSlider.css";
import Slider01 from "../../Assets/Images/slider01.jpg";
import Slider02 from "../../Assets/Images/slider02.jpg";
import Slider03 from "../../Assets/Images/slider03.jpg";
import { Link } from "react-router-dom";

function HeroSlider() {
  return (
    <Carousel className='mb-5'>
      <Carousel.Item>
        <img className='d-block w-100' src={Slider01} alt='First slide' />
        <Carousel.Caption>
          <div className='text-start slide-left-align'>
            <h2 className='fw-bold'>Great games to look forward to in 2023</h2>
            <p className='fw-light mb-4'>
              From innovative indies to cutting-edge blockbusters, check out the
              most exciting games set to land on PS5 in the coming year.
            </p>
            <Link to='/shop' type='button' className='btn btn-light fw-bold'>
              Start browsing
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={Slider02} alt='Second slide' />

        <Carousel.Caption>
          <div className='text-start slide-left-align'>
            <h2 className='fw-bold'>God of War Ragnarök</h2>
            <p className='fw-light mb-4'>
              Embark on an epic and heartfelt journey as Kratos and Atreus
              struggle with holding on and letting go
            </p>
            <p className='fw-light mb-4'>
              From Santa Monica Studio comes the sequel to the critically
              acclaimed God of War (2018). Fimbulwinter is well underway. Kratos
              and Atreus must journey to each of the Nine Realms in search of
              answers as Asgardian forces prepare for a prophesied battle that
              will end the world. Along the way they will explore stunning,
              mythical landscapes, and face fearsome enemies in the form of
              Norse gods and monsters.
            </p>
            <Link to='/shop' type='button' className='btn btn-light fw-bold'>
              Find out more
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={Slider03} alt='Third slide' />

        <Carousel.Caption>
          <div className='text-start slide-right-align'>
            <h2 className='fw-bold'>Fortnite</h2>
            <p className='fw-light mb-4'>
              Drop into a modern gaming phenomenon
            </p>
            <p className='fw-light mb-4'>
              Be the last player standing in Battle Royale and Zero Build,
              experience a concert or live event, or discover over a million
              creator made games, including racing, parkour, zombie survival and
              more.
            </p>
            <Link to='/shop' type='button' className='btn btn-danger fw-bold'>
              Play free now
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSlider;
