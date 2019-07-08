// blockBorderColor
// pTextColor
// bgColor
// headingColor
// ctaColor
import { rgba, invert } from "polished";
import { defaultTheme, snowAgainTheme } from "./Themes/ThemeFactory";
export const themes = [
	{
		name: "default",
		properties: {
			...snowAgainTheme
		}
	},
	{
		name: "snowAgain",
		properties: {
			...snowAgainTheme
		}
	},
	{
		name: "darkmode",
		properties: {
			bgColor: "#111111",
			fontColor: "#FFFFFF",
			blockBorderColor: "#FFFFFF",
			headingColor: "#FFFFFF",
			blockBackgroundColor: "#242424"
		}
	},
	{
		name: "blue",
		properties: {
			ctaColor: "#304ffe"
		}
	},
	{
		name: "red",
		properties: {
			ctaColor: "#d50000"
		}
	},
	{
		name: "circle",
		properties: {
			blockBorderRadius: "50%"
		}
	}
];

export let defaultAppTheme = {};
defaultAppTheme = Object.assign(defaultAppTheme, themes[0].properties);
