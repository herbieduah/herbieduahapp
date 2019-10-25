import { rgba, invert, readableColor, complement } from "polished";
import cartographer from "../bgImages/cartographer.png";
// ** bgColor is first color;
// ** fontColorSecondary;
// const fontColor = readableColor("#cc208e");
// const fontColorSecondary = fontColor;
const mainFont = `"aktiv-grotesk", -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`;
const mainFontTertiary = `"aktiv-grotesk-condensed", -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`;
const mainFontSecondary = `"aktiv-grotesk-extended", -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`;
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
	return {
		appBg: `linear-gradient(to right, ${gradientValues})`,
		appBgAnimation: `linear-gradient(-45deg, ${gradientValues})`,
		appBgColor: `transparent`,
		appBgMobile: `linear-gradient(to bottom, ${gradientValues})`,
		appfontFamily: `${mainFont}`,
		appfontFamilySecondary: `${mainFontSecondary}`,
		appfontFamilyTertiary: `${mainFontTertiary}`,
		bgColor: `${bgColor}`,
		bgColorContent: `${rgba(fontColor, 0.2)}`,
		bgColorOverlay: `${rgba(readableColor(fontColor), 0.2)}`,
		bgColorSecondary: `${bgColor}`,
		borderThin: `1px solid ${rgba(fontColor, 0.2)}`,
		buttonBackground: `none`,
		buttonBackgroundHoverFocus: `${fontColor}`,
		buttonBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		buttonColor: `${rgba(fontColor, 1)}`,
		buttonColorHoverFocus: `${readableColor(fontColor)}`,
		buttonFontWeight: `700`,
		buttonLineHeight: ` 1.2`,
		buttonSpanDisplay: `block`,
		buttonTextTransform: `uppercase`,
		colorSlightOpacity: `${rgba(fontColor, 0.56)}`,
		CTAColor: `${rgba(fontColor, 1)}`,
		CTAColorSecondary: `${rgba(fontColor, 1)}`,
		CTAUnderline: `none`,
		fontColor: `${fontColor}`,
		fontColorOpposite: `${readableColor(fontColor)}`,
		fontColorSecondary: `${fontColor}`,
		fontSelection: `${invert(fontColor)}`,
		fullScreenHoldBg: `${invert(bgColor)}`,
		logoBgColor: `${rgba(fontColor, 1)}`,
		logoBgHoverColor: `${fontColor}`,
		logoBorderBottom: `1px solid ${rgba(fontColor, 1)}`,
		logoBorderRadius: `0`,
		logoInnerFillColor: `${fontColor}`,
		logoInnerFillColorHoverFocus: `${fontColor}`,
		logoOuterFillColor: `${fontColor}`,
		modalFullScreenBg: `linear-gradient(to right, ${gradientValues})`,
		modalFullScreenBgColor: `transparent`,
		modalFullScreenBgMobile: `linear-gradient(to bottom, ${gradientValues})`,
		navBarBg: "transparent",
		navBarBgComplement: `${bgColor}`,
		navBarBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		navBarButtonColor: `${fontColor}`,
		navBarButtonActive: `${rgba(fontColor, 0.55)}`,
		navBarButtonComplementaryHoverText: `${rgba(fontColor, 0.55)}`,
		navBarButtonComplementaryText: `${rgba(fontColor, 1)}`,
		navBarHoverFocus: `${rgba(fontColor, 0.55)}`,
		navBarHoverFocusAction: "none",
		sliderArrow: `${fontColor}`,
		sliderArrowActive: `${fontColor}`,
		sliderArrowOpacity: "1",
		sliderArrowSecondary: `${fontColor}`,
		sliderBg: `${rgba(fontColor, 0.2)}`,
		sliderCircleActive: `${fontColor}`,
		sliderCircleBg: `${rgba(fontColor, 0.2)}`,
		sliderCircleBorder: `${rgba(fontColor, 0.2)}`,
		sliderCircleHoverFocus: `${rgba(fontColor, 0.2)}`,
		sliderCircleOpacity: `1`,
		sliderLine: `linear-gradient(to right, transparent 50%, ${fontColor} 50%)`,
		sliderLinePortrait: `linear-gradient(to bottom, transparent 50%, ${fontColor} 50%)`,
		tabHeadingsBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		tabHeadingsBorderActive: `0`,
		tabHeadingsBorderBottomActive: `2px solid ${fontColor}`,
		tabHeadingsBorderRadius: `0`,
		tabHeadingsColor: `${rgba(fontColor, 1)}`,
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
	return {
		appBg: `url(${bgImage})`,
		appBgAnimation: `${bgColor}`,
		appBgColor: `${bgColor}`,
		appBgMobile: `url(${bgImage})`,
		appfontFamily: `${mainFont}`,
		appfontFamilySecondary: `${mainFontSecondary}`,
		appfontFamilyTertiary: `${mainFontTertiary}`,
		bgColor: `${bgColor}`,
		bgColorContent: `${rgba(fontColor, 0.2)}`,
		bgColorOverlay: `${rgba(readableColor(fontColor), 0.19)}`,
		bgColorSecondary: `${bgColor}`,
		borderThin: `1px solid ${rgba(fontColor, 0.2)}`,
		buttonBackground: `none`,
		buttonBackgroundHoverFocus: `${fontColor}`,
		buttonBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		buttonColor: `${rgba(fontColor, 1)}`,
		buttonColorHoverFocus: `${readableColor(fontColor)}`,
		buttonFontWeight: `700`,
		buttonLineHeight: ` 1.2`,
		buttonSpanDisplay: `block`,
		buttonTextTransform: `uppercase`,
		colorSlightOpacity: `${rgba(fontColor, 0.56)}`,
		CTAColor: `${rgba(fontColor, 1)}`,
		CTAColorSecondary: `${rgba(fontColor, 1)}`,
		CTAUnderline: `none`,
		fontColor: `${fontColor}`,
		fontColorOpposite: `${readableColor(fontColor)}`,
		fontColorSecondary: `${fontColor}`,
		fontSelection: `${invert(fontColor)}`,
		fullScreenHoldBg: ` linear-gradient( ${invert(bgColor)}, ${invert(
			bgColor
		)})`,
		logoBgColor: `${rgba(fontColor, 1)}`,
		logoBgHoverColor: `${fontColor}`,
		logoBorderBottom: `1px solid ${rgba(fontColor, 1)}`,
		logoBorderRadius: `0`,
		logoInnerFillColor: `${fontColor}`,
		logoInnerFillColorHoverFocus: `${fontColor}`,
		logoOuterFillColor: `${fontColor}`,
		modalFullScreenBg: `${bgColor}`,
		modalFullScreenBgColor: `transparent`,
		modalFullScreenBgMobile: `${bgColor}`,
		navBarBg: "transparent",
		navBarBgComplement: `${bgColor}`,
		navBarBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		navBarButtonColor: `${fontColor}`,
		navBarButtonActive: `${rgba(fontColor, 0.55)}`,
		navBarButtonComplementaryHoverText: `${rgba(fontColor, 0.55)}`,
		navBarButtonComplementaryText: `${rgba(fontColor, 1)}`,
		navBarHoverFocus: `${rgba(fontColor, 0.55)}`,
		navBarHoverFocusAction: "none",
		sliderArrow: `${fontColor}`,
		sliderArrowActive: `${fontColor}`,
		sliderArrowOpacity: "1",
		sliderArrowSecondary: `${fontColor}`,
		sliderBg: `${rgba(fontColor, 0.2)}`,
		sliderCircleActive: `${fontColor}`,
		sliderCircleBg: `${rgba(fontColor, 0.2)}`,
		sliderCircleBorder: `${rgba(fontColor, 0.2)}`,
		sliderCircleHoverFocus: `${rgba(fontColor, 0.2)}`,
		sliderCircleOpacity: `1`,
		sliderLine: `linear-gradient(to right, transparent 50%, ${fontColor} 50%)`,
		sliderLinePortrait: `linear-gradient(to bottom, transparent 50%, ${fontColor} 50%)`,
		tabHeadingsBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		tabHeadingsBorderActive: `0`,
		tabHeadingsBorderBottomActive: `2px solid ${fontColor}`,
		tabHeadingsBorderRadius: `0`,
		tabHeadingsColor: `${rgba(fontColor, 1)}`,
		tabHeadingsColorActive: `${fontColor}`,
		tabHeadingsColorHoverFocus: `${fontColor}`,
		tabHeadingsJustifyContent: `space-between`
	};
};

export const themeColorMaker = (theme = "Color-ffffff-000000") => {
	const values = theme.split("-");
	const bgColor = `#${values[1]}`;
	const fontColor = `#${values[2]}`;
	return {
		appBg: `${bgColor}`,
		appBgAnimation: `${bgColor}`,
		appBgColor: `${bgColor}`,
		appBgMobile: `${bgColor}`,
		appfontFamily: `${mainFont}`,
		appfontFamilySecondary: `${mainFontSecondary}`,
		appfontFamilyTertiary: `${mainFontTertiary}`,
		bgColor: `${bgColor}`,
		bgColorContent: `${rgba(fontColor, 0.2)}`,
		bgColorOverlay: `transparent`,
		bgColorSecondary: `${bgColor}`,
		borderThin: `1px solid ${rgba(fontColor, 0.2)}`,
		buttonBackground: `none`,
		buttonBackgroundHoverFocus: `${fontColor}`,
		buttonBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		buttonColor: `${rgba(fontColor, 1)}`,
		buttonColorHoverFocus: `${readableColor(fontColor)}`,
		buttonFontWeight: `700`,
		buttonLineHeight: ` 1.2`,
		buttonSpanDisplay: `block`,
		buttonTextTransform: `uppercase`,
		colorSlightOpacity: `${rgba(fontColor, 0.56)}`,
		CTAColor: `${rgba(fontColor, 1)}`,
		CTAColorSecondary: `${rgba(fontColor, 1)}`,
		CTAUnderline: `none`,
		fontColor: `${fontColor}`,
		fontColorOpposite: `${readableColor(fontColor)}`,
		fontColorSecondary: `${fontColor}`,
		fontSelection: `${invert(fontColor)}`,
		fullScreenHoldBg: ` linear-gradient( ${invert(bgColor)}, ${invert(
			bgColor
		)})`,
		logoBgColor: `${rgba(fontColor, 1)}`,
		logoBgHoverColor: `${fontColor}`,
		logoBorderBottom: `1px solid ${rgba(fontColor, 1)}`,
		logoBorderRadius: `0`,
		logoInnerFillColor: `${fontColor}`,
		logoInnerFillColorHoverFocus: `${fontColor}`,
		logoOuterFillColor: `${fontColor}`,
		modalFullScreenBg: `${bgColor}`,
		modalFullScreenBgColor: `transparent`,
		modalFullScreenBgMobile: `${bgColor}`,
		navBarBg: "transparent",
		navBarBgComplement: `${bgColor}`,
		navBarBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		navBarButtonColor: `${fontColor}`,
		navBarButtonActive: `${rgba(fontColor, 0.55)}`,
		navBarButtonComplementaryHoverText: `${rgba(fontColor, 0.55)}`,
		navBarButtonComplementaryText: `${rgba(fontColor, 1)}`,
		navBarHoverFocus: `${rgba(fontColor, 0.55)}`,
		navBarHoverFocusAction: "none",
		sliderArrow: `${fontColor}`,
		sliderArrowActive: `${fontColor}`,
		sliderArrowOpacity: "1",
		sliderArrowSecondary: `${fontColor}`,
		sliderBg: `${rgba(fontColor, 0.2)}`,
		sliderCircleActive: `${fontColor}`,
		sliderCircleBg: `${rgba(fontColor, 0.2)}`,
		sliderCircleBorder: `${rgba(fontColor, 0.2)}`,
		sliderCircleHoverFocus: `${rgba(fontColor, 0.2)}`,
		sliderCircleOpacity: `1`,
		sliderLine: `linear-gradient(to right, transparent 50%, ${fontColor} 50%)`,
		sliderLinePortrait: `linear-gradient(to bottom, transparent 50%, ${fontColor} 50%)`,
		tabHeadingsBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		tabHeadingsBorderActive: `0`,
		tabHeadingsBorderBottomActive: `2px solid ${fontColor}`,
		tabHeadingsBorderRadius: `0`,
		tabHeadingsColor: `${rgba(fontColor, 1)}`,
		tabHeadingsColorActive: `${fontColor}`,
		tabHeadingsColorHoverFocus: `${fontColor}`,
		tabHeadingsJustifyContent: `space-between`
	};
};

export const matrixTheme = () => {
	const bgColor = "#252525";
	const fontColor = "#ffffff";
	return {
		appBg: `none`,
		appBgAnimation: `${bgColor}`,
		appBgColor: `${bgColor}`,
		appBgMobile: `none`,
		appfontFamily: `${mainFont}`,
		appfontFamilySecondary: `${mainFontSecondary}`,
		appfontFamilyTertiary: `${mainFontTertiary}`,
		bgColor: `${bgColor}`,
		bgColorContent: `${rgba(fontColor, 0.2)}`,
		bgColorOverlay: `${rgba(readableColor(fontColor), 0.19)}`,
		bgColorSecondary: `${bgColor}`,
		borderThin: `1px solid ${rgba(fontColor, 0.2)}`,
		buttonBackground: `none`,
		buttonBackgroundHoverFocus: `${fontColor}`,
		buttonBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		buttonColor: `${rgba(fontColor, 1)}`,
		buttonColorHoverFocus: `${readableColor(fontColor)}`,
		buttonFontWeight: `700`,
		buttonLineHeight: ` 1.2`,
		buttonSpanDisplay: `block`,
		buttonTextTransform: `uppercase`,
		colorSlightOpacity: `${rgba(fontColor, 0.56)}`,
		CTAColor: `${rgba(fontColor, 1)}`,
		CTAColorSecondary: `${rgba(fontColor, 1)}`,
		CTAUnderline: `none`,
		fontColor: `${fontColor}`,
		fontColorOpposite: `${readableColor(fontColor)}`,
		fontColorSecondary: `${fontColor}`,
		fontSelection: `${invert(fontColor)}`,
		fullScreenHoldBg: `${invert(bgColor)}`,
		logoBgColor: `${rgba(fontColor, 1)}`,
		logoBgHoverColor: `${fontColor}`,
		logoBorderBottom: `1px solid ${rgba(fontColor, 1)}`,
		logoBorderRadius: `0`,
		logoInnerFillColor: `${fontColor}`,
		logoInnerFillColorHoverFocus: `${fontColor}`,
		logoOuterFillColor: `${fontColor}`,
		modalFullScreenBg: `${bgColor}`,
		modalFullScreenBgColor: `transparent`,
		modalFullScreenBgMobile: `${bgColor}`,
		navBarBg: "transparent",
		navBarBgComplement: `${bgColor}`,
		navBarBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		navBarButtonColor: `${fontColor}`,
		navBarButtonActive: `${rgba(fontColor, 0.55)}`,
		navBarButtonComplementaryHoverText: `${rgba(fontColor, 0.55)}`,
		navBarButtonComplementaryText: `${rgba(fontColor, 1)}`,
		navBarHoverFocus: `${rgba(fontColor, 0.55)}`,
		navBarHoverFocusAction: "none",
		sliderArrow: `${fontColor}`,
		sliderArrowActive: `${fontColor}`,
		sliderArrowOpacity: "1",
		sliderArrowSecondary: `${fontColor}`,
		sliderBg: `${rgba(fontColor, 0.2)}`,
		sliderCircleActive: `${fontColor}`,
		sliderCircleBg: `${rgba(fontColor, 0.2)}`,
		sliderCircleBorder: `${rgba(fontColor, 0.2)}`,
		sliderCircleHoverFocus: `${rgba(fontColor, 0.2)}`,
		sliderCircleOpacity: `1`,
		sliderLine: `linear-gradient(to right, transparent 50%, ${fontColor} 50%)`,
		sliderLinePortrait: `linear-gradient(to bottom, transparent 50%, ${fontColor} 50%)`,
		tabHeadingsBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		tabHeadingsBorderActive: `0`,
		tabHeadingsBorderBottomActive: `2px solid ${fontColor}`,
		tabHeadingsBorderRadius: `0`,
		tabHeadingsColor: `${rgba(fontColor, 1)}`,
		tabHeadingsColorActive: `${fontColor}`,
		tabHeadingsColorHoverFocus: `${fontColor}`,
		tabHeadingsJustifyContent: `space-between`
	};
};

export const snapchatTheme = () => {
	const bgColor = "#3CB2E2";
	const fontColor = "#FFFFFF";
	return {
		appBg: `none`,
		appBgAnimation: `${bgColor}`,
		appBgColor: `${bgColor}`,
		appBgMobile: `none`,
		appfontFamily: `${mainFont}`,
		appfontFamilySecondary: `${mainFontSecondary}`,
		appfontFamilyTertiary: `${mainFontTertiary}`,
		bgColor: `${bgColor}`,
		bgColorContent: `${rgba(fontColor, 0.2)}`,
		bgColorOverlay: `${rgba(readableColor(fontColor), 0.19)}`,
		bgColorSecondary: `${bgColor}`,
		borderThin: `1px solid ${rgba(fontColor, 0.2)}`,
		buttonBackground: `none`,
		buttonBackgroundHoverFocus: `${fontColor}`,
		buttonBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		buttonColor: `${rgba(fontColor, 1)}`,
		buttonColorHoverFocus: `${readableColor(fontColor)}`,
		buttonFontWeight: `700`,
		buttonLineHeight: ` 1.2`,
		buttonSpanDisplay: `block`,
		buttonTextTransform: `uppercase`,
		colorSlightOpacity: `${rgba(fontColor, 0.56)}`,
		CTAColor: `${rgba(fontColor, 1)}`,
		CTAColorSecondary: `${rgba(fontColor, 1)}`,
		CTAUnderline: `none`,
		fontColor: `${fontColor}`,
		fontColorOpposite: `${readableColor(fontColor)}`,
		fontColorSecondary: `${fontColor}`,
		fontSelection: `${invert(fontColor)}`,
		fullScreenHoldBg: `${invert(bgColor)}`,
		logoBgColor: `${rgba(fontColor, 1)}`,
		logoBgHoverColor: `${fontColor}`,
		logoBorderBottom: `1px solid ${rgba(fontColor, 1)}`,
		logoBorderRadius: `0`,
		logoInnerFillColor: `#FFFC00`,
		logoInnerFillColorHoverFocus: `#e92754`,
		logoOuterFillColor: `${fontColor}`,
		modalFullScreenBg: `${bgColor}`,
		modalFullScreenBgColor: `transparent`,
		modalFullScreenBgMobile: `${bgColor}`,
		navBarBg: "#transparent",
		navBarBgComplement: `#9B5580`,
		navBarBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		navBarButtonColor: `${fontColor}`,
		navBarButtonActive: `${rgba(fontColor, 0.55)}`,
		navBarButtonComplementaryHoverText: `${rgba(fontColor, 0.55)}`,
		navBarButtonComplementaryText: `${rgba(fontColor, 1)}`,
		navBarHoverFocus: `${rgba(fontColor, 0.55)}`,
		navBarHoverFocusAction: "none",
		sliderArrow: `${fontColor}`,
		sliderArrowActive: `${fontColor}`,
		sliderArrowOpacity: "0",
		sliderArrowSecondary: `${fontColor}`,
		sliderBg: `${rgba(fontColor, 0.2)}`,
		sliderCircleActive: `${fontColor}`,
		sliderCircleBg: `${rgba(fontColor, 0.2)}`,
		sliderCircleBorder: `${rgba(fontColor, 0.2)}`,
		sliderCircleHoverFocus: `${rgba(fontColor, 0.2)}`,
		sliderCircleOpacity: `1`,
		sliderLine: `linear-gradient(to right, transparent 50%, ${fontColor} 50%)`,
		sliderLinePortrait: `linear-gradient(to bottom, transparent 50%, ${fontColor} 50%)`,
		tabHeadingsBorder: `1px solid ${rgba(fontColor, 0.2)}`,
		tabHeadingsBorderActive: `0`,
		tabHeadingsBorderBottomActive: `2px solid ${fontColor}`,
		tabHeadingsBorderRadius: `0`,
		tabHeadingsColor: `${rgba(fontColor, 1)}`,
		tabHeadingsColorActive: `${fontColor}`,
		tabHeadingsColorHoverFocus: `${fontColor}`,
		tabHeadingsJustifyContent: `space-between`
	};
};
