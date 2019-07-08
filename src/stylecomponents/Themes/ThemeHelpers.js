import { rgba, invert } from "polished";
// ** bgColor is first color;
// ** fontColorSecondary;
const fontColor = "#ffffff";
const fontColorSecondary = fontColor;
const bgColor = "#cc208e";
const bgColorSecondary = "#6713d2";
const gradientValues = `#cc208e 0%, #6713d2 100%`;

const defaultBaseValues = {
	fontColor,
	fontColorSecondary,
	bgColor,
	bgColorSecondary,
	gradientValues
};
export const themeMaker = (theme = defaultBaseValues) => {
	const {
		fontColor,
		fontColorSecondary,
		bgColor,
		bgColorSecondary,
		gradientValues
	} = theme;
	return {
		appBg: `linear-gradient(to right, ${gradientValues})`,
		appBgAnimation: `linear-gradient(-45deg, ${gradientValues})`,
		appBgColor: `transparent`,
		appBgMobile: `linear-gradient(to bottom, ${gradientValues})`,
		appfontFamily: `"commuters-sans", -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
		bgColor: `${bgColor}`,
		bgColorSecondary: `${bgColorSecondary}`,
		CTAColor: `${rgba(fontColor, 0.65)}`,
		CTAColorSecondary: `${rgba(fontColorSecondary, 0.65)}`,
		fontColor: `${fontColor}`,
		fontColorSecondary: `${fontColor}`,
		fontSelection: `${invert(fontColor)}`,
		fullScreenHoldBg: ` linear-gradient( ${invert(bgColor)}, ${invert(
			bgColorSecondary
		)})`,
		logoBgColor: `${rgba(fontColor, 0.65)}`,
		logoBgHoverColor: `${fontColor}`,
		logoBorderRadius: `4px`,
		logoInnerFillColor: `${bgColor}`,
		logoInnerFillColorHoverFocus: `${bgColor}`,
		logoOuterFillColor: `${fontColor}`,
		modalFullScreenBg: `linear-gradient(to right, ${gradientValues})`,
		modalFullScreenBgColor: `transparent`,
		modalFullScreenBgMobile: `linear-gradient(to bottom, ${gradientValues})`,
		navBarBg: "transparent",
		navBarButtonColor: `${rgba(fontColor, 0.65)}`,
		navBarHoverFocus: `${fontColor}`,
		navBarHoverFocusAction: "scale(1.1)",
		sliderArrow: `${bgColor}`,
		sliderArrowActive: `${fontColor}`,
		sliderArrowOpacity: "1",
		sliderArrowSecondary: `${bgColor}`,
		sliderCircleActive: `${fontColor}`,
		sliderCircleBg: `${rgba(fontColor, 0.65)}`,
		sliderCircleBorder: `1px solid ${fontColor}`,
		sliderCircleHoverFocus: `${fontColor}`,
		sliderCircleOpacity: `1`,
		sliderLine: `linear-gradient(to right, transparent 50%, ${fontColor} 50%)`,
		sliderLinePortrait: `linear-gradient(to bottom, transparent 50%, ${fontColor} 50%)`,
		tabHeadingsBorder: `0`,
		tabHeadingsBorderActive: `0`,
		tabHeadingsBorderBottomActive: `2px solid ${fontColor}`,
		tabHeadingsBorderRadius: `0`,
		tabHeadingsColor: `${rgba(fontColor, 0.65)}`,
		tabHeadingsColorActive: `${fontColor}`,
		tabHeadingsColorHoverFocus: `${fontColor}`,
		tabHeadingsJustifyContent: `space-between`
	};
};
