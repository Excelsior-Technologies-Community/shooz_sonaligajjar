import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
import '/src/styles/collections.css'
import CollectionCard from '../components/CollectionCard';
import FashionBanner from '../components/FashionBanner';
import LookbookSlider from '../components/LookbookSlider';

function Collections() {
  const data = [
        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=1944",
            title: "Athletic Footwear"
        },

        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=1944",
            title: "Boots For Every Occasion"
        },

        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=720",
            title: "Luxury Leather Shoes"
        },

        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=720",
            title: "Sandals & Slides"
        },

        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-1.png?v=1731657959&width=720",
            title: "Sustainable Footwear"
        }
    ];
      
  return (
    <div>
      <Navbar/>
      <p className='breadcrumb'>
        <Link to="/">Home</Link> / Collections
      </p>

      <div className='collections-page'>
        {data.map((item, index) => (
          <CollectionCard key={index} item={item}/>
        ))}
      </div>
      
      {/* fashion banner */}
      <FashionBanner/>

      {/* lookbook slider */}
      <LookbookSlider/>
    </div>
  )
}

export default Collections
