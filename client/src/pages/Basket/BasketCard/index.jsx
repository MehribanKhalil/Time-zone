import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../../../context/BasketContext";
import { WishlistContext } from "../../../context/WishlistContext";

const BasketCard = ({ image, title, price, _id, product ,count}) => {
  const { wishlist, handleWishlist } = useContext(WishlistContext);
  const {decCount,incCount, deleteBasket } = useContext(BasketContext);


  return (
    <div className=" product-card  group text-center">
      <div className="  relative overflow-hidden">
        <Link to={`/watch/${_id}`}>
          <img src={image} className=" w-full" alt="" />
        </Link>
      </div>

      <div className=" flex gap-5 justify-center">
        <button
          onClick={() => deleteBasket(_id)}
          className=" border px-2 py-1  rounded-xl"
        >
          Delete
        </button>
        <button
          onClick={() => handleWishlist(product)}
          className=" text-red-600  text-3xl"
        >
          {wishlist.some((item) => item._id === _id) ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </button>
      </div>
      <div className=" py-5 space-y-3">
        <Link to={`/watch/${_id}`}>
          <h3 className=" cursor-pointer  text-gray-600  font-semibold text-2xl ">
            {title}
          </h3>
        </Link> 

        <div className=" flex justify-center gap-4 items-center"> 
            <button onClick={()=>decCount(product)} className=" border border-gray-600  w-6 h-6 flex justify-center item-center">-</button>
            <span className=" text-xl">{count}</span>
            <button onClick={()=>incCount(product)} className=" border border-gray-600  w-6 h-6 flex justify-center item-center">+</button>
        </div>

        <p className=" text-lg font-medium"> Total: ${price * count}</p>


      </div>
    </div>
  );
};

export default BasketCard;
