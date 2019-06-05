import { rgba, stripUnit, lighten } from "polished";
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
const minVW = `320px`;
const maxVW = `1200px`;
const minFontSize = `16px`;
const maxFontSize = `24px`;
export const sliderWidth = "3.4rem";
export const sliderHeight = "2rem";
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
export const bgColor = props => props.theme.bgColor;
export const fontColor = props => props.theme.fontColor;
export const mainTransition = "transition: all .2s ease-in-out;";
export const buttonColor = props => rgba(props.theme.fontColor, 0.75);
// lighten(0.17, props.theme.fontColor);
export const buttonColorHover = props => props.theme.fontColor;
export const buttonColorActive = props => props.theme.fontColor;
export const buttonBorderColor = props => rgba(props.theme.fontColor, 0.75);
export const buttonBorderColorActive = props =>
	lighten(0.15, props.theme.fontColor);
export const linkColor = props => props.theme.fontColor;
export const linkColorHover = props => props.theme.fontColor;
export const linkColorActive = props => props.theme.fontColor;
export const linkBorderColor = props => props.theme.fontColor;
export const linkBorderColorActive = props => props.theme.fontColor;

//BlockStyle.js
export const sliderCircleShadow = props => rgba(props.theme.bgColor, 0.5);
export const blockBorderColorHover = props => rgba(props.theme.ctaColor, 0.9);
export const blockBorderRadius = props => props.theme.blockBorderRadius;
export const blockBackground = props => props.theme.blockBackgroundColor;

//SliderStyles
export const sliderCircle = props => rgba(props.theme.ctaColor, 1);

//Overlay
export const overlayBackground = props => rgba(props.theme.bgColor, 0.8);
