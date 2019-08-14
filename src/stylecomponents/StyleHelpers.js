import { rgba, stripUnit, lighten } from "polished";
import { sliderMobileWidth, revealSecs } from "../helpers";
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
	} else {
		finalFontSize = `font-size: 16px`;
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
export const tablet =
	"@media screen and (max-width: 1024px) and (min-width: 768px)";
export const mobileHorizontal = "@media only screen and (max-width: 1200px)";
export const hideScrollbar = `-ms-overflow-style: none;  
scrollbar-width: none;
&::-webkit-scrollbar { 
	display: none; 
}`;
export const slightBoxShadowAbove =
	"box-shadow: 0 -3px 15px rgba(0,0,0,0.10), 0 -3px 15px rgba(0,0,0,0.18);";
export const slightBoxShadowBelow =
	"box-shadow: 0 3px 15px rgba(0,0,0,0.10), 0 3px 15px rgba(0,0,0,0.18);";
export const slightCircleBoxShadow =
	"box-shadow: 0 3px 15px rgba(0,0,0,0.10), 0 3px 15px rgba(0,0,0,0.18);";

export const absoluteOverlay =
	"position: absolute;width: 100%;height: 100%;top: 0;left: 0;right: 0;bottom: 0;";

export const mobileSliderOnTop = `height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 1;
position: absolute;
`;
export const mobileSliderOnBottom = `height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 1;
position: absolute;
`;

export const stupidNegativeMargin = `margin-top:${sliderMobileWidth /
	2}px!important`;
export const paddingLR = `padding: 0 20px ;
${mobile} {
	padding: 0 1rem ;
}`;

export const paddingLRMed = `padding: 0 20%;
${mobile} {
	padding: 0 15% ;
}`;

export const paddingLRLarge = `padding: 0 25% ;
${mobile} {
	padding: 0 20% ;
}`;

export const marginLRMed = `margin: 0 20%;
${mobile} {
	margin: 0 15% ;
}`;

export const marginLRLarge = `margin: 0 25% ;
${mobile} {
	margin: 0 20% ;
}`;

export const paddingTB = `padding: 20px 0px ;
${mobile} {
	padding: 1rem 0;
}`;

export const marginLR = `margin: 0 20px ;
${mobile} {
	margin: 0 1rem ;
}`;
export const fiftyPixels = "3.47vw";
export const navBarSize = "2.5rem";
export const contentMenuPadding = `padding: ${navBarSize};
${mobile} {
	padding: ${navBarSize} 0 ${navBarSize}   ${navBarSize};
}`;
export const contentMenuPaddingRight = `padding: ${navBarSize};
${mobile} {
	padding: ${navBarSize} ${navBarSize}  ${navBarSize}   0;
}`;

export const contentMenuMargin = `margin: ${navBarSize};
${mobile} {
	margin: 0;
}`;
export const contentMenuMarginRight = `margin: ${navBarSize};
${mobile} {
	margin: 0;
}`;

export const container = `
max-width: 740px;
			width: 100%;
			margin: 0 auto;
`;

export const showMore = props => props.appValues.isShowingMore;
export const appGradient = props => rgba(props.theme.bgColor, 0.0);
export const appColor = props => props.theme.bgColor;
export const ctaColor = props => props.theme.ctaColor;
export const bgColor = props => props.theme.bgColor;
export const bgColorGradient = props => props.theme.bgColorGradient;
export const fontColor = props => props.theme.fontColor;
export const mainTransition = `transition: all ${revealSecs /
	2}ms ease-in-out;`;
export const buttonColor = props => props.theme.fontColor;
// lighten(0.17, props.theme.fontColor);
export const buttonColorHover = props => props.theme.fontColor;
export const buttonColorActive = props => props.theme.fontColor;
export const buttonBorderColor = props => rgba(props.theme.fontColor, 0.75);
export const buttonBorderColorActive = props =>
	lighten(0.15, props.theme.fontColor);
export const linkColor = props => props.theme.fontColor;
export const linkColorHover = props => props.theme.fontColor;
export const linkColorActive = props => props.theme.fontColor;
export const linkBorderColor = props => rgba(props.theme.fontColor, 0.3);
export const linkBorderColorActive = props => props.theme.fontColor;

export const navColor = props => rgba(props.theme.fontColor, 0.6);
export const navColorHover = props => props.theme.fontColor;
export const navColorActive = props => props.theme.fontColor;
export const navBorderColor = props => rgba(props.theme.fontColor, 0.5);
export const navBorderColorActive = props => props.theme.bgColor;

//BlockStyle.js
export const sliderCircleShadow = props => rgba(props.theme.bgColor, 0.5);
export const blockBorderColorHover = props => rgba(props.theme.ctaColor, 0.9);
export const blockBorderRadius = props => props.theme.blockBorderRadius;
export const blockBackground = props => props.theme.blockBackgroundColor;

//SliderStyles
export const sliderCircle = props => rgba(props.theme.ctaColor, 1);

//Overlay
export const overlayBackground = props => rgba(props.theme.bgColor, 0.8);

export const niceShadow = `
&:before {
	content: "";
	width: 100%;
	max-width: 100%;
	height: 0;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	z-index: 10;
	pointer-events: none;
	box-shadow: 0 0 3rem 3rem ${bgColor}, 0 0 2rem 2rem ${bgColor};
}`;
