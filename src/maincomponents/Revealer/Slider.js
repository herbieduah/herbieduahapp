import React from "react";
import { SliderController } from "../../stylecomponents/SliderContainer";
import { isMobile, useWindowResize } from "../../helpers";

export const Slider = () => {
	const { width: ww, height: wh } = useWindowResize();
	return (
		<SliderController
			className='slider__controller'
			isMobile={isMobile(ww, wh)}>
			<div className='slider__circle' />
		</SliderController>
	);
};

export default Slider;
