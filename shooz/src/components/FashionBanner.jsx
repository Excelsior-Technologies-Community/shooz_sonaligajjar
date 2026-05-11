import React from 'react'
import '/src/styles/FashionBanner.css'
import { GiFamilyHouse } from 'react-icons/gi'

function FashionBanner() {
    return (
        <div>
            <div className='fashion-banner'>
                <div className='banner-content'>
                    <p style={{ textAlign: "left", fontFamily: "manrope", fontSize: "12px", letterSpacing: "2px", fontWeight: "bold"}}>STYLE REDEFINED</p>

                    <h2>
                        Your Passport To Fashion Elegance
                    </h2>

                    <p className='desc'>
                        Indulge in the art of fashion with Gluck. Discover a world of
                        sophistication and timeless elegance.
                    </p>

                    <button>DISCOVER NOW</button>
                </div>
            </div>
        </div>
    )
}

export default FashionBanner
