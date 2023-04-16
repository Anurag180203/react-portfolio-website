import React from 'react';
import "./testimonials.css";
import AVTR from "../../assets/1.png";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR,
    name: "Supereme leader",
    review: "lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus omnis qui et, est laudantium nobis vitae libero pariatur delectus, quasi explicabo voluptates iure, aliquid quo repellat eum totam! Quas?"
  },
  {
    avatar: AVTR,
    name: "Warlord of the galaxy",
    review: "lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus omnis qui et, est laudantium nobis vitae libero pariatur delectus, quasi explicabo voluptates iure, aliquid quo repellat eum totam! Quas?"
  },
  {
    avatar: AVTR,
    name: "The Watcher",
    review: "lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus omnis qui et, est laudantium nobis vitae libero pariatur delectus, quasi explicabo voluptates iure, aliquid quo repellat eum totam! Quas?"
  },
  {
    avatar: AVTR,
    name: "Goody Two Shoes",
    review: "lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus omnis qui et, est laudantium nobis vitae libero pariatur delectus, quasi explicabo voluptates iure, aliquid quo repellat eum totam! Quas?"
  },
]

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (<SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="client avatar" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>)
        })}
      </Swiper>
    </section>
  )
}
export default Testimonials;