import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../context/WishlistContext";
import Loading from "../../components/CommonComponents/Loading";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className=" section page  pt-32 pb-16">
      <Helmet>
        <title>Wishlist</title>
      </Helmet>

      <div>
        <h2 className=" text-center text-4xl font-bold pb-16">
          Wishlist Products
        </h2>
      </div>

      {wishlist.length === 0 ? (
        <p className="  text-3xl flex justify-center ">Your Wishlist is Empty :/</p>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pb-16">
         { wishlist && wishlist.map((item)=>(
          <div key={item._id}>
            <WishlistCard {...item} product={item} />
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
