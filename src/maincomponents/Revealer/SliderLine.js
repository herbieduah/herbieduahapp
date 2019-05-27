import React, { useContext } from "react";
import { SliderLineContainer } from "../../stylecomponents/SliderContainer";
import { isMobile, useWindowResize, minSliderSize } from "../../helpers";
import { globalState } from "../../State";

export const SliderLine = () => {
	const { width: ww, height: wh } = useWindowResize();
	const { minSize: sliderMinSize } = minSliderSize(ww, wh);
	const { dragging } = useContext(globalState);
	const linePadding = sliderMinSize;
	const linePaddingMobile = sliderMinSize;
	return (
		<React.Fragment>
			{dragging ? (
				<SliderLineContainer
					className='slider__line'
					isMobile={isMobile(ww, wh)}
					linePadding={linePadding}
					linePaddingMobile={linePaddingMobile}>
					<hr />
					<div className='gradient' />
				</SliderLineContainer>
			) : null}
		</React.Fragment>
	);
};

export default SliderLine;
