// blockBorderColor
// pTextColor
// bgColor
// headingColor
// ctaColor
import { rgba, invert } from "polished";
export const themes = [
	{
		name: "default",
		properties: {
			bgColor: `${rgba("#6713d2", 0.9)}`,
			bgColorGradient: "linear-gradient(to top, #cc208e 0%, #6713d2 100%);",
			fontColor: "#ffffff",
			gradient1: "",
			gradient2: "",
			headingColor: "#ffffff",
			ctaColor: "#ffffff",
			fullScreenBG: `${invert("#6713d2")}`,
			appFontImport: `url("https://use.typekit.net/zzt6omx.css")`
		}
	},
	{
		name: "lightmode",
		properties: {
			bgColor: "#FFFFFF",
			fontColor: "#000000",
			blockBorderColor: "#111111",
			headingColor: "#000000",
			blockBackgroundColor: "#eeeeee"
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
