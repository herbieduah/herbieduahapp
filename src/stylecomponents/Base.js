import styled, { createGlobalStyle } from "styled-components";
import { rgba } from "polished";
// import { Gradients } from "./Animations";
import {
	mobile,
	absoluteOverlay,
	overlayBackground,
	bgColor,
	fontColor,
	mainTransition

	// fluidTypeInfo,
	// ctaColor,
	// iconWidth
} from "./StyleHelpers";

export const GlobalStyle = createGlobalStyle`
  html {
	box-sizing: border-box;
	
}
*, *:before, *:after {
  box-sizing: inherit;
}

  body {
    /* @import url('https://fonts.googleapis.com/css?family=Roboto'); */
		/* overflow: hidden; */
		position: fixed;
		width: 100%;
		height: 100%;
		overscroll-behavior: contain;
		@import url("https://use.typekit.net/zzt6omx.css");
		font-family: 'commuters-sans',-apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		button {
			font-family: 'commuters-sans',-apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		}
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
		/* position: relative; */
		.sizer {
			${absoluteOverlay};
			height: 20vh;
		}
		#root {
			width: 100%;
			height:100%;
		}
		button:focus {
			outline: 0;
		}

	
		.instructions {
			${absoluteOverlay};
			/* height: 100%; */
			display: flex;
			margin-top: 4rem;
			justify-content: center;
			z-index: 10;
			&__text {
			${mainTransition}
			color: ${bgColor};
			background: ${fontColor};
			${props => `box-shadow: 0 0 40px ${rgba(props.theme.bgColor, 0.6)};`}
			padding: .5rem 1rem;
			display: inline-block;
			font-size: 1rem;
			border-radius: 2rem;
			${mobile} {
				margin-top: 2rem;	
			}
		}
		}

  }
  
`;

export const Overlay = styled.div`
  ${absoluteOverlay}
  background-color: ${overlayBackground};
  z-index: 10;
`;

// export function imgLoad(width, height) {
// 	return `${(height / width) * 100}%`;
// }

export const Image = styled.img`
	width: 100%;
`;

export const HerbieDuahApp = styled.div`
	/* height: 90%; */

	width: 100%;
	content: "";
	overflow: hidden;
	background-color: ${bgColor};
	position: relative;
	margin: 0;
	height: 100%;
	/* ${mobile} {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-bottom: 3px solid red;
		z-index: 10;
	} */
	${props => {
		if (props.isMobile) {
			return `
				position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-bottom: 3px solid red;
		z-index: 10;`;
		}
	}}
	

	.container {
		max-width: 740px;
		width: 100%;
		margin: 0 auto;
	}
	.container-full {
		width: 100%;
	}
	.col-50 {
		width: 50%;
		${mobile} {
			width: 100%;
		}
	}
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
		${props =>
			props.dragging
				? ""
				: `box-shadow: 0 0 3rem 3rem ${bgColor}, 0 0 2rem 2rem ${bgColor};`}
		${mobile} {
			${props =>
				props.dragging
					? `box-shadow: 0 0 2rem 2rem ${bgColor}, 0 0 1rem 1rem ${bgColor};`
					: ""}
		}
	}
	&:after {
		content: "";
		width: 100%;
		max-width: 100%;
		height: 0;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		pointer-events: none;
		
		${props =>
			props.dragging
				? ""
				: `box-shadow: 0 0 100px 100px ${bgColor}, 0 0 50px 50px ${bgColor};`}
		${mobile} {
			${props =>
				props.dragging
					? `box-shadow: 0 50px 50px ${bgColor}, 0 0 25px 25px ${bgColor};`
					: ""}
		}
	}
`;
