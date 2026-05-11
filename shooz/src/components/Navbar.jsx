import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { useCart } from '../context/CartContext';
import '/src/styles//Navbar.css'
import { FaFacebookF, FaHeart, FaInstagram, FaSearch, FaShoppingBag, FaTimes, FaTwitter, FaUser } from 'react-icons/fa'
import Wishlist from '../Pages/Wishlist';
import { useWishlist } from '../context/WishlistContext';

const Navbar = () => {

    // SEARCH
    const [searchOpen, setSearchOpen] = useState(false);

    // CART
    const [cartOpen, setCartOpen] = useState(false);

    const { cartItems, increaseQuantity, decreaseQuantity, removeItem } = useCart();
    const { wishlistItems } = useWishlist();

    //nav-items
    const [showShop, setShowShop] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const [showBlog, setShowBlog] = useState(false);
    const [showPage, setShowPage] = useState(false);

    return (
        <div>

            {/* 🔍 SEARCH OVERLAY */}
            <div className={`search-overlay ${searchOpen ? "active" : ""}`}
                onClick={() => setSearchOpen(false)}>

                <div className="search-container" onClick={(e) => e.stopPropagation()}>

                    <p className="search-title">WHAT ARE YOU LOOKING FOR?</p>

                    <div className="search-input-box">
                        <input type="text" placeholder="Search Products..." />
                        <FaSearch className="search-icon" />
                    </div>

                    <FaTimes
                        className="close-btn"
                        onClick={() => setSearchOpen(false)}
                    />
                </div>
            </div>

            {/* CART DRAWER */}
            <div className={`cart-drawer ${cartOpen ? "active" : ""}`}
                onClick={() => setCartOpen(false)}
            >
                <div className='cart-content'
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='cart-header'>
                        <h2>
                            Cart (
                            {
                                cartItems.reduce(
                                    (total, item) => total + item.quantity,
                                    0
                                )
                            }
                            )
                        </h2>
                        <FaTimes onClick={() => setCartOpen(false)} />
                    </div>

                    {cartItems.length === 0 ? (
                        <p>No Products in the Cart.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={`${item.id}-${item.size}`} className='cart-item'>

                                <img src={item.image} alt={item.title} />

                                <div className='cart-details'>

                                    <h4>{item.title} - {item.size}</h4>

                                    <p>{item.price}</p>

                                    {/* quantity button */}
                                    <div className='quantity-box'>

                                        <button onClick={() => decreaseQuantity(item.id, item.size)}>-</button>

                                        <span>{item.quantity}</span>

                                        <button onClick={() => increaseQuantity(item.id, item.size)}>+</button>
                                    </div>

                                    {/* remove button */}
                                    <button className='remove-btn'
                                        onClick={() => removeItem(item.id, item.size)}
                                    >Remove</button>


                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>


            {/* Top offer bar */}
            <div className='top-bar'>
                <div className="marquee">
                    <p>
                        Enjoy 20% off your entire order with the code SHOEFRESH20.
                        &nbsp;&nbsp;&nbsp;
                        Get 15% off your first purchase when you sign up for our newsletter.
                    </p>
                </div>
            </div>

            {/* secondary bar */}
            <div className='sub-bar'>
                <div>One Day Delivery Available</div>

                <div className='right'>
                    <span>Login / Register</span>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>

            {/* Main navbar */}
            <nav className='navbar'>
                <div className='logo'>
                    <img src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=250" alt="shooz" />
                </div>

                <ul className='nav-links'>
                    {/* <li className='active'>Home</li> */}
                    <li>
                        <NavLink
                            style={{ fontFamily: "manrope", textDecoration: "none" }}
                            to="/"
                            end
                            className={({ isActive }) => isActive ? "active" : ""}
                        > Home
                        </NavLink>
                    </li>
                    <li className='nav-items'
                        onMouseEnter={() => setShowShop(true)}
                        onMouseLeave={() => setShowShop(false)}>

                        <a href="#">Shop <i class="fa-solid fa-angle-down"></i></a>
                        {showShop && (
                            <div className='mega-menu'>
                                <div className='mega-column'>
                                    <h3>Layout</h3>
                                    <p>1. Filter Sidebar</p>
                                    <p>2. Filter Top</p>
                                    <p>3. Filter Drawer</p>
                                    <p>4. Without Filter</p>
                                    <p>5. Collection - 2 columns</p>
                                    <p>6. Collection - 3 columns</p>
                                    <p>7. Collection - 4 columns</p>
                                </div>

                                <div className='mega-column'>
                                    <h3>Features</h3>
                                    <p>Banner Image</p>
                                    <p>Banner No Image</p>
                                    <p>Banner Split</p>
                                    <p>Collection List</p>
                                    <p>Sub Collection</p>
                                    <p>Pagination</p>
                                    <p>Infinity</p>
                                    <p>Load More</p>
                                </div>

                                <div className='mega-column'>
                                    <h3>Hover Style</h3>
                                    <p>Hover Style 1</p>
                                    <p>Hover Style 2</p>
                                    <p>Hover Style 3</p>
                                    <p>Hover Style 4</p>
                                    <p>Hover Style 5</p>
                                    <p>Hover Style 6</p>
                                    <p>Hover Style 7</p>
                                    <p>Hover Style 8</p>
                                </div>

                                <div className='mega-images'>
                                    <div className='menu-img'>
                                        <div className='menu-overlay'>
                                            <img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=360" alt="" />
                                        </div>
                                        <h4>Athletic Footwear</h4>
                                        <p>8 products</p>
                                    </div>

                                    <div className='menu-img'>
                                        <div className='menu-overlay'>
                                            <img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=360" alt="" />
                                        </div>
                                        <h4>Boots for Every Occasion</h4>
                                        <p>8 products</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                    <li className='nav-items'
                        onMouseEnter={() => setShowProduct(true)}
                        onMouseLeave={() => setShowProduct(false)}>

                        <a href="#">Product <i class="fa-solid fa-angle-down"></i></a>
                        {showProduct && (
                            <div className='mega-menu-product'>
                                <div className='mega-column-product'>
                                    <h3>Product Layouts</h3>
                                    <p>1. Thumbnails - bottom</p>
                                    <p>2. Thumbnails - left</p>
                                    <p>3. Thumbnails - right</p>
                                    <p>4. Without Thumbnails</p>
                                    <p>5. List - stacked</p>
                                    <p>6. List - grid</p>
                                    <p>7. Collage - style 1</p>
                                    <p>8. Collage - style 2</p>
                                </div>

                                <div className='mega-column-product'>
                                    <h3>Product Type</h3>
                                    <p>Simple Product</p>
                                    <p>Variable Product</p>
                                    <p>With Video</p>
                                    <p>Sold Out - Coming</p>
                                </div>

                                <div className='mega-column-product'>
                                    <h3>List Featured 1</h3>
                                    <p>Sticky ATC</p>
                                    <p>Frequently Bought Together</p>
                                    <p>Count Down</p>
                                    <p>Cross Selling</p>
                                    <p>Upsell Popup</p>
                                    <p>Low Stock Alert</p>
                                    <p>Pickup Store</p>
                                </div>

                                <div className='mega-column-product'>
                                    <h3>List Featured 2</h3>
                                    <p>Dropdown Variant</p>
                                    <p>Swatch Variant Color</p>
                                    <p>Swatch Variant Image</p>
                                    <p>Variant Image Square</p>
                                    <p>Size Guide</p>
                                    <p>Description Accordion</p>
                                    <p>Description Tab Center</p>
                                </div>

                                <div className='mega-images-product'>
                                    <div className='menu-img-product'>
                                        <div className='menu-overlay'>
                                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=540" alt="" />
                                        </div>
                                        <p>$25.00</p>
                                        <h4>Waterproof Hiking Boots</h4>
                                        <p>TrailGear</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                    <li className='nav-items'
                        onMouseEnter={() => setShowBlog(true)}
                        onMouseLeave={() => setShowBlog(false)}>

                        <a href="#">Blog <i class="fa-solid fa-angle-down"></i></a>
                        {showBlog && (
                            <div className='mega-menu-blog'>
                                <div className='mega-column-blog'>
                                    <h3>List layout</h3>
                                    <p>List Left Sidebar</p>
                                    <p>List Right Sidebar</p>
                                    <p>List Item Basic</p>
                                    <p>List Item Overlay</p>
                                    <p>List item Box</p>
                                    <p>List item Classic</p>
                                    <p>List item Classic Box</p>
                                </div>

                                <div className='mega-column-blog'>
                                    <h3>Grid layout</h3>
                                    <p>Grid Left Sidebar</p>
                                    <p>Grid Right Sidebar</p>
                                    <p>Grid Item Basic</p>
                                    <p>Grid Item Overlay</p>
                                    <p>Grid item Box</p>
                                    <p>Grid item Classic</p>
                                </div>

                                <div className='mega-column-blog'>
                                    <h3>Article</h3>
                                    <p>Title in image</p>
                                    <p>Title after image</p>
                                    <p>Title before image</p>
                                    <p>Left Sidebar</p>
                                    <p>Right Sidebar</p>
                                    <p>Title Center</p>
                                    <p>Article Video</p>
                                </div>

                                <div className='mega-images-blog'>
                                    <div className='menu-img-blog'>
                                        <img src="https://qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=540" alt="" />
                                        <h3>Enjoy a 50% Price Slash</h3>
                                        <p>Revamp Your Wardrobe at Jaw-Dropping Prices.</p>
                                        <p><a href="#">SHOP NOW</a></p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                    <li className='nav-items'
                        onMouseEnter={() => setShowPage(true)}
                        onMouseLeave={() => setShowPage(false)}>

                        <a href="#">Pages <i class="fa-solid fa-angle-down"></i></a>
                        {showPage && (
                            <div className='mega-menu-page'>
                                <div className='mega-column-page'>
                                    <p>About Us 1</p>
                                    <p>About Us 2</p>
                                    <p>About Us 3</p>
                                    <p>Contact</p>
                                    <p>Faqs</p>
                                    <p>Lookbook</p>
                                    <p>sizeguide</p>
                                    <p>Wishlist</p>
                                </div>
                            </div>
                        )}
                    </li>
                    <li className='buy'>Buy Now</li>
                </ul>

                <div className='icons'>
                    {/* 🔥 CLICK HANDLER ADDED */}
                    <FaSearch onClick={() => {
                        // console.log("Clicked");
                        setSearchOpen(true)
                    }} />

                    <FaUser />

                    {/* <div className='cart'>
                        <FaHeart />
                        <span className='badge'>
                        0</span>
                    </div> */}

                    <Link to="/wishlist" className='cart'>
                    <span className='badge'>{wishlistItems.length}</span>
                        <FaHeart style={{ color: "black"}}/>
                    </Link>

                    <div className='bag' onClick={() => setCartOpen(true)}>
                        <FaShoppingBag onClick={() => {
                            // console.log("cart clicked!");
                            setCartOpen(true)
                        }} />
                        <span className='bag-badge'>
                            {
                                cartItems.reduce(
                                    (total, item) => total + item.quantity,
                                    0
                                )
                            }
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar   