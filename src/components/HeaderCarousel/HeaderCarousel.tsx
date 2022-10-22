import React from "react";
import headerImages from "../../constraints/headerImages";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import HeaderImage from "../HeaderImage/HeaderImage";

type Props = {};

const HeaderCarousel = (props: Props) => {
	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={1}
			//onSlideChange={() => console.log("slide change")}
			//onSwiper={swiper => console.log(swiper)}
		>
			{headerImages.map(({ imgSrc, imgOverText }, index) => (
				<SwiperSlide key={`header-image-${index}`}>
					<HeaderImage imgOverText={imgOverText} imgSrc={imgSrc} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default HeaderCarousel;
