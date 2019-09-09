import React, { useContext, Fragment } from "react";
import { SliderController } from "../../stylecomponents/SliderContainer";
import { isPortrait, useWindowResize } from "../../helpers";
import { globalState } from "../../State";
// import { isIOS } from "react-device-detect";
// import Media from "../Media";

export const Slider = () => {
	const { width: ww, height: wh } = useWindowResize();
	const { dragging } = useContext(globalState);
	const isAppMobile = isPortrait(ww, wh);
	return (
		<SliderController
			className='slider__controller'
			isPortrait={isAppMobile}
			dragging={dragging}>
			<div className='slider__circle-line'>
				<button aria-label='reveal slider' className='slider__circle'>
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
				{/* <Fragment>
					{isAppMobile ? (
						<div className='slider__line slider__line--is-portrait' />
					) : (
						<div className='slider__line slider__line--is-landscape' />
					)}
				</Fragment> */}
			</div>
		</SliderController>
	);
};

export default Slider;
