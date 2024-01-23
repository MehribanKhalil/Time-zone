import React, { useContext } from 'react'
import { WishlistContext } from '../../../context/WishlistContext'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../../context/BasketContext'

const WishlistCard = ({image,title,price,_id,product}) => {
  const {wishlist,handleWishlist}=useContext(WishlistContext)
  const {addBasket}=useContext(BasketContext)

  return (
    <div className=" product-card  group text-center">
    <div className='  relative overflow-hidden'>

     
     <Link to={`/watch/${_id}`}>
     <img
        src={image}
        className=" w-full"
        alt=""
      />
     </Link>
    </div>

    <div className=' flex gap-5 justify-center'>
        <button onClick={()=>handleWishlist(product)} className=' border px-2 py-1  rounded-xl' >Delete</button>
        <button onClick={()=>addBasket(product)}> <i className="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div className=" py-5 space-y-3">
     <Link to={`/watch/${_id}`}>

     <h3 className=" cursor-pointer  text-gray-600  font-semibold text-2xl ">
        {title}
      </h3>
     </Link>

      <p className=" text-lg font-medium">${price}</p>
    </div>
  </div>
  )
}

export default WishlistCard