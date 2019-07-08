import { themeMaker } from "./ThemeHelpers";
const blackText = "#000000";
const whiteText = `#ffffff`;

export const defaultTheme = themeMaker();

// background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
const snowAgain = {
	fontColor: blackText,
	fontColorSecondary: blackText,
	bgColor: "#e6e9f0",
	bgColorSecondary: "#eef1f5",
	gradientValues: "#e6e9f0 0%, #eef1f5 100%"
};
export const snowAgainTheme = themeMaker(snowAgain);
