import React, { useContext } from "react";
import { SliderLineContainer } from "../../stylecomponents/SliderContainer";
import {
	isMobile,
	useWindowResize,
	minSliderSize,
	revealValues
} from "../../helpers";
import { globalState } from "../../State";

export const SliderLine = () => {
	const { width: ww, height: wh } = useWindowResize();
	const { minSize: sliderMinSize } = minSliderSize(ww, wh);
	const { contentWidth: cw, contentHeight: ch, dragging } = useContext(
		globalState
	);
	const values = { ww, wh, cw, ch };
	const {
		showingMoreDesktopValue,
		showingMoreMobileValue,
		isShowingMore
	} = revealValues(values);
	const linePadding = sliderMinSize;
	const linePaddingMobile = sliderMinSize;
	const gradientMobile = cw / showingMoreMobileValue;
	const gradientDesktop = cw / showingMoreDesktopValue;
	const gradientValue = isMobile(ww, wh) ? gradientMobile : gradientDesktop;
	console.log(gradientValue);
	return (
		<React.Fragment>
			<SliderLineContainer
				className='slider__line-container'
				isMobile={isMobile(ww, wh)}
				isShowingMore={isShowingMore}
				gradientValue={gradientValue}
				linePadding={linePadding}
				linePaddingMobile={linePaddingMobile}>
				<div className='slider__line-content'>
					<div className='slider__line' />
				</div>
				{dragging ? (
					<div className='slider__gradient'>
						<div className='slider__gradient-animation' />
					</div>
				) : (
					""
				)}
			</SliderLineContainer>
		</React.Fragment>
	);
};

export default SliderLine;
