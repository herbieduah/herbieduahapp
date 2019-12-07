import { stripUnit } from "polished";
import { bgColor, colorLight } from "./Themes/ThemeVariables";
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
export const containerLargePx = `1440px`;
export const maxContentWidth = `600px`;
export const mobile = "@media only screen and (max-width: 540px)";
export const mobileSm = "@media only screen and (max-width: 340px)";
export const tablet =
	"@media screen and (max-width: 1200px) and (min-width: 768px)";
export const mobileHorizontal = "@media only screen and (max-width: 1200px)";
export const removeNegativeMargin =
	"@media only screen and (min-width: 1240px)";
export const hideScrollbar = `-ms-overflow-style: none;  
scrollbar-width: none;
&::-webkit-scrollbar { 
	display: none; 
}`;

export const crossOut = `
width: 100%;
position: absolute;
right: 0;
top: 50%;
${mobile}{
	top: 50.5%;
}
`;
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

export const starWarsPerspective = `transform: perspective(200px) rotateX(10deg);
${tablet} {
	transform: perspective(0) rotateX(0);
}
${mobile} {
	transform: perspective(0) rotateX(0);
}`;
export const stupidNegativeMargin = `margin-top:${sliderMobileWidth /
	2}px!important`;
export const paddingLRSm = `
padding-right: 20px;
padding-left: 20px;
${mobile} {
	padding-right: 1rem;
padding-left: 1rem;
}`;
export const paddingLRSmNav = `
padding-right: 30px;
padding-left: 30px;
${mobile} {
	padding-right: 1rem;
padding-left: 1rem;
}`;

export const paddingLRMed = `
padding-left: 15%;
padding-right: 15%;
${mobile} {
	padding-left: 10%;
padding-right: 10%;
}`;

export const paddingLRParagraph = `
padding-left: 20px;
padding-right: 20px;
${mobile} {
	padding-right: 1rem;
padding-left: 1rem;
}`;

// export const paddingLRSm = `
// padding-left: 10%;
// padding-right: 10%;
// ${mobile} {
// 	padding-left: 5%;
// padding-right: 5%;
// }`;

export const paddingLRLarge = `
padding-left: 20%;
padding-right: 20%;
${mobile} {
	padding-left: 15%;
padding-right: 15%;
}`;

export const marginLRMed = `
margin-left: 20%;
margin-right: 20%; 
${mobile} {
	margin-left: 15%;
margin-right: 15%; 
}`;

export const marginLRLarge = `
margin-left: 25%;
margin-right: 25%;
${mobile} {
	margin-left: 20%;
	margin-right: 20%;
}`;

export const paddingTBSm = `
padding-top: 20px;
padding-bottom: 20px;
${mobile} {
	padding-top: 1rem;
padding-bottom: 1rem;
}`;

export const marginLRSm = `
margin-left: 20px;
margin-right: 20px;

${mobile} {
	margin-left: 1rem;
margin-right: 1rem;
}`;
export const fiftyPixels = "3.47vw";
export const navBarSize = "2rem";
export const contentMenuPadding = `padding: ${navBarSize};
${mobile} {
	padding: ${navBarSize} 0 ${navBarSize}   ${navBarSize};
}`;
export const contentMenuPaddingRight = `padding: ${navBarSize};
${mobile} {
	padding: ${navBarSize} ${navBarSize}  ${navBarSize}   0;
}`;

export const contentMenuMargin = `margin: ${navBarSize} 0;
${mobile} {
	margin: 0;
}`;
export const contentMenuMarginRight = `margin: ${navBarSize} 0;
${mobile} {
	margin: 0;
}`;

export const marginBottomLarge = `margin-bottom: 5rem;
${mobile} {
	margin-bottom: 3.5rem;
}`;

export const paddingBottomLarge = `padding-bottom: 5rem !important;
${mobile} {
	padding-bottom: 3.5rem!important;
}`;
export const cPaddingTop = `padding-top: 5rem !important;
${mobile} {
	padding-top: 3.5rem!important;
}`;

export const paddingBottomMed = `padding-bottom: 4rem;
${mobile} {
	padding-bottom: 1.5rem;
}`;

export const cPaddingTopMed = `padding-top: 2rem;
${mobile} {
	padding-top: 2.5rem;
}`;

export const marginBottomMed = `margin-bottom: 2rem;
${mobile} {
	margin-bottom: 1.5rem;
}
`;
export const marginTopMed = `margin-top 3rem;
${mobile} {
	margin-top: 2rem;
}
`;

export const marginTopSm = `margin-top: 1.5rem;
${mobile} {
	margin-top: 1rem;
}
`;

export const stripButtonStyle = `
button {
    -webkit-appearance: none;
    -moz-appearance: none;
}

button:focus {
    outline-offset: -4px;
}

button:active {
    transform: scale(0.99);
}`;

export const marginBottomSm = `margin-bottom: 1.5rem;
${mobile} {
	margin-bottom: 1rem;
}
`;

export const paddingBottomSm = `padding-bottom: 1.25rem;
${mobile} {
	padding-bottom: .75rem;
}
`;

export const paddingTopSm = `padding-top: 1.25rem;
${mobile}{
	padding-top: .75rem;
}`;

export const marginTopLarge = `
margin-top: 5.5rem;
		${mobile} {
			margin-top: 4rem;
		}
`;
export const marginTopXLarge = `
margin-top: 6rem;
		${mobile} {
			margin-top: 4.5rem;
		}
`;

export const paddingTopXLarge = `
padding-top: 6rem;
		${mobile} {
			padding-top: 4.5rem !important;
		}
`;
export const marginBottomXLarge = `
margin-bottom: 6rem;
		${mobile} {
			margin-bottom: 4.5rem;
		}
`;

export const halyardDisplay = `
font-weight: 200;`;

export const container = `
max-width: 540px;
			width: 100%;
			margin: 0 auto;
`;

export const userSelectNone = `
${mobile} {
	user-select: none;
}`;
export const mainTransition = `transition: all ${revealSecs / 2}ms;`;

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

export const appMarginsAndPaddings = `
.noPadding {
	padding: 0;
}
.paddingLRSm {
	${paddingLRSm}
}
.paddingLRMed {
	${paddingLRMed}
}
.paddingLRLarge {
	${paddingLRLarge}
}
.paddingTBSm {
	${paddingTBSm}
}
.paddingBottomSm {
	${paddingBottomSm}
}
.paddingTopSm {
	${paddingTopSm}
}

.paddingBottomMed {
	${paddingBottomMed}
}
.paddingBottomLarge{
	${paddingBottomLarge}
}
.marginLRSm {
	${marginLRSm}
}
.marginLRMed {
	${marginLRMed}
}
.marginLRLarge {
	${marginLRLarge}
}
.marginBottomLarge {
	${marginBottomLarge} 
} 
.marginBottomSm {
	${marginBottomSm}
}
.marginTopXLarge {
	${marginTopXLarge}
}
.marginBottomXLarge {
	${marginBottomXLarge}
}

.marginBottomMed {
	${marginBottomMed}
}
.marginTopLarge {
	${marginTopLarge}
}
.marginTopSm{
	${marginTopSm}
}
.marginTopMed {
	${marginTopMed}
}
.noMargin {
	margin: 0;
}
.pos-rel {
	position: relative;
}
.text-center {
	text-align: center;
}
.justify-center {
	justify-content: center;
}
.display-block {
	display-block;
}
.letter-space-1 {
	letter-spacing: 1px;
}
.paddingLRParagraph {
	${paddingLRParagraph}
}


`;
