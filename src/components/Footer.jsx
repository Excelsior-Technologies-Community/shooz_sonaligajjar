import React from 'react'
import '/src/styles/Footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-top'>
            <div className='column'>
                <h3>INFORMATION</h3>
                <p>About Us</p>
                <p>Privacy Policy</p>
                <p>Returns Policy</p>
                <p>Shipping Policy</p>
                <p>Terms & Conditions</p>
            </div>

            <div className='column'>
                <h3>QUICK LINKS</h3>
                <p>My Account</p>
                <p>My Cart</p>
                <p>Size Chart</p>
                <p>Wishlist</p>
                <p>Gift Card</p>
            </div>

            <div className='column center'>
                <img src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=360" alt="logo" />
                <p>T: +(08) 9055 0269</p>
                <p>E: example@example.com</p>
                <p>50 Porana Place, West Casuarinas, <br></br>Western Australia, Australia.</p>
            </div>

            <div className='column'>
                <h3>CATEGORIES</h3>
                <p>Athletic Footwear</p>
                <p>Boots for Every Occasion</p>
                <p>Luxury Leather Shoes</p>
                <p>Sandals & Slides</p>
                <p>Sneakerhead's Haven</p>
            </div>

            <div className='column'>
                <h3>SUPPORT</h3>
                <p>Contact Us</p>
                <p>Newsletter</p>
                <p>Gift Cards</p>
                <p>Sign In</p>
                <p>My Account</p>
            </div>
        </div>
        <hr style={{ marginTop: "-90px", backgroundColor: "grey"}}/>

        <div className='footer-bottom'>
            <p>Copyright &copy; 2024 <span style={{ color: "#cc6e6e"}}>Shooz.</span> All rights reserved</p>

            <div className='footer-icons'>
                <i className="fa-brands fa-cc-amex"></i>
                <i className="fa-brands fa-apple-pay"></i>
                <i className="fa-brands fa-cc-diners-club"></i>
                <i className="fa-brands fa-cc-discover"></i>
                <i className="fa-brands fa-cc-jcb"></i>
                <i className="fa-brands fa-cc-mastercard"></i>
                <i className="fa-brands fa-cc-visa"></i>
            </div>
        </div>
    </footer>
  )
}

export default Footer









// import React from 'react'
// import '/src/styles/Footer.css'

// function Footer() {
//   return (
//     <footer className="footer">

//       <div className="footer-top">

//         <div className="column">
//           <h4>INFORMATION</h4>
//           <p>About Us</p>
//           <p>Privacy Policy</p>
//           <p>Returns Policy</p>
//           <p>Shipping Policy</p>
//           <p>Terms & Conditions</p>
//         </div>

//         <div className="column">
//           <h4>QUICK LINKS</h4>
//           <p>My Account</p>
//           <p>My Cart</p>
//           <p>Size Chart</p>
//           <p>Wishlist</p>
//           <p>Gift Card</p>
//         </div>

//         <div className="column center">
//           <h2>SHOOZ</h2>
//           <p>T: + (08) 9055 0269</p>
//           <p>E: example@example.com</p>
//           <p>50 Porana Place, Western Australia</p>
//         </div>

//         <div className="column">
//           <h4>CATEGORIES</h4>
//           <p>Athletic Footwear</p>
//           <p>Boots for Every Occasion</p>
//           <p>Luxury Leather Shoes</p>
//           <p>Sandals & Slides</p>
//         </div>

//         <div className="column">
//           <h4>SUPPORT</h4>
//           <p>Contact Us</p>
//           <p>Newsletter</p>
//           <p>Gift Cards</p>
//           <p>Sign In</p>
//           <p>My Account</p>
//         </div>

//       </div>

//       <div className="footer-bottom">
//         <p>Copyright © 2024 Shooz. All rights reserved</p>
//       </div>

//     </footer>
//   )
// }

// export default Footer
