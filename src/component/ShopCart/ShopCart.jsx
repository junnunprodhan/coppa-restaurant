import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useBooking from "../../Hooks/useBookings/useBooking";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import useIsAdmin from "../../Hooks/useIsAdmin/useIsAdmin";

const ShopCart = ({ recipe }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [isAdmin] = useIsAdmin();
  const Admin = isAdmin?.Admin;
  const HandleToBooking = (id) => {
    setLoading(true);
    const host = {
      name: recipe?.host?.name,
      photo: recipe?.host?.photo,
      email: recipe?.email,
    };
    const Guest = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photo,
    };
    const booked = {
      category: recipe?.category,
      name: recipe?.name,
      photo: recipe?.photo,
      price: recipe?.price,
      recipeId: recipe?._id,
      Guest: Guest,
      Host: host,
    };
    useBooking(booked).then((data) => {
      toast.success("food booking successful");
      setLoading(false);
    });
  };
  return (
    <div className=" bg-slate-100 shadow-2xl space-y-2 px-3 relative h-[380px]">
      <div>
        <img className=" w-[360px] mx-auto h-48" src={recipe?.photo} alt="" />
      </div>
      <div className=" px-3 py-3">
        <p className=" font-bold text-xl">{recipe?.recipeName}</p>
        <p className="">{recipe?.description}</p>
      </div>
      <button
        disabled={Admin | !user}
        onClick={() => HandleToBooking(recipe._id)}
        className={
          Admin
            ? " absolute bottom-3 bg-slate-400 hover:bg-slate-500 text-white px-6 py-2 font-bold uppercase rounded-[3px]"
            : " absolute bottom-3 bg-green-400 hover:bg-green-500 px-6 py-2 font-bold uppercase rounded-[3px] "
        }
      >
        {loading ? (
          <p className=" animate-spin px-8 py-1">
            <FaSpinner />
          </p>
        ) : (
          "order now"
        )}
      </button>
      <p className=" font-bold absolute top-2 right-4 bg-green-400 px-3 py-1 rounded-md">
        ${recipe?.price}
      </p>
    </div>
  );
};

export default ShopCart;
