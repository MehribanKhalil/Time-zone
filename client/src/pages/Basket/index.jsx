import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { BasketContext } from '../../context/BasketContext'
import BasketCard from './BasketCard'

const Basket = () => {
  const {basket}=useContext(BasketContext)

  const subtotal=basket.reduce((basketTotal,basketItem)=>basketTotal+(basketItem.price* basketItem.count),0)


  return (
   <div className=' section page pt-32 pb-16'>
     <Helmet>
    <title>Basket</title>
  </Helmet>


    
  <div>
        <h2 className=" text-center text-4xl font-bold pb-16">
          Basket Products
        </h2>
      </div>

      {
        basket.length===0 ? '' :
        <div className=' text-2xl pb-7'>
        <p>SubTotal : ${subtotal}</p>
      </div>
      }

      {basket.length === 0 ? (
        <p className="  text-3xl flex justify-center ">Your Basket is Empty :/</p>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pb-16">
         { basket && basket.map((item)=>(
          <div key={item._id}>
            <BasketCard {...item} product={item} />
          </div>
          ))}
        </div>
      )}
   
   </div>
  )
}

export default Basket