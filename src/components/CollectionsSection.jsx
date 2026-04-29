import React from 'react'
import { useNavigate } from 'react-router-dom'
import '/src/styles/collectionsSection.css'

const CollectionsSection = () => {
  const navigate = useNavigate();

  const collections = [
    {
      image: "https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-1.png?v=1731045511&width=1920",
      label: "TRENDING",
      title: "Men Collections",
      type: "men"
    },

    {
      image: "https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-3.png?v=1731045510&width=1920",
      label: "LATEST",
      title: "Women Collections",
      type: "women"
    },

    {
      image: "https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-2.png?v=1731045516&width=1920",
      label: "COMFORT",
      title: "Kid Collections",
      type: "kids"
    }
  ];

  return (
    <div className='collection-container'>
      {collections.map((item, index) => (
        <div key={index}
          className='collection-card'
          onClick={() => navigate(`/collections/${item.type}`)}>
          <div className='collection-overlay'>
            <img src={item.image} alt="" />
          </div>

          <div className='overlay'>
            <p>{item.label}</p>
            <h3>{item.title}</h3>
            {/* <p>{item.link}</p> */}
            <span>SHOP NOW</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CollectionsSection
