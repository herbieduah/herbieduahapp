import React, { useContext, Fragment } from "react";
import { SliderController } from "../../stylecomponents/SliderContainer";
import { isMobile, useWindowResize } from "../../helpers";
import { globalState } from "../../State";
import Media from "../Media";

export const Slider = () => {
	const { width: ww, height: wh } = useWindowResize();
	const { dragging } = useContext(globalState);
	const isAppMobile = isMobile(ww, wh);
	return (
		<SliderController
			className='slider__controller'
			isMobile={isAppMobile}
			dragging={dragging}>
			<div className='slider__circle-line'>
				<button className='slider__circle'>
					{isAppMobile ? (
						<Fragment>
							<span className='slider__triangle mobile slider__triangle--top' />
							<span className='slider__triangle  mobile slider__triangle--bottom' />{" "}
						</Fragment>
					) : (
						<Fragment>
							<span className='slider__triangle desktop slider__triangle--left' />
							<span className='slider__triangle desktop slider__triangle--right' />
						</Fragment>
					)}
				</button>
			</div>
		</SliderController>
	);
};

export default Slider;
