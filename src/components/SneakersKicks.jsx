import React from 'react'
import '/src/styles/SneakersKicks.css'
import { Navigate, useNavigate } from 'react-router-dom';

const SneakersKicks = () => {

    const navigate = useNavigate();

    const sneakers = [
        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=540",
            price: "$25.00",
            title: "Classic White Tennis Sneakers",
            label: "SportyFeet",
            type: "classic-white-tennis sneakers"
        },

        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=540",
            price: "$25.00",
            title: "Waterproof Hiking Boots",
            label: "TrailGear",
            type: "waterproof-hiking-boots"
        },

        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=540",
            price: "$21.00",
            title: "Classic Leather Sneakers",
            label: "UrbanStep",
            type: "classic-leather-sneakers"
        },

        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=540",
            price: "$25.00",
            title: "High-Top Canvas Sneakers",
            label: "TrendyFeet",
            type: "high-top-canvas-sneakers"
        }
    ];
    return (
        <div className='sneakers'>
            <p className='sneaker-subtitle'>THE LATEST TRENDS IN ATHLETIC FOOTWEAR</p>
            <h1>Sneakers & Kicks</h1>

            <div className='sneakers-container'>
                {sneakers.map((item, index) => (
                    <div key={index}
                        className='sneaker-card'
                        onClick={() => navigate(`/sneakers/${item.type}`)}>
                        <div className='sneaker-overlay'>
                            <img src={item.image} alt="" />
                        </div>

                        <div className='overlay-sneakers'>
                            <p>{item.price}</p>
                            <h3>{item.title}</h3>
                            <p className='sneaker-label'>{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SneakersKicks
