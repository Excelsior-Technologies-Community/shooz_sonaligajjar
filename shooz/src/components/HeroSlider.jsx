import React, { useEffect, useState } from 'react'
import '/src/styles/heroSlider.css'
import { Link, useNavigate } from 'react-router-dom';

function HeroSlider() {

    const navigate = useNavigate();
    // SLIDERS
    const slides = [
        {
            id: 1,
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/banner-1.png?v=1731045553",
            title: "Discover The Latest Trends In Footwear",
            subtitle: "STEP INTO STYLE",
            desc: "From classic sneakers to trendy boots, our collection has something for everyone."
        },

        {
            id: 2, 
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/banner-2.png?v=1731045552",
            title: "Find The Perfect Pair Of Shoes To Complete.",
            subtitle: "ELEVATE YOUR LOOK",
            desc: "Explore our wide range of styles, colors, and materials to find the perfect shoes of any occasion."
        },

        {
            id: 3,
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/banner-3.png?v=1731045552",
            title: "Discover Shoes That Look Great And Feel Even Better.",
            subtitle: "COMFORT MEETS FASHION",
            desc: "Our Collection features comfortable and stylish footwear design to keep your feet happy all day long."
        }

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        setAnimate(false);

        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 1000); // small delay to retrigger animation

        return () => clearTimeout(timeout);
    }, [currentIndex]);

    return (
        <div>
            {/* SLIDER */}
            <div className='home-container'>
                <div className='image-slider'>
                    <img src={slides[currentIndex].image} alt="banner" />
                    <div className={`overlay-content ${animate ? "animate" : ""}`}>
                        <h3>{slides[currentIndex].subtitle}</h3>
                        <h1>{slides[currentIndex].title}</h1>
                        <p>{slides[currentIndex].desc}</p>

                        <button className='img1-btn'
                        onClick={() => navigate(`/collections/${slides.id}`)}
                        >
                            SHOP NOW &nbsp;
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSlider
