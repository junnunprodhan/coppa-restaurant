import React, { useContext, useEffect, useState } from "react";
import useProduct from "../../../Hooks/useProduct/useProduct";
import ShopCart from "../../../component/ShopCart/ShopCart";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
const HomeShop = () => {
  const [recipes, setRecipe] = useState([]);
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    useProduct().then((data) => {
      setRecipe(data.slice(0, 6));
    });
  }, [user, loading, recipes, setRecipe, useProduct]);

  return (
    <div className=" mt-20 text-black pt-10">
      <div className=" text-center md:w-[600px] mx-auto px-3">
        <p className=" text-4xl font-serif">Our Shop</p>
        <p>
          Welcome to Gourmet Delights mazza, where culinary artistry meets a
          cozy dining experience. Our restaurant is a celebration of flavors,
          combining the best of international cuisines to create a unique and
          unforgettable dining adventure
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:mx-10 mx-3 gap-10 mt-16">
        {recipes.map((recipe, index) => (
          <ShopCart recipe={recipe} key={index} />
        ))}
      </div>
      <div className=" flex justify-end mt-8 md:pr-10 pr-3">
        <Link to={"/shop"}>
          {" "}
          <button className=" px-8 py-2 rounded-sm  bg-green-400 hover:bg-green-500 uppercase font-bold shadow-2xl">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeShop;
