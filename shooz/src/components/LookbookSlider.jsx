import React, { useState } from 'react'
import '/src/styles/LookbookSlider.css'

const LookbookSlider = () => {

    const products = [
        { title: "Example Product Title", price: "$19.99", image: "/public/images/product.jpg" },
        { title: "Example Product Title", price: "$19.99", image: "/public/images/product.jpg" },
        { title: "Example Product Title", price: "$19.99", image: "/public/images/product.jpg" },
        { title: "Example Product Title", price: "$19.99", image: "/public/images/product.jpg" },
        { title: "Example Product Title", price: "$19.99", image: "/public/images/product.jpg" },
        { title: "Example Product Title", price: "$19.99", image: "/public/images/product.jpg" },
        { title: "Example Product Title", price: "$19.99", image: "/public/images/product.jpg" },
        { title: "Example Product Title", price: "$19.99", image: "/public/images/product.jpg" },
    ];

    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if (index < products.length - 4) {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };
    return (
        <div className="lookbook">

       <p className="subtitle">BEST WOMEN</p>
       <h2>Lookbook Style</h2>

       <div className="slider-container">

         {/* LEFT BUTTON */}
         <button className="btnPrev" onClick={prevSlide}>‹</button>

         <div className="slider">
           {products.slice(index, index + 8).map((item, i) => (
            <div className="card" key={i}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <p>{item.price}</p>
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button className="btnNext" onClick={nextSlide}>›</button>

      </div>
    </div>
    )
}

export default LookbookSlider



// import React, { useState } from 'react'
// import '/src/styles/LookbookSlider.css'

// const LookbookSlider = () => {

//   const products = [
//     { title: "Product 1", price: "$19.99", image: "https://via.placeholder.com/300" },
//     { title: "Product 2", price: "$19.99", image: "https://via.placeholder.com/300" },
//     { title: "Product 3", price: "$19.99", image: "https://via.placeholder.com/300" },
//     { title: "Product 4", price: "$19.99", image: "https://via.placeholder.com/300" },
//     { title: "Product 5", price: "$19.99", image: "https://via.placeholder.com/300" },
//     { title: "Product 6", price: "$19.99", image: "https://via.placeholder.com/300" },
//   ];

//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     if (index < products.length - 4) {
//       setIndex(index + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (index > 0) {
//       setIndex(index - 1);
//     }
//   };

//   return (
//     <div className="lookbook">

//       <p className="subtitle">BEST WOMEN</p>
//       <h2>Lookbook Style</h2>

//       <div className="slider-container">

//         {/* LEFT BUTTON */}
//         <button className="nav left" onClick={prevSlide}>‹</button>

//         <div className="slider">
//           {products.slice(index, index + 4).map((item, i) => (
//             <div className="card" key={i}>
//               <img src={item.image} alt="" />
//               <h4>{item.title}</h4>
//               <p>{item.price}</p>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT BUTTON */}
//         <button className="nav right" onClick={nextSlide}>›</button>

//       </div>
//     </div>
//   )
// }

// export default LookbookSlider