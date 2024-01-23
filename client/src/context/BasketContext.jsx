import { createContext } from "react";
import UseLocal from "../hooks/UseLocal";
import toast from "react-hot-toast";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = UseLocal("basket");

  const addBasket = (product) => {
    const index = basket.findIndex((item) => item._id === product._id);
    if (index === -1) {
      setBasket([...basket, { ...product, count: 1 }]);
      toast.success("Added to Basket!");

      return;
    } else {
      basket[index].count++;
      setBasket([...basket]);
      toast.success("Count Increased !");
    }
  };

  const incCount = (product) => {
    const index = basket.findIndex((item) => item._id === product._id);
    if (index !== -1) {
      basket[index].count++;
      setBasket([...basket]);
      toast.success("Count Increased !");
      return;
    }
  };

  const decCount = (product) => {
    const index = basket.findIndex((item) => item._id === product._id);
    if (index !== -1) {
      if (basket[index].count === 1) {
        deleteBasket(product._id);
        return;
      }
      basket[index].count--;
      setBasket([...basket]);
      toast.success("Count Decreased !");
    }
  };

  const deleteBasket = (id) => {
    setBasket(basket.filter((item) => item._id !== id));
    toast.success("Delete from Basket !");
  };

  return (
    <BasketContext.Provider
      value={{ basket, addBasket, deleteBasket, decCount, incCount }}
    >
      {children}
    </BasketContext.Provider>
  );
};
