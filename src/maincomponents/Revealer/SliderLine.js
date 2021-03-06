import React, { useContext } from "react";
import { SliderLineContainer } from "../../stylecomponents/SliderContainer";
import Text from "../../stylecomponents/Text";
import {
	isPortrait,
	useWindowResize,
	minSliderSize,
	revealValues
} from "../../helpers";
import { globalState } from "../../State";
import { ShowIf } from "../../ComponentHelpers";
export const SliderLine = () => {
	const { width: ww, height: wh } = useWindowResize();
	const { minSize: sliderMinSize } = minSliderSize(ww, wh);
	const { contentWidth: cw, contentHeight: ch, dragging } = useContext(
		globalState
	);
	const values = { ww, wh, cw, ch };
	const { isShowingMore, switchSides } = revealValues(values);
	const linePadding = sliderMinSize;
	const linePaddingMobile = sliderMinSize;
	const gradientDirDesktop = switchSides ? "to left" : "to right";
	const gradientDirMobile = switchSides ? "to top" : "to bottom";
	const gradientDir = isPortrait(ww, wh)
		? gradientDirMobile
		: gradientDirDesktop;
	return (
		<React.Fragment>
			<SliderLineContainer
				className='slider__line-container'
				isPortrait={isPortrait(ww, wh)}
				isShowingMore={isShowingMore}
				gradientDir={gradientDir}
				dragging={dragging}
				linePadding={linePadding}
				linePaddingMobile={linePaddingMobile}>
				<div className='slider__line-content'>
					<ShowIf thisValue={isShowingMore} noAbsolute thatValue={true}>
						<div className='slider__instructions-container'>
							<span className='slider__instructions'>
								<Text s>Less</Text>
							</span>
						</div>
					</ShowIf>
					{/* {isShowingMore ? (
						<div className='slider__instructions-container'>
							<span className='slider__instructions'>
								<Text bold s>
									Less
								</Text>
							</span>
						</div>
					) : null} */}
					<span className='slider__line' />
					<ShowIf noAbsolute thisValue={isShowingMore} thatValue={false}>
						<div className='slider__instructions-container'>
							<span className='slider__instructions'>
								<Text s>More</Text>
							</span>
						</div>
					</ShowIf>
					{/* {!isShowingMore ? (
						<div className='slider__instructions-container'>
							<span className='slider__instructions'>
								<Text bold s>
									More
								</Text>
							</span>
						</div>
					) : null} */}
				</div>
				{/* {dragging ? (
					<div className='slider__gradient'>
						<div className='slider__gradient-animation' />
					</div>
				) : (
					""
				)} */}
			</SliderLineContainer>
		</React.Fragment>
	);
};

export default SliderLine;
