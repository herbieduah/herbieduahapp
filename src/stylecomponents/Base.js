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
		}

    .Resizer {
	background: #000;
	opacity: 0.2;
	z-index: 1;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	-moz-background-clip: padding;
	-webkit-background-clip: padding;
	background-clip: padding-box;
}

.Resizer:hover {
	-webkit-transition: all 2s ease;
	transition: all 2s ease;
}

.Resizer.horizontal {
	height: 11px;
	margin: -5px 0;
	border-top: 5px solid rgba(255, 255, 255, 0);
	border-bottom: 5px solid rgba(255, 255, 255, 0);
	cursor: row-resize;
	width: 100%;
	background-color: red;
}

.Resizer.horizontal:hover {
	border-top: 5px solid rgba(0, 0, 0, 0.5);
	border-bottom: 5px solid rgba(0, 0, 0, 0.5);
	background-color: red;
}

.Resizer.vertical {
	width: 11px;
	margin: 0 -5px;
	border-left: 5px solid rgba(255, 255, 255, 0);
	border-right: 5px solid rgba(255, 255, 255, 0);
	cursor: col-resize;
	background-color: red;
}

.Resizer.vertical:hover {
	border-left: 5px solid rgba(0, 0, 0, 0.5);
	border-right: 5px solid rgba(0, 0, 0, 0.5);
}
.Resizer.disabled {
	cursor: not-allowed;
}
.Resizer.disabled:hover {
	border-color: transparent;
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
