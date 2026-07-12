import "./Testimonials.css";
import ReviewCard from "../ReviewCard/ReviewCard.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Priya S.",
    review: "Amazing quality, tastes just like homemade.",
    rating: 5,
  },
  {
    name: "Rahul M.",
    review: "Fast delivery and great packaging.",
    rating: 5,
  },
  {
    name: "Anjali K.",
    review: "My family loves the spices from here.",
    rating: 4,
  },
  {
    name: "Rohan A.",
    review: "Fresh ingredients and premium taste.",
    rating: 5,
  },
  {
    name: "Sneha P.",
    review: "Beautiful ambience and delicious food.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What Our Customers Say</h2>
          <p>Real reviews from our satisfied customers</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                name={review.name}
                review={review.review}
                rating={review.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
