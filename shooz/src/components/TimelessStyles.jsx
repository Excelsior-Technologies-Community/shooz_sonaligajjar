import React from 'react'
import '/src/styles/TimelessStyles.css'
import { useNavigate } from 'react-router-dom';

function TimelessStyles() {

    const navigate = useNavigate();

    const timelessStyles = [
        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-1.png?v=1731045532&width=1920",
            label: "COMFORT MEETS FASHION",
            content: "Discover shoes that look great"
        },

        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-2.png?v=1731045532&width=1920",
            label: "ELEVATE YOUR LOOK",
            content: "Find the perfect pair of shoes"
        },

        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-3.png?v=1731045526&width=1920",
            label: "STEP INTO STYLE",
            content: "The latest trend in footwear"
        },

        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-4.png?v=1731045517&width=1920",
            label: "SHOP BY BRAND",
            content: "Find your favorite brands and styles"
        },

        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-5.png?v=1731045518&width=1920",
            label: "SALE AND CLEARANCE",
            content: "Shop our latest deals and discounts"
        }
    ];
  return (
    <div className='timeless-container'>
        <div className='timeless-top'>
            <h5>FASHION SNEAKERS</h5>
            <h1>Timeless styles for everyday wear</h1>
            <p style={{ textAlign: "center"}}>High-performance footwear for sports and <br></br>workouts</p>
        </div>

        <div className='timeless-images'>
            {timelessStyles.map((item, index) => (
                <div key={index}
                className={`timeless-grid ${index >= 3 ? "bottom-card" : "top-card"}`}
                >
                    <img src={item.image} alt={item.content} />

                    <div className='timeless-content'>
                        <h5>{item.label}</h5>
                        <p>{item.content}</p>
                        <span onClick={() => navigate(`/collections/${item.id}`)}>SHOP NOW</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TimelessStyles
