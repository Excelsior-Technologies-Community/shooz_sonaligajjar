import React from 'react'
import '/src/styles/DiscoverShoes.css'
import { Link, useNavigate } from 'react-router-dom'
import products from '../data/products';


function DiscoverShoes() {

    const navigate = useNavigate();

    const banner = {
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/wide-banner.png?v=1731045552",
        slug: "COMFORT MEETS FASHION",
        title: "Discover shoes that look great and feel even better",
        content: "Our collection features comfortable and stylish footwear designed to keep your feet happy all day long."
    }
    return (
        <div className='discover-container'>
            <div className='discover-banner'>
                <img src={banner.image} alt={banner.slug} />

                <div className='discover-content'>
                    <h5>{banner.slug}</h5>

                    <h2>{banner.title}</h2>

                    <p>{banner.content}</p>

                    <button onClick={() => navigate(`/collections/${products.id}`)}
                    >SHOP NOW &nbsp;<i className="fa-solid fa-arrow-right"></i></button>
                </div>

            </div>

            

            {/* bottom offer bar */}
            <div className='bottom-bar'>
                <div className="bottom-marquee">
                    <p>
                        {/* <span><i className="fa-solid fa-circle"></i></span> */}
                        Buy one pair of shoes, get the second pair 50% off. Use code BOGO50
                        <span><i className="fa-solid fa-circle"></i></span>
                        &nbsp;&nbsp;&nbsp;
                        Enjoy 20% off your entire order with the code SHOEFRESH20
                        <span><i className="fa-solid fa-circle"></i></span>
                        &nbsp;&nbsp;&nbsp;
                        Get 15% off your first purchase when you sign up for our newsletter. Use code NEWSHOES15
                        <span><i className="fa-solid fa-circle"></i></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DiscoverShoes
