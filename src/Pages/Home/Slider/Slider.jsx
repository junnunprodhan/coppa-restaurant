import "react-responsive-carousel/lib/styles/carousel.min.css";

import "swiper/css";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../../../public/chiken & masroum.jpg";
import img2 from "../../../../public/Chocolate-chips-cream.jpeg";
import img3 from "../../../../public/mimi.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useIsAdmin from "../../../Hooks/useIsAdmin/useIsAdmin";

const Slider = () => {
  const { user } = useContext(AuthContext);
  const [Admin] = useIsAdmin();
  const isAdmin = Admin.Admin;
  return (
    <Swiper className="mySwiper">
      <div>
        <SwiperSlide className="">
          <img
            className="w-full md:h-[600px] h-60"
            src="https://i.ibb.co/JzcKPw4/chocolate.jpg"
            alt=""
          />
          <div className="absolute w-full h-full">
            <div className="bg-gradient-to-r from-slate-900 to-slate-300 opacity-60 w-full h-full"></div>
          </div>
          <div className="absolute text-white text-start md:left-auto md:top-auto space-y-2 w-full h-full flex items-center">
            <div className="md:space-y-4 md:pl-44 pl-5">
              <p className="text-xl text-shadow">100% natural</p>
              <p className="md:text-5xl text-2xl font-bold w-80 text-shadow">
                Choclate Chips Creame
              </p>
              <p className="text-sm md:text-xl md:w-[700px] md:pb-7 pb-3 text-shadow">
                Chocolate chip cream: A luscious blend of creamy goodness and
                chocolate chip crunch in every bite
              </p>
              <Link to={"/book"}>
                <button
                  className="font-bold px-7 py-2 rounded-full bg-green-400 hover:bg-green-500"
                  disabled={!user || isAdmin}
                >
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full md:h-[600px] h-60" src={img1} alt="" />
          <div className="absolute w-full h-full">
            <div className="bg-gradient-to-r from-slate-900 to-slate-300 opacity-60 w-full h-full"></div>
          </div>
          <div className="absolute text-white text-start md:space-y-4 space-y-2 w-full h-full flex items-center md:pl-44 pl-5">
            <div>
              <p className="text-xl text-shadow">100% natural</p>
              <p className="md:text-5xl text-2xl font-bold w-80 text-shadow">
                Chicken and Mushroom
              </p>
              <p className="text-sm md:text-xl md:w-[700px] md:pb-7 pb-3 text-shadow">
                Tender chicken in savory mushroom sauce delivers rich flavors in
                every bite.
              </p>
              <Link to={"/book"}>
                <button
                  className="font-bold bg-blue-500 px-7 py-2 rounded-full hover:bg-blue-700"
                  disabled={!user || isAdmin}
                >
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full md:h-[600px] h-60" src={img3} alt="" />
          <div className="absolute w-full h-full">
            <div className="bg-gradient-to-r from-slate-900 to-slate-300 opacity-60 w-full h-full"></div>
          </div>
          <div className="absolute text-white text-start md:space-y-4 w-full h-full flex items-center md:pl-44 pl-5">
            <div>
              <p className="text-xl text-shadow">100% natural</p>
              <p className="md:text-5xl text-2xl font-bold w-80 text-shadow">
                Fruit and Food
              </p>
              <p className="text-sm md:text-xl md:w-[700px] md:pb-7 pb-3 text-shadow">
                Mimichicken: A plant-based marvel that replicates the taste and
                texture of chicken for a sustainable and flavorful dining
                experience.
              </p>
              <Link to={"/book"}>
                <button
                  className="font-bold bg-blue-500 px-7 py-2 rounded-full hover-bg-blue-700"
                  disabled={!user || isAdmin}
                >
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default Slider;
