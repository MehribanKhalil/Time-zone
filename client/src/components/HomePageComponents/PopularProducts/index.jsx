import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../CommonComponents/Loading";
import ProductCard from "../../CommonComponents/ProductCard";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    const res = await axios.get("http://localhost:5000/products");
    setProducts(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className=" section py-24  ">
      <div className="pb-16 section-heading text-center space-y-3">
        <h2 className=" text-5xl font-bold ">Popular Items</h2>
        <p className=" text-gray-500 text-lg max-w-[700px] mx-auto">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida.
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pb-16">
      {isLoading ? (
        <Loading />
      ) : (
        products &&
        products.map((product) => (
          <div key={product._id} >
            <ProductCard {...product} product={product} />
          </div>
        ))
      )}
      </div>

    

      <div className=" flex justify-center">
        <button className=" btn">View more products</button>
      </div>
    </section>
  );
};

export default PopularProducts;
