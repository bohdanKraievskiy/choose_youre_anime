import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AnimeCarousel.css';

const AnimeCarousel = () => {
    const images = [
        `${process.env.PUBLIC_URL}/images/frame1.jpg`,
        `${process.env.PUBLIC_URL}/images/frame2.jpg`,
        `${process.env.PUBLIC_URL}/images/frame3.jpg`,
        // Додайте більше шляхів до зображень
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="frame">
                        <div className="frame-inner">
                            <img src={image} alt={`Frame ${index + 1}`} className="frame-img" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AnimeCarousel;
