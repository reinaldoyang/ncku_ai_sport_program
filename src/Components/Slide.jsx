import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../slide.css';

function Slide({ slides, className }) {
  return (
    <Carousel className={`my-carousel ${className || ""}`}>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx} interval={3000}>
          <img src={slide.imgSrc} alt={`slide-${idx}`} className="carousel-img" />
          {(slide.title || slide.text) && (
            <Carousel.Caption>
              {slide.title && <h3 className="slider-text">{slide.title}</h3>}
              {slide.text && <p className="slider-text">{slide.text}</p>}
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slide;
