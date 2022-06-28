import Swiper, { Pagination } from 'swiper'
Swiper.use([Pagination])

let isMobileDevice = window.matchMedia(
  '(max-width: 767.9px) and (min-resolution: 150dpi)'
).matches

let iPhoneFallback = window.matchMedia(
  '(max-width: 767.9px) and (orientation: portrait)'
).matches

let useragentFallback = function () {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true
  }
}

if (isMobileDevice || iPhoneFallback || useragentFallback()) {
  let swiperContainers = [
    '.repair-brands__swiper-container',
    '.repair-devices__swiper-container',
    '.service-prices__swiper-container'
  ]

  for (let i = 0; i < swiperContainers.length; i++) {
    new Swiper(swiperContainers[i], {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

      slideToClickedSlide: true,

      autoWidth: true,

      slidesPerView: 'auto'
    })
  }
}
