export const appTransitions = [
	{
		name: "default",
		properties: {
			enter: "animated",
			enterActive: "bounceIn",
			exit: "animated",
			exitActive: "bounceOut"
		}
	},
	{
		name: "test",
		properties: {
			enter: "animated",
			enterActive: "fadeIn",
			exit: "animated",
			exitActive: "fadeOut"
		}
	},
	{
		name: "test",
		properties: {
			enter: "animated",
			enterActive: "jello",
			exit: "animated",
			exitActive: "zoomOut"
		}
	}
];

// export let defaultAppTheme = {};
// defaultAppTheme = Object.assign(defaultAppTheme, themes[0].properties);
