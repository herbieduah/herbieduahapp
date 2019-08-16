import { rgba, invert, readableColor, complement } from "polished";
import cartographer from "../bgImages/cartographer.png";
// ** bgColor is first color;
// ** fontColorSecondary;
// const fontColor = readableColor("#cc208e");
// const fontColorSecondary = fontColor;
const bgColor = "#cc208e";
// const bgColorSecondary = "#6713d2";
const gradientValues = `#cc208e 0%, #6713d2 100%`;

const defaultBaseValues = {
	bgColor,
	gradientValues
};
export const themeMaker = (theme = defaultBaseValues) => {
	const { bgColor, gradientValues } = theme;
	const fontColor = readableColor(bgColor);
	const complementBg = complement(bgColor);
	const fontColorComplement = readableColor(complementBg);
	return {
		appBg: `linear-gradient(to right, ${gradientValues})`,
		appBgAnimation: `linear-gradient(-45deg, ${gradientValues})`,
		appBgColor: `transparent`,
		appBgMobile: `linear-gradient(to bottom, ${gradientValues})`,
		appfontFamily: `"roc-grotesk", -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
		appfontFamilyWide: `"roc-grotesk-wide", -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
		appfontFamilyExtraWide: `"roc-grotesk-extrawide", -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
		bgColor: `${bgColor}`,
		bgColorOverlay: `${rgba(readableColor(fontColor), 0.25)}`,
		buttonFontWeight: `700`,
		buttonLineHeight: ` 1.2`,
		buttonBorder: `0`,
		buttonBackground: `none`,
		buttonColor: `${rgba(fontColor, 0.65)}`,
		buttonTextTransform: `uppercase`,
		buttonSpanDisplay: `block`,
		bgColorSecondary: `${bgColor}`,
		CTAColor: `${rgba(fontColor, 0.65)}`,
		CTAColorSecondary: `${rgba(fontColor, 0.65)}`,
		fontColor: `${fontColor}`,
		fontColorComplement: `${fontColorComplement}`,
		complementBg: `${complementBg}`,
		fontColorOpposite: `${readableColor(fontColor)}`,
		fontColorSecondary: `${fontColor}`,
		fontSelection: `${invert(fontColor)}`,
		fullScreenHoldBg: ` linear-gradient( ${invert(bgColor)}, ${invert(
			bgColor
		)})`,
		logoBgColor: `${rgba(fontColor, 0.65)}`,
		logoBgHoverColor: `${fontColor}`,
		logoBorderRadius: `0`,
		logoInnerFillColor: `${fontColorComplement}`,
		logoInnerFillColorHoverFocus: `${fontColorComplement}`,
		logoOuterFillColor: `${fontColor}`,
		modalFullScreenBg: `linear-gradient(to right, ${gradientValues})`,
		modalFullScreenBgColor: `transparent`,
		modalFullScreenBgMobile: `linear-gradient(to bottom, ${gradientValues})`,
		navBarBg: "transparent",
		navBarBgComplement: `${complementBg}`,
		navBarButtonColor: `${rgba(fontColor, 0.65)}`,
		navBarHoverFocus: `${fontColor}`,
		navBarHoverFocusAction: "none",
		navBarButtonComplementaryText: `${rgba(fontColorComplement, 0.65)}`,
		navBarButtonComplementaryHoverText: `${fontColorComplement}`,
		navBarBorder: `1px solid ${rgba(fontColor, 0.25)}`,
		logoBorderBottom: `1px solid ${rgba(fontColor, 0.65)}`,
		sliderArrow: `${fontColor}`,
		sliderArrowActive: `${fontColor}`,
		sliderArrowOpacity: "1",
		sliderArrowSecondary: `${fontColor}`,
		sliderCircleActive: `${fontColor}`,
		sliderCircleBg: `transparent`,
		sliderCircleBorder: `1px solid ${fontColor}`,
		sliderCircleHoverFocus: `${rgba(bgColor, 0.65)}`,
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

const bgImageColor = `#252525`;
const bgImage = `${cartographer}`;
const defaultBgImageValues = {
	bgColor: bgImageColor,
	bgImage
};

export const themeBgMaker = (theme = defaultBgImageValues) => {
	const { bgColor, bgImage } = theme;
	const fontColor = readableColor(bgColor);
	const complementBg = complement(bgColor);
	const fontColorComplement = readableColor(complementBg);
	return {
		appBg: `url(${bgImage})`,
		appBgAnimation: `${bgColor}`,
		appBgColor: `${bgColor}`,
		appBgMobile: `url(${bgImage})`,
		appfontFamily: `"roc-grotesk", -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
		appfontFamilyWide: `"roc-grotesk-wide", -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
		appfontFamilyExtraWide: `"roc-grotesk-extrawide", -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
		bgColor: `${bgColor}`,
		bgColorOverlay: `${rgba(readableColor(fontColor), 0.19)}`,
		buttonFontWeight: `700`,
		buttonLineHeight: ` 1.2`,
		navBarButtonComplementaryText: `${rgba(fontColorComplement, 0.65)}`,
		navBarButtonComplementaryHoverText: `${fontColorComplement}`,
		buttonBorder: `0`,
		fontColorComplement: `${fontColorComplement}`,
		complementBg: `${complementBg}`,
		fontColorSecondary: `${fontColor}`,
		buttonBackground: `none`,
		buttonColor: `${rgba(fontColor, 0.65)}`,
		buttonTextTransform: `uppercase`,
		buttonSpanDisplay: `block`,
		bgColorSecondary: `${bgColor}`,
		CTAColor: `${rgba(fontColor, 0.65)}`,
		CTAColorSecondary: `${rgba(fontColor, 0.65)}`,
		fontColor: `${fontColor}`,
		fontColorOpposite: `${readableColor(fontColor)}`,
		navBarBgComplement: `${complementBg}`,
		fontSelection: `${invert(fontColor)}`,
		fullScreenHoldBg: ` linear-gradient( ${invert(bgColor)}, ${invert(
			bgColor
		)})`,
		logoBgColor: `${rgba(fontColor, 0.65)}`,
		logoBgHoverColor: `${fontColor}`,
		logoBorderRadius: `0`,
		logoInnerFillColor: `${fontColorComplement}`,
		logoInnerFillColorHoverFocus: `${fontColorComplement}`,
		logoOuterFillColor: `${fontColor}`,
		modalFullScreenBg: `${bgColor}`,
		modalFullScreenBgColor: `transparent`,
		modalFullScreenBgMobile: `${bgColor}`,
		navBarBg: "transparent",
		navBarButtonColor: `${rgba(fontColor, 0.65)}`,
		navBarHoverFocus: `${fontColor}`,
		navBarBorder: `1px solid ${rgba(fontColor, 0.25)}`,
		logoBorderBottom: `1px solid ${rgba(fontColor, 0.65)}`,
		navBarHoverFocusAction: "none",
		sliderArrow: `${fontColor}`,
		sliderArrowActive: `${fontColor}`,
		sliderArrowOpacity: "1",
		sliderArrowSecondary: `${fontColor}`,
		sliderCircleActive: `${fontColor}`,
		sliderCircleBg: `transparent`,
		sliderCircleBorder: `1px solid ${fontColor}`,
		sliderCircleHoverFocus: `${rgba(bgColor, 0.65)}`,
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
