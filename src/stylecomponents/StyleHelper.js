import { rgba, stripUnit } from "polished";
export function fluidType(minVW, maxVW, minFontSize, maxFontSize) {
	let u1 = stripUnit(minVW)[1];
	let u2 = stripUnit(maxVW)[1];
	let u3 = stripUnit(minFontSize)[1];
	let u4 = stripUnit(maxFontSize)[1];
	let finalFontSize = ``;
	if (u1 === u2 && u1 && u3 && u1 === u4) {
		finalFontSize = `
    font-size: ${minFontSize};
      @media screen and (min-width: ${minVW}) {
        font-size: calc(${minFontSize} + ${stripUnit(maxFontSize) -
			stripUnit(minFontSize)} * ((100vw - ${minVW}) / ${stripUnit(maxVW) -
			stripUnit(minVW)}));
      }
      @media screen and (min-width: ${maxVW}) {
        font-size: ${maxFontSize};
      }
    `;
	}
	return finalFontSize;
}
let minVW = `320px`;
let maxVW = `1200px`;
let minFontSize = `16px`;
let maxFontSize = `24px`;
export const fluidTypeInfo = fluidType(minVW, maxVW, minFontSize, maxFontSize);
export const mobile = "@media only screen and (max-width: 500px)";
export const mobileHorizontal = "@media only screen and (max-width: 1200px)";
export const absoluteOverlay =
	"position: absolute;width: 100%;height: 100%;top: 0;left: 0;right: 0;bottom: 0;";
export const fiftyPixels = "3.47vw";
export const iconWidth = "2.5rem";
export const showMore = props => props.appValues.isShowingMore;
export const appGradient = props => rgba(props.theme.bgColor, 0.0);
export const appColor = props => props.theme.bgColor;
export const ctaColor = props => props.theme.ctaColor;

//BlockStyle.js
export const blockBorderColor = props => rgba(props.theme.ctaColor, 0.3);
export const blockBorderColorHover = props => rgba(props.theme.ctaColor, 0.9);
export const blockBorderRadius = props => props.theme.blockBorderRadius;
export const blockBackground = props => props.theme.blockBackgroundColor;

//SliderStyles
export const sliderCircle = props => rgba(props.theme.ctaColor, 1);

//Overlay
export const overlayBackground = props => rgba(props.theme.bgColor, 0.8);
