import { themeMaker } from "./ThemeHelpers";
const blackText = "#000000";
const whiteText = `#ffffff`;

export const defaultTheme = themeMaker();

//snowAgain
// background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
const snowAgain = {
	fontColor: blackText,
	fontColorSecondary: blackText,
	bgColor: "#e6e9f0",
	bgColorSecondary: "#eef1f5",
	gradientValues: "#e6e9f0 0%, #eef1f5 100%"
};
export const snowAgainTheme = themeMaker(snowAgain);

//desert hump
//background-image: linear-gradient(to top, #c79081 0%, #dfa579 100%);
const desertHump = {
	fontColor: whiteText,
	fontColorSecondary: whiteText,
	bgColor: "#c79081",
	bgColorSecondary: "#dfa579",
	gradientValues: "#c79081 0%, #dfa579 100%"
};
export const desertHumpTheme = themeMaker(desertHump);

//big mango
//background-image: linear-gradient(to top, #c71d6f 0%, #d09693 100%);
const bigMango = {
	fontColor: whiteText,
	fontColorSecondary: whiteText,
	bgColor: "#c71d6f",
	bgColorSecondary: "#d09693",
	gradientValues: "#c71d6f 0%, #d09693 100%"
};
export const bigMangoTheme = themeMaker(bigMango);

// strong bliss
//background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
const strongBliss = {
	fontColor: whiteText,
	fontColorSecondary: whiteText,
	bgColor: "#f78ca0",
	bgColorSecondary: "#fe9a8b",
	gradientValues: "#f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%"
};
export const strongBlissTheme = themeMaker(strongBliss);

//new york
//background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
const newYork = {
	fontColor: blackText,
	fontColorSecondary: blackText,
	bgColor: "#fff1eb",
	bgColorSecondary: "#ace0f9",
	gradientValues: "#fff1eb 0%, #ace0f9 100%"
};
export const newYorkTheme = themeMaker(newYork);

//tempting azure
//background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
const temptingAzure = {
	fontColor: blackText,
	fontColorSecondary: blackText,
	bgColor: "#84fab0",
	bgColorSecondary: "#8fd3f4",
	gradientValues: "#84fab0 0%, #8fd3f4 100%"
};
export const temptingAzureTheme = themeMaker(temptingAzure);

//vicious stance
//background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
const viciousStance = {
	fontColor: whiteText,
	fontColorSecondary: whiteText,
	bgColor: "#29323c",
	bgColorSecondary: "#485563",
	gradientValues: "#29323c 0%, #485563 100%"
};
export const viciousStanceTheme = themeMaker(viciousStance);
