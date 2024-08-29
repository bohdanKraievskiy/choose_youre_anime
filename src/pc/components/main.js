import React,{useState,useEffect} from 'react';
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

    const handleShareInviteLink = () => {
        const shareLink = `https://t.me/anime_world_fun_bot`;
        window.open(shareLink, '_blank');
    };
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkIfMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;

            if (/android/i.test(userAgent)) {
                setIsMobile(true);
                return;
            }

            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                setIsMobile(true);
                return;
            }

            setIsMobile(false);
        };

        checkIfMobile();
    },[])

    const settings = isMobile ? {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        centerMode: true,
        focusOnSelect: true,
        adaptiveHeight: true,
    } : {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        centerMode: true,
        focusOnSelect: true,
        adaptiveHeight: true,
    };
        return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} style={{width:"10vw" ,height:"5vw"}} className="frame">
                        <img src={image} alt={`Frame ${index + 1}`} className="frame-img"/>

                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default AnimeCarousel;
