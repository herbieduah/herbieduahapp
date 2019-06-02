import styled, { createGlobalStyle } from "styled-components";
// import { Gradients } from "./Animations";
import {
	mobile,
	absoluteOverlay,
	overlayBackground,
	bgColor
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
`;
