// blockBorderColor
// pTextColor
// bgColor
// headingColor
// ctaColor
export const themes = [
	{
		name: "default",
		properties: {
			bgColor: "#c2292b",
			fontColor: "#bbd1e8",
			gradient1: "",
			gradient2: "",
			headingColor: "#000000",
			ctaColor: "#bbd1e8"
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
