import styled, { createGlobalStyle } from "styled-components";
// import { Gradients } from "./Animations";
import {
	mobile,
	absoluteOverlay,
	overlayBackground
	// fiftyPixels,
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
    @import url("https://use.typekit.net/pzp7uyf.css");
    font-family: 'basic-sans',-apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* overflow: hidden; */
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
		/* position: relative; */
		.sizer {
			${absoluteOverlay};
			height: 20vh;
		}

  }
  
`;

export const Overlay = styled.div`
  ${absoluteOverlay}
  background-color: ${overlayBackground};
  z-index: 10;
`;

export function imgLoad(width, height) {
	return `${(height / width) * 100}%`;
}

export const Image = styled.img`
	${props =>
		props.loaded
			? `opacity: 0;transition: all .3s cubic-bezier(0.23, 1, 0.32, 1) 1;
position: relative;
opacity: 1;`
			: `width: 100%;
padding-bottom: ${props =>
					props.width ? imgLoad(props.width, props.height) : "auto"};`};
`;

export const HerbieDuahApp = styled.div`
	/* height: 90%; */
	width: 100%;
	content: "";
	overflow: hidden;
	/* background-color: aquamarine; */
	position: relative;
	margin: 0;
	height: 100vh;
	${mobile} {
		/* height: 84vh;
    margin-top: 0.3rem;
    position: fixed;
    border-bottom: 3px solid aquamarine;
    overflow: hidden; */
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-bottom: 3px solid red;
		z-index: 10;
	}

	.menu-button {
		position: absolute;
		bottom: 0;
		left: 90%;
		right: 0;
		top: 10%;
		z-index: 100;
		font-size: 2em;
	}
`;
