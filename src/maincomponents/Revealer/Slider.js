import React, { useContext } from "react";
import { SliderController } from "../../stylecomponents/SliderContainer";
import { isMobile, useWindowResize } from "../../helpers";
import { globalState } from "../../State";

export const Slider = () => {
	const { width: ww, height: wh } = useWindowResize();
	const { dragging } = useContext(globalState);
	return (
		<SliderController
			className='slider__controller'
			isMobile={isMobile(ww, wh)}
			dragging={dragging}>
			<div className='slider__circle' />
		</SliderController>
	);
};

export default Slider;
