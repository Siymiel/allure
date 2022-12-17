import React, { useEffect } from 'react'
import CategoryCard from '../cards/CategoryCard'
import { getCategories } from '../../redux/apis/categoriesApiCalls'
import { useDispatch, useSelector } from 'react-redux'
import Slider from "react-slick";

const ByCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories?.categories)

  useEffect(() => {
    getCategories(dispatch)
  }, [dispatch])

  var settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    lazyLoad: true,
    pauseOnHover: true,
    swipeToSlide: true,
    autoplay: true,
    centerPadding: "60px",
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    rtl: false,
    cssEase: "linear",
    autoplaySpeed: 6000,
    responsive: [
      {
      breakpoint: 1024,
      settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
      }
      },
      {
      breakpoint: 600,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
      }
      },
      {
      breakpoint: 480,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false,
          dots: false
      }
      }
  ]
  };

  return (
    <section className='mt-20'>
      <div className='text-center text-4xl font-light uppercase'>
        <h2>Shop by Category</h2>
      </div>
      <section className='px-10 mt-10'>
        <Slider {...settings}>
        {categories?.map(category => (
          <CategoryCard
            key={category._id}
            category={category}
          />
        ))}
        </Slider>
      </section>
    </section>
  )
}

export default ByCategory