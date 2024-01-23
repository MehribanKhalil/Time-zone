import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import {useParams} from 'react-router-dom'
import Loading from '../../components/CommonComponents/Loading';

import axios from 'axios'
import { BasketContext } from '../../context/BasketContext';
import { WishlistContext } from '../../context/WishlistContext';

const Detail = () => {

  const {wishlist,handleWishlist}=useContext(WishlistContext)
  const {addBasket}=useContext(BasketContext)

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {id}= useParams()

  const getData = async () => {
    const res =await axios.get(`http://localhost:5000/products/${id}`);
    setProducts(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
   getData()
  }, [])
  

  return (
  <div className=' page section pt-32 pb-16'>
      <Helmet>
    <title>Detail</title>
  </Helmet>

    <div className=' flex justify-center items-center'>
      {
        isLoading ? <Loading/> :
        <div className=' flex items-center bg-gray-200 p-10 rounded-xl gap-5'>
          <div>
            <img src={products.image} alt="" />
          </div>
          <div>
          <div className=' space-y-6'>
            <h2 className=' cursor-pointer text-xl  font-semibold'>{products.title}</h2>
            <p className=' text-lg'>Price :${products.price}</p>
          </div>

          <div className=' flex gap-2'>
          <button onClick={()=>handleWishlist(products)} className=''>
                  {
                    wishlist.some(item=>item._id === products._id) ? <i className="fa-solid fa-heart"></i>  :  <i className="fa-regular fa-heart"></i>
                  }
                
                    
                    </button>
            <button onClick={()=>addBasket(products)} ><i className="fa-solid fa-cart-shopping"></i></button>
          </div>
          </div>
        </div>
      }
    </div>


  </div>
  )
}

export default Detail