import { rgba, invert } from "polished";
import { fontColor } from "../StyleHelpers";
// ** bgColor is first color;
// ** fontColorSecondary;
const fontColor = "#ffffff";
const fontColorSecondary = fontColor;
const bgColor = "#cc208e";
const bgColorSecondary = "#6713d2";
// const bgColorInvert = invert(bgColor);
// const bgColorSecondaryInvert = invert(bgColorSecondary);
const fontColor = "#ffffff";
const CTAColor = `${rgba(fontColor, 0.7)}`;
const CTAColorSecondary = `${rgba(fontColorSecondary, 0.7)}`;
export const themesMaster = {
	appBg: `linear-gradient(to right, #cc208e 0%, #6713d2 100%)`,
	appBgMobile: `linear-gradient(to bottom, #cc208e 0%, #6713d2 100%)`,
	appBGColor: `transparent`,
	navBarBG: "transparent",
	navBarButtonColor: `${CTAColor}`,
	navBarHoverFocus: `${fontColor}`,
	navBarHoverFocusAction: "scale(1.1)",
	logoInnerFillColor: `${bgColor}`,
	logoInnerFillColorHoverFocus: `${bgColor}`,
	logoOuterFillColor: `${fontColor}`,
	logoBGColor: `${CTAColor}`,
	logoBGHoverColor: `${fontColor}`,
	tabHeadingsJustifyContent: `space-between`,
	tabHeadingsBorderRadius: `0`,
	tabHeadingsBorder: `0`,
	tabHeadingsColor: `${CTAColorSecondary}`,
	tabHeadingsColorHoverFocus: `${fontColorSecondary}`,
	tabHeadingsColorActive: `${fontColorSecondary}`,
	fullScreenHoldBG: ` linear-gradient( ${invert(bgColor)}, ${invert(bgColor)}),`
};

// export const themesMaster = {
// 	bgColor: `${rgba("#6713d2", 0.9)}`,
// 	bgColorGradient: "linear-gradient(to top, #cc208e 0%, #6713d2 100%);",
// 	fontColor: "#ffffff",
// 	gradient1: "",
// 	gradient2: "",
// 	headingColor: "#ffffff",
// 	ctaColor: "#ffffff"
// };
