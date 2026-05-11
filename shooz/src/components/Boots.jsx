import React from 'react'
import '/src/styles/Boots.css'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

function Boots() {

    const navigate = useNavigate();

    const { category } = useParams();
    const boots = [
        {
            id: "athletic-footwear",
            image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=1944",
            title: "Athletic Footwear"
        },

        {
            id: "luxury-leather-shoes",
            image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=540",
            title: "Luxury Leather Shoes"
        },

        {
            id: "sustainable-footwear",
            image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-1.png?v=1731657959&width=540",
            title: "Sustainable Footwear"
        },

        {
            id: "sandals-and-slides",
            image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=540",
            title: "Sandals & Slides"
        }
    ];
  return (
    <div className='boots-container'>
        <div className='boots-top'>
            <h5>STYLISH AND COMFORTABLE FOR EVERY SEASON</h5>
            <h1>Boots & Booties</h1>
            <p>Check out our collection of the top New Products that encourage conversion.</p>
        </div>

        <div className='boots-cards'>
            {boots.map((item) => (
                <div key={item.id}
                className='boots-card'
                onClick={() => navigate(`/collectionPage/${item.id}`)}
                >
                    <div className='boots-overlay'>
                        <img src={item.image} alt={item.title} />
                    </div>
                        <p>{item.title} <span>8</span></p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Boots
