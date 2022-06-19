export const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            }
        },

    ]
}
