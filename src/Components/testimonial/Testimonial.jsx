import React from 'react'
import './testimonial.css'
import c1 from '../../../src/assets/c1.jpg'
import c2 from '../../../src/assets/c2.jpg'
import c3 from '../../../src/assets/c3.jpg'
import c4 from '../../../src/assets/c4.jpg'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
  const clientReview = [
    {
      image: c1,
      cname: 'Penaere Chris',
      review:
        'This is a great work. I like it.This is a great work. I like it.This is a great work. I like it.',
    },

    {
      image: c2,
      cname: 'Sam Dave',
      review:
        'Second review. This is a great work. I like it.This is a great work. I like it.This is a great work. I like it.',
    },

    {
      image: c3,
      cname: 'Pere Christopher',
      review:
        'Third time rev!!! This is a great work. I like it.This is a great work. I like it.This is a great work. I like it.',
    },

    {
      image: c4,
      cname: 'Sandy Ella',
      review:
        'Fourth Rev!!!This is a great work. I like it.This is a great work. I like it.This is a great work. I like it.',
    },
  ]

  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial__container">
        {clientReview.map(({ image, cname, review }, index) => {
          return (
            <SwiperSlide
              key={index}
              className="testimonial"
              // install Swiper modules
              modules={[Pagination, Navigation]}
              spaceBetween={40}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <div className="client__avatar">
                <img src={image} alt="Client image" />
              </div>
              <h5 className="client__name">{cname}</h5>
              <small className="client__review"> {review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonial
