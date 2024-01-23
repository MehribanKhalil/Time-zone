import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import FormComponent from "../../components/AdminPageComponents/FormComponent";
import Loading from "../../components/CommonComponents/Loading";
import axios from "axios";
import toast from "react-hot-toast";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [property, setProperty] = useState(null);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/products");
    setProducts(res.data);
    setIsLoading(false);
  };

  const deleteData = async (id) => {
    const res = await axios.delete(`http://localhost:5000/products/${id}`);
    getData();
    toast.success(" Product Deleted !");
  };

  const toLowerCase = (item) => {
    if (typeof item === "string") {
      return item.toLowerCase();
    }
    return item;
  };

  const createProduct = async (data) => {
    const res = await axios.post("http://localhost:5000/products", data);
    toast.success(" Create new Product !");
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" section page pt-32 pb-16">
      <Helmet>
        <title>Admin</title>
      </Helmet>

      <FormComponent createProduct={createProduct} />

      <div className=" pt-16  flex justify-between">
        <div>
          <input
            className="outline-none border rounded-xl border-gray-700 px-4 py-2"
            type="text"
            name=""
            id=""
            placeholder="Search by Name"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className=" space-x-3">
          <button
            onClick={() => setProperty({ name: "title", asc: true })}
            className=" border rounded-xl border-gray-700 px-4 py-2"
          >
            A-Z
          </button>
          <button
            onClick={() => setProperty({ name: "title", asc: false })}
            className=" border rounded-xl border-gray-700 px-4 py-2"
          >
            Z-A
          </button>
          <button
            onClick={() => setProperty({ name: "price", asc: true })}
            className=" border rounded-xl border-gray-700 px-4 py-2"
          >
            Low to High
          </button>
          <button
            onClick={() => setProperty({ name: "price", asc: false })}
            className=" border rounded-xl border-gray-700 px-4 py-2"
          >
            High to Low
          </button>
          <button
            onClick={() => setProperty({ name: "title", asc: null })}
            className=" border rounded-xl border-gray-700 px-4 py-2"
          >
            Def
          </button>
        </div>
      </div>

      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-col pt-16">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center text-sm font-light">
                    <thead className="border-b bg-red-800 font-medium text-white ">
                      <tr>
                        <th scope="col" className=" px-6 py-4">
                          Image
                        </th>
                        <th scope="col" className=" px-6 py-4">
                          Title
                        </th>
                        <th scope="col" className=" px-6 py-4">
                          Price
                        </th>
                        <th scope="col" className=" px-6 py-4"></th>
                      </tr>
                    </thead>
                    <tbody className=" bg-gray-100">
                      {products &&
                        products
                          .filter((item) =>
                            item.title
                              .toLowerCase()
                              .includes(searchText.toLowerCase())
                          )
                          .sort((a, b) => {
                            if (property && property.asc === true) {
                              return toLowerCase(a[property.name]) <
                                toLowerCase(b[property.name])
                                ? -1
                                : toLowerCase(b[property.name]) <
                                  toLowerCase(a[property.name])
                                ? 1
                                : 0;
                            } else if (property && property.asc === false) {
                              return toLowerCase(a[property.name]) >
                                toLowerCase(b[property.name])
                                ? -1
                                : toLowerCase(b[property.name]) >
                                  toLowerCase(a[property.name])
                                ? 1
                                : 0;
                            } else {
                              return 0;
                            }
                          })
                          .map((product) => (
                            <tr
                              key={product._id}
                              className="border-b dark:border-neutral-500  font-semibold"
                            >
                              <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                <div>
                                  <img
                                    src={product.image}
                                    className=" w-[100px]"
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td className="whitespace-nowrap  px-6 py-4">
                                {product.title}
                              </td>
                              <td className="whitespace-nowrap  px-6 py-4">
                                ${product.price}
                              </td>
                              <td className="whitespace-nowrap  px-6 py-4">
                                <button
                                  onClick={() => deleteData(product._id)}
                                  className=" bg-red-600  rounded-2xl text-white px-4 py-2 "
                                >
                                  delete
                                </button>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
