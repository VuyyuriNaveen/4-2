import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website ia an online platform that faciliatate the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individual showcase their products,intreact with customers, and conduct transactions without the need for a physical presence. E-commerce website have gained immense popularity due to their convenienience, accessibility, and the global reach they offer.</p>
        <p>
        E-commerce websites typically display products or services along with detailed descriptions, images, and any available variation(e.g., sizes, colors). Each products usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
