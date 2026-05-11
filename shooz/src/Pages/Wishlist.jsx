import React from 'react'
import Navbar from '../components/Navbar'
import { useWishlist } from '../context/WishlistContext'
import '/src/styles/Wishlist.css'
import { Link } from 'react-router-dom';

function Wishlist() {

  const {
    wishlistItems,
    removeFromWishlist
  } = useWishlist();

  return (

    <div>

      <Navbar />

      <p className='breadcrumb'>
        <Link to="/">Home </Link> / Wishlist
      </p>

      <div className='wishlist-page'>

        <h1>Wishlist</h1>

        {
          wishlistItems.length === 0 ? (

            <h5>There are no products in your wishlist!</h5>

          ) : (

            <div className='wishlist-products'>

              {
                wishlistItems.map((item) => (

                  <div
                    key={item.id}
                    className='wishlist-card'
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div className='wishlist-content'>
                      <h3>{item.title}</h3>

                      <p>{item.price}</p>

                      <button
                        onClick={() =>
                          removeFromWishlist(item.type)
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>
                ))
              }

            </div>
          )
        }

      </div>

    </div>
  )
}

export default Wishlist