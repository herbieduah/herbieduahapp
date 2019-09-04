export const appTransitions = [
	{
		name: "default",
		properties: {
			enter: "animated",
			enterActive: "zoomIn",
			exit: "animated",
			exitActive: "zoomOut"
		}
	},
	{
		name: "bounceInbounceOut",
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
	},
	{
		name: "slideInLeftslideOutLeft",
		properties: {
			enter: "animated",
			enterActive: "slideInLeft",
			exit: "animated",
			exitActive: "slideOutLeft"
		}
	},
	{
		name: "rotateOutrotateIn",
		properties: {
			enter: "animated",
			enterActive: "rotateIn",
			exit: "animated",
			exitActive: "rotateOut"
		}
	},
	{
		name: "fadeInDownfadeOutDown",
		properties: {
			enter: "animated",
			enterActive: "fadeInDown",
			exit: "animated",
			exitActive: "fadeOutDown"
		}
	},
	{
		name: "slideInDownslideOutDown",
		properties: {
			enter: "animated",
			enterActive: "slideInDown",
			exit: "animated",
			exitActive: "slideOutDown"
		}
	},
	{
		name: "fadeInUpfadeOutUp",
		properties: {
			enter: "animated",
			enterActive: "fadeInUp",
			exit: "animated",
			exitActive: "fadeOutUp"
		}
	}
];

// export let defaultAppTheme = {};
// defaultAppTheme = Object.assign(defaultAppTheme, themes[0].properties);
