import Carousel from 'react-bootstrap/Carousel';

const BrandCarousel = () => {
    return (
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../../Images/Brands/images.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='../../../Images/Brands/images 2.jpg'
          />
        </Carousel.Item>
      </Carousel>
    );
};

export default BrandCarousel;