import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode } from "swiper";
import { ReactElement } from "react";

import "./Swipper.scss";

interface ISwipperScrollBar {
  listScroll?: ReactElement[],
  slidesPerView?: number
}

const SwipperScrollBar = (props: ISwipperScrollBar) => {
  const { listScroll, slidesPerView } = props;

  return (
    <Swiper
      slidesPerView={slidesPerView || 4}
      spaceBetween={10}
      // breakpoints={{
      //   640: {
      //     slidesPerView: 4,
      //     spaceBetween: 10,
      //   },
      //   768: {
      //     slidesPerView: 1,
      //     spaceBetween: 15,
      //   },
      //   1024: {
      //     slidesPerView: 4,
      //     spaceBetween: 10,
      //   },
      // }}
      freeMode={true}
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar, FreeMode]}
    >
      {listScroll?.length && listScroll?.map((elementScroll: ReactElement, key) => (
        <SwiperSlide key={key}>
          {elementScroll}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default SwipperScrollBar;