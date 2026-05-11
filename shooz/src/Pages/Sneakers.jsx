import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext';
import '/src/styles/Sneakers.css'
import { WishlistProvider } from '../context/WishlistContext';
import WishlistButton from '../components/WishlistButton';

function Sneakers() {

  const { type } = useParams();

  const products = [
    {
      id: 1,
      type: "classic-white-tennis sneakers",
      title: "Classic White Tennis Sneakers",
      price: "$25.00",
      image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=540",
      brand: "SportyFeet"
    },

    {
      id: 2,
      type: "waterproof-hiking-boots",
      title: "Waterproof Hiking Boots",
      price: "$25.00",
      image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=540",
      brand: "TrailGear"
    },

    {
      id: 3,
      type: "classic-leather-sneakers",
      title: "Classic Leather Sneakers",
      price: "$21.00",
      image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=540",
      brand: "UrbanStep"
    },

    {
      id: 4,
      type: "high-top-canvas-sneakers",
      title: "High-Top Canvas Sneakers",
      price: "$25.00",
      image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=540",
      brand: "TrendyFeet"
    }
  ];


  const images = [
    "https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=180",
    "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=180",
    "https://qx-shooz.myshopify.com/cdn/shop/files/product-21_924e7c6c-773b-442c-a8ea-c265053b46c9.jpg?v=1731311295&width=180",
    "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_b752bbb9-8819-41da-83f8-959818bca2e2.jpg?v=1731311295&width=180",
    "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_4457e900-df5e-45b2-af80-a1206c484d8d.jpg?v=1731311295&width=180",
    "https://qx-shooz.myshopify.com/cdn/shop/files/product-28_c224d8ea-bb11-4bc0-8c6e-e235a98dc2d9.jpg?v=1731311295&width=180"
  ];


  const product = products.find(item => item.type === type);

  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.image);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  // accordion section 
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  // related products
  const [activeTab, setActiveTab] = useState("description");

  const relatedProducts = [
    {
      image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg?v=1731310932&width=360",
      price: "$25.00",
      cart: "+ Add to Cart"
    },

    {
      image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-2_f21b4635-7aa2-414f-b44c-6ce8171394ed.jpg?v=1731310979&width=360",
      price: "$25.00",
      cart: "+ Add to Cart"
    }
  ];


  // faqs 
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Is the Shipping free?",
      answer: "Yes. Worldwide shipping is already included in the price. We use DHL express with 3 days delivery time."
    },

    {
      question: "When will I receive my item?",
      answer: "When we have received your order, you will automatically receive an e-mail confirming your order. Orders made before 2 PM (CET) will be picked, packed and shipped the same day. Delivery time is usually 2-4 working days with DHL Express."
    },

    {
      question: "Can I change or return my item?",
      answer: "If you want to change a product into another model, strap color etc., please contact us so we are able to reserve the new item in our stock immediately. You are always entitled to an exchange or refund within 30 days after you have received your package, as long as the item has not been used."
    }
  ];

  const toggleFaqs = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
  };


  // cart
  const { addToCart } = useCart();
  return (
    <div>

      {/* size guide  */}
      {showSizeGuide && (
        <div className='modal-overlay'>
          <div className='modal-box'>
            <button className='close-btn' onClick={() => setShowSizeGuide(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>

            <h2>Size Guide</h2>
            <p className='guide-text'>
              If you need assistance when choosing your size, don't hesitate to - contact us. All sizes shown in the Size Charts are approximate. Please shop carefully and refer to our Size Chart to ensure the best fit.</p>

            <table className='size-table'>
              <thead>
                <tr>
                  <th>Our Size</th>
                  <th>Size</th>
                  <th>Bust</th>
                  <th>Waist</th>
                  <th>Hip</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>XS</td>
                  <td>6</td>
                  <td>79-81</td>
                  <td>63-66</td>
                  <td>91-94</td>
                </tr>

                <tr>
                  <td>S</td>
                  <td>8</td>
                  <td>86-89</td>
                  <td>67-70</td>
                  <td>95-98</td>
                </tr>

                <tr>
                  <td>M</td>
                  <td>10</td>
                  <td>89-92</td>
                  <td>71-74</td>
                  <td>99-102</td>
                </tr>

                <tr>
                  <td>L</td>
                  <td>12</td>
                  <td>92-95</td>
                  <td>74-77</td>
                  <td>102-105</td>
                </tr>

                <tr>
                  <td>XL</td>
                  <td>14</td>
                  <td>104-107</td>
                  <td>86-89</td>
                  <td>111-114</td>
                </tr>
              </tbody>
            </table>

            <p className='terms'>* All measurements are in centimeters (cm).</p>
          </div>
        </div>
      )}
      <Navbar />
      <p className='breadcrumb'>
        <Link to="/">Home</Link> / {product?.title}
      </p>

      <div className='product-container'>

        {/* left side */}
        <div className='image-section'>
          <img src={mainImage} alt="mainImage" className='main-image' />

          <div className='thumbnail-container'>
            {images.map((img, index) => (
              <img src={img}
                key={index}
                alt="thumb"
                onClick={() => setMainImage(img)}
                className='thumbnail'
              />
            ))}
          </div>
        </div>

        {/* right side */}
        <div className='details-section'>
          <h2>{product?.title}</h2>
          <p className='price'>{product?.price}</p>
          <hr></hr>

          {/* size */}
          <div className='size-section'>
            <p className='size'>Size: {selectedSize}</p>

            <div className='size-box'>
              {["S", "M", "L"].map((size) => (

                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? "active" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >{size}</button>
              ))}
            </div>
          </div>

          {/* size guide */}
          <div className='size-guide' onClick={() => setShowSizeGuide(true)}><i class="fa-solid fa-ruler-horizontal"></i> Size Guide</div>

          <div className='purchases'>
            {/* quantity */}
            <div className='quantity'>
              <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}><i class="fa-solid fa-minus"></i></button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(prev => prev + 1)}><i class="fa-solid fa-plus"></i></button>
            </div>

            {/* buttons */}
            <div className='buttons'>
              <button className='cart-btn'
              onClick={() => {
                if(product) {
                  addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    size: selectedSize
                  })
                }
              }}
              >ADD TO CART</button>
              <button className='buy-btn'>BUY IT NOW</button>
            </div>
          </div>

          <WishlistButton product={product} />

          <hr />
          {/* product details */}
          <div className='product-details'>
            <p><span>Vendor:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{product?.brand}</p>
            <p><span>Type:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sneakers</p>
            <p><span>Sku:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;null</p>
            <p><span>Available:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available</p>
          </div>

          {/* shipping information */}

          <div className='accordion-item'>
            <div className='accordion-header' onClick={() => toggleSection("shipping")}>
              <span><i className="fa-solid fa-truck"></i> &nbsp;Shipping Information</span>&nbsp;&nbsp;
              <span>
                <i className={openSection === "shipping" ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              </span>
            </div>
            <hr />
            {openSection == "shipping" && (
              <div className='accordion-content'>
                <p>- No EU import duties.</p>
                <p>- Ships within 1-2 business days.</p>
                <p>- Ships in our fully recyclable and biodegradable signature boxes.</p>
              </div>
            )}
          </div>

          {/* care guide */}
          <div className='accordion-item'>
            <div className='accordion-header' onClick={() => toggleSection("care")}>
              <span><i className="fa-solid fa-leaf"></i> &nbsp;Care Guide&nbsp;&nbsp;</span>
              <span>
                <i className={openSection === "care" ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i>
              </span>
              <hr />
              {openSection == "care" && (
                <div className='accordion-content'>
                  <p>Regular <i>care.</i>  Use a slightly damp, soft and lint-free cloth for regular dust removal. Always clean in the direction of the grain.</p>
                </div>
              )}
            </div>
          </div>


          {/* warranty */}
          <div className='warranty-section'>
            <p><i className="fa-solid fa-leaf"></i> 55% Linen, 45% Rayon</p>
            <p><i className="fa-solid fa-lock"></i> Secure Payment</p>
            <p><i className="fa-solid fa-circle-check"></i> 2 years Warranty</p>
          </div>

        </div>
      </div>


      {/* RelatedProducts  */}

      <div className='related-products'>
        {/* left side */}
        <div className='related-left'>

          {/* tabs */}
          <div className='tabs'>
            <span className={activeTab === "description" ? "active" : ""}
              onClick={() => setActiveTab("description")}
            >Description</span>

            <span className={activeTab === "material" ? "active" : ""}
              onClick={() => setActiveTab("material")}
            >Material</span>

            <span className={activeTab === "reviews" ? "active" : ""}
              onClick={() => setActiveTab("reviews")}
            >Reviews</span>
          </div>

          {/* content */}
          <div className='tab-content'>
            {activeTab === "description" && (
              <>
                <p>Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada.</p>
                {/* <br></br> */}
                <p>Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere.</p>
              </>
            )}

            {activeTab === "material" && (
              <>
                <p>Material</p>
              </>
            )}

            {activeTab === "reviews" && (
              <>
                <p>No reviews yet.</p>
              </>
            )}
          </div>
        </div>

        <div className='related-right'>
          <h2>Related Products</h2>

          <div className='products'>
            <div className='card'>
              <div className='overlay-card'>
                <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg?v=1731310932&width=360" alt="" />
              </div>
              <h4>Breathable Mesh Slip-Ons</h4>
              <p>$25.00</p>
              <span onClick={() => addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                // quantity: quantity,
                size: selectedSize
              })}>+ Add to Cart</span>
            </div>

            <div className='card'>
              <div className='overlay-card'>
                <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-2_f21b4635-7aa2-414f-b44c-6ce8171394ed.jpg?v=1731310979&width=360" alt="" />
              </div>
              <h4>Chunky Platform Sandals</h4>
              <div className='related-price'>
                <p className='new'>$25.00</p>
                <p className='old'>$32.00</p>
              </div>
              <span>+ Add to Cart</span>
            </div>
          </div>
        </div>
      </div>



      {/* effortless fashion */}
      <div className='effortless-fashion'>

        <div className='effortless-overlay'>
          <img src="https://qx-shooz.myshopify.com/cdn/shop/files/filler2.png?v=1731652695" alt="" />

          <div className='effortless-content'>
            <p>EFFORTLESS FASHION, EVERYDAY</p>
            <h2>Chic Styles For The Modern Women</h2>
            <h4>Embrace effortless elegance with our curated collection of chic styles designed for the modern woman. From desk to dinner, our fashion pieces effortlessly transition with you. Unlock exclusive offers and redefine your daily style with ease.</h4>
          </div>
        </div>
      </div>

      {/* timeless container */}

      <div className='timeless-container'>
        <div className='timeless-left'>
          <div className='img-1'>
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/filler3.png?v=1731652694&width=900" alt="" />
          </div>
          <div className='img-2'>
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/filler4.png?v=1731652693&width=360" alt="" />
          </div>

          <div className='timeless-right'>
            <p>CLASSIC MEETS CONTEMPORARY</p>
            <h1>Timeless Styles With A Modern Edge</h1>
            <h5>Experience the best of both worlds with our collection that seamlessly blends timeless classics with modern twists. Elevate your wardrobe with pieces that stand the test of time while embracing the latest fashion innovations. Shop now for exclusive discounts.</h5>

            <button>DISCOVER NOW</button>
          </div>
        </div>

        <div className='timeless-right'>
        </div>
      </div>

      {/* features */}
      <div className='features-container'>
        <div className='features'>
          <i class="fa-solid fa-truck"></i>
          <h2>Free Shipping</h2>
          <p>From all orders over $100</p>
        </div>

        <div className='features'>
          <i class="fa-solid fa-hand-holding"></i>
          <h2>Quality Support</h2>
          <p>24/7 online feedback</p>
        </div>

        <div className='features'>
          <i class="fa-solid fa-left-long"></i>
          <h2>Return & Refund</h2>
          <p>Return money within 30 days</p>
        </div>

        <div className='features'>
          <i class="fa-solid fa-gift"></i>
          <h2>Gift Voucher</h2>
          <p>20% off when you shop online</p>
        </div>
      </div>

      {/* FAQS */}
      <div className='faq-container'>
        <h1>FAQs</h1>
        <p style={{ textAlign: "center"}}>Have a question? We are here to help.</p>

        <div className='faq-list'>
          {faqs.map((faq, index) => (
            <div key={index} className='faq-item'>
              {/* question row */}
              <div className='faq-question' onClick={() => toggleFaqs(index)}>
                <h3>{faq.question}</h3>
                <span className={activeIndex === index ? "fa-solid fa-minus" : "fa-solid fa-plus"}></span>
              </div>

              {/* answers */}
                {activeIndex === index && (
                  <p className='faq-answer'>{faq.answer}</p>
                )}

                <hr style={{ width: "140vh", marginLeft: "280px"}}/>
            </div>
          ))}
        </div>
      </div>

      {/* sales events */}
      <div className='sales-container'>
        <div className='sales-content'>
          <h2>Sales Event</h2>
          <button className='end-deal'>End Deal</button>
          <button className='shop'>SHOP COLLECTION</button>
        </div>
        <p>We've refreshed our sale with discounts of up to 50% on select styles.</p>
      </div>

      {/* you may also like */}
      <div className='newely-added'>
        <h1>You may also like</h1>
        <div className='newely-added-cards'>
          <div className='newely-added-card'>
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-23_fdf5f73d-c3b8-465f-b59d-a8e6afc8e7b9.jpg?v=1731311481&width=540" alt="" />
            <div className='newely-content'>
              <p>$15.00</p>
              <h3>Elegant Block Heel Pumps</h3>
              <h5>LuxeFeet</h5>
            </div>
          </div>


          <div className='newely-added-card'>
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540" alt="" />
            <div className='newely-content'>
              <div className='price'>
                <p className='new'>$25.00</p>
                <p className='old'>$32.00</p>
              </div>

              <h3>Chunky Platform Sandals</h3>
              <h5>BoldWalks</h5>
            </div>
          </div>


          <div className='newely-added-card'>
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=540" alt="" />
            <div className='newely-content'>
              <p>$25.00</p>
              <h3>High-Top Canvas Sneakers</h3>
              <h5>TrendyFeet</h5>
            </div>
          </div>


          <div className='newely-added-card'>
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=540" alt="" />
            <div className='newely-content'>
              <p>$25.00</p>
              <h3>Breathable Mesh Slip-Ons</h3>
              <h5>AirWalk</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Recently viewed */}
      <div className='recent-container'>
        <h1>Recently Viewed</h1>
        <div className='recent-cards'>
          <div className='recent-card'>
            <img src="https://cdn.shopify.com/s/files/1/0714/6517/3218/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538" alt="" />
            <h3>High-Top Canvas Sneakers</h3>
            <p>$25.00</p>
          </div>

          <div className='recent-card'>
            <img src="https://cdn.shopify.com/s/files/1/0714/6517/3218/files/product-17.jpg?v=1731315215" alt="" />
            <h3>Waterproof Hiking Boots</h3>
            <p>$25.00</p>
          </div>

          <div className='recent-card'>
            <img src="https://cdn.shopify.com/s/files/1/0714/6517/3218/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278" alt="" />
            <h3>Classic White Tennis Sneakers</h3>
            <p>$25.00</p>
          </div>


          <div className='recent-card'>
            <img src="https://cdn.shopify.com/s/files/1/0714/6517/3218/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211" alt="" />
            <h3>Classic Leather Sneakers</h3>
            <p>$25.00</p>
          </div>


          <div className='recent-card'>
            <img src="https://cdn.shopify.com/s/files/1/0714/6517/3218/files/product-2_f21b4635-7aa2-414f-b44c-6ce8171394ed.jpg?v=1731310979" alt="" />
            <h3>Chunky Platform Sandals</h3>
            <p>$25.00</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Sneakers


