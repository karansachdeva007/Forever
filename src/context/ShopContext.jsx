// ShopContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext(); // ✅ Named export

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:4000"; // Added fallback URL

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [loading, setLoading] = useState(false); // Added loading state
  const [token,setToken] = useState('')
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    } else {
      cartData[itemId] = { [size]: 1 };
    }
    setCartItems(cartData);
    if (token) {
      try {

          await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })

      } catch (error) {
          console.log(error);
          toast.error(error.message)
      }
  }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {

    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);

    if (token) {

        try {

            await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }
}
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0 && itemInfo) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);

      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message || "Failed to fetch products");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const getUserCart = async (token) => {
    try {
        
        const response = await axios.post(backendUrl + '/api/cart/get', {}, {headers:{token}})
        if (response.data.success) {
            setCartItems(response.data.cartData)
        }

    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
}
  useEffect(() => {
    getProductsData();
  }, []);
  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'))
        getUserCart(localStorage.getItem('token'))

    }
}, [])

  const value = {
    products,
    loading,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    refreshProducts: getProductsData, // Added method to manually refresh products
    setToken,token
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export { ShopContextProvider }; // ✅ Named export
