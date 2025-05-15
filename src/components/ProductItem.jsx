import React from 'react'
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from 'react-router-dom'

const ProductItem = ({id, image, name, price}) => {
  const { currency, loading } = useContext(ShopContext)
  
  // Add fallback for when image array is undefined or empty
  const productImage = image && image.length > 0 ? image[0] : '/placeholder-image.jpg';
  
  if (loading) {
    return (
      <div className="overflow-hidden animate-pulse">
        <div className="bg-gray-200 h-60 w-full"></div>
        <div className="pt-3 pb-1 bg-gray-200 h-4 w-2/3 mt-2"></div>
        <div className="bg-gray-200 h-4 w-1/3 mt-2"></div>
      </div>
    )
  }
  
  return (
    <Link className='cursor-pointer text-gray-700' to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img 
          className='hover:scale-110 transition ease-in-out object-cover h-60 w-full' 
          src={productImage} 
          alt={name} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/placeholder-image.jpg';
          }}
        />
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem