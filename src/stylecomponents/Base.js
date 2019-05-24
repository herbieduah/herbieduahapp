import { createGlobalStyle } from "styled-components";

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
}

.Resizer.horizontal:hover {
	border-top: 5px solid rgba(0, 0, 0, 0.5);
	border-bottom: 5px solid rgba(0, 0, 0, 0.5);
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
