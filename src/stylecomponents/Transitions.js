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
		name: "fadeInfadeOut",
		properties: {
			enter: "animated",
			enterActive: "fadeIn",
			exit: "animated",
			exitActive: "fadeOut"
		}
	},
	{
		name: "jelloZoomOut",
		properties: {
			enter: "animated",
			enterActive: "jello",
			exit: "animated",
			exitActive: "zoomOut"
		}
	},
	{
		name: "fadeInRightFadeOutRight",
		properties: {
			enter: "animated",
			enterActive: "fadeInRight",
			exit: "animated",
			exitActive: "fadeOutRight"
		}
	},
	{
		name: "rotateInRotateOut",
		properties: {
			enter: "animated",
			enterActive: "rotateIn",
			exit: "animated",
			exitActive: "rotateOut"
		}
	},
	{
		name: "flipInXFlipOutY",
		properties: {
			enter: "animated",
			enterActive: "flipInX",
			exit: "animated",
			exitActive: "flipOutY"
		}
	}
];

// export let defaultAppTheme = {};
// defaultAppTheme = Object.assign(defaultAppTheme, themes[0].properties);
