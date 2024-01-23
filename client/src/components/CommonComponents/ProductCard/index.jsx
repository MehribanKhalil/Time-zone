import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../../context/WishlistContext";
import { BasketContext } from "../../../context/BasketContext";

const ProductCard = ({ image, title, price, _id, product }) => {
  const { wishlist, handleWishlist } = useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);

  return (
    <div className=" product-card  group text-center">
      <div className="  relative overflow-hidden ">
        <div className=" absolute z-10  top-10  right-10">
          <button
            onClick={() => handleWishlist(product)}
            className=" text-red-600  text-3xl opacity-0  group-hover:opacity-100 duration-300"
          >
            {wishlist.some((item) => item._id === _id) ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
        </div>
        <Link to={`/watch/${_id}`}>
          <img src={image} className=" w-full" alt="" />
        </Link>

        <div className=" text-center py-6 bg-red-600 text-white group-hover:bottom-0  duration-300 absolute left-0  -bottom-16  w-full ">
          <button onClick={() => addBasket(product)}>Add to Cart</button>
        </div>
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
  );
};

export default ProductCard;
