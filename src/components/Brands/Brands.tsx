import React from "react";
import brandsImages from "../../constraints/brandsImages";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Box } from "@mui/system";
import useWindowSize from "../../hooks/useWindowSIze";
import theme from "../../theme";

type Props = {};

const Brands = (props: Props) => {
	const { width } = useWindowSize();

	return (
		<Box sx={{ my: 2 }}>
			<Swiper
				spaceBetween={width > theme.breakpoints.values.md ? 75 : 25}
				slidesPerView={width > theme.breakpoints.values.md ? 4 : 2}
				onSlideChange={() => console.log("slide change")}
				onSwiper={swiper => console.log(swiper)}
				parallax
			>
				{brandsImages.map(({ imgSrc }, index) => (
					<SwiperSlide key={`header-image-${index}`}>
						<Box
							component="div"
							display="flex"
							alignItems="center"
							height="150px"
						>
							<Box
								component="img"
								src={imgSrc}
								width={{ xs: "100px", sm: "150px", md: "200px" }}
								sx={{ p: 2 }}
							/>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default Brands;
