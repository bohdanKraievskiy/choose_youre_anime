import React from 'react';
import Slider from 'react-slick';
import '../styles/main.css';

const AnimeCarousel = () => {
    const images = [
        `${process.env.PUBLIC_URL}/anime/chainsawman_power.gif`,
        `${process.env.PUBLIC_URL}/anime/hunterxhunter_killua.gif`,
        `${process.env.PUBLIC_URL}/anime/blackclover_asta.gif`,
        `${process.env.PUBLIC_URL}/anime/bleach.gif`,
        `${process.env.PUBLIC_URL}/anime/image1.jpg`,
        `${process.env.PUBLIC_URL}/anime/Jujutsu Kaisen.gif`,
        `${process.env.PUBLIC_URL}/anime/naruto.gif`,
        `${process.env.PUBLIC_URL}/anime/Naruto_Madara.gif`,
        `${process.env.PUBLIC_URL}/anime/Ragna.gif`,
        `${process.env.PUBLIC_URL}/anime/shikimori is not just cute.gif`,
        `${process.env.PUBLIC_URL}/anime/sololeveling.gif`,
        `${process.env.PUBLIC_URL}/anime/sololeveling_godofstatue.gif`,
        `${process.env.PUBLIC_URL}/anime/voleyball.gif`,
        `${process.env.PUBLIC_URL}/anime/клинок рассекающий демонов.gif`,
        `${process.env.PUBLIC_URL}/anime/магічка сукуно.gif`,
    ];

    const settings = {
        dots: true, // Показувати точки навігації
        infinite: true, // Безкінечне гортання
        speed: 500, // Швидкість анімації (в мілісекундах)
        slidesToShow: 6, // Скільки слайдів показувати одночасно
        slidesToScroll: 3, // Скільки слайдів переміщати при гортанні
        autoplay: true, // Автоматичне гортання
        autoplaySpeed: 1000, // Інтервал автоматичного гортання
        pauseOnHover: true, // Зупинка автоматичного гортання при наведенні
        centerMode: true, // Центрування активного слайда
        focusOnSelect: true, // Гортання при натисканні на слайд
        adaptiveHeight: true // Адаптація висоти каруселі під висоту слайда
    };
    const handleShareInviteLink = () => {
        const shareLink = `https://t.me/anime_world_fun_bot`;
        window.open(shareLink, '_blank');
    };
    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="frame">
                        <img src={image} alt={`Frame ${index + 1}`} className="frame-img"/>

                    </div>
                ))}
            </Slider>
            <div className="_carousel_text" onClick={handleShareInviteLink}>WHO I`M?</div>
        </div>
    );
};

export default AnimeCarousel;
