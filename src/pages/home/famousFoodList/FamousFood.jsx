import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./famous.css";
import { Pagination } from "swiper";
import Title from "../../../components/Title";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import bg from "../../../assets/home/banner.jpg";

const FamousFood = () => {
  return (
    <div className="w-[90%] mb-2 mx-auto">
      <div className="mb-16">
        <Title
          heading="Our Famous Food"
          subHeading="---From 11:00am to 10:00pm---"
        ></Title>
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="" src={img1} alt="" />
            <h1 className="text-3xl font-bold text-center text-white -mt-16">
              Salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={img2} alt="" />
            <h1 className="text-3xl font-bold text-center text-white -mt-16">
              Pizzas
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={img3} alt="" />
            <h1 className="text-3xl font-bold text-center text-white -mt-16">
              Soups
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={img4} alt="" />
            <h1 className="text-3xl font-bold text-center text-white -mt-16">
              Cake
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={img1} alt="" />
            <h1 className="text-3xl font-bold text-center text-white -mt-16">
              Salad
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg flex text-black items-center justify-center flex-col mt-16 h-[450px]">
        <h1 className="text-3xl font-semibold mb-4">Bistro Boss</h1>
        <p className="text-center w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default FamousFood;