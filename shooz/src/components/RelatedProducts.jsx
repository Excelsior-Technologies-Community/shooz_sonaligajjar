import React, { useState } from 'react'
import '/src/styles/RelatedProducts.css'

function RelatedProducts() {

  const [ openDescription ,setOpenDescription ] = useState(false);
  const [ openMaterial ,setOpenMaterial ] = useState(false);
  const [ openReviews ,setOpenReviews ] = useState(false);

  return (
    <div className='related-products'>
        <div className='related-left'>
          <p onClick={() => setOpenDescription(true)}>Description
            {openDescription && (
              <div className='description'>
                <p>Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada.</p>
              </div>
            )}
          </p>
          <p>Material</p>
          <p>Reviews</p>
        </div>
    </div>
  )
}

export default RelatedProducts
