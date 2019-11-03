export const appTransitions = [
	{
		name: "default",
		type: "smooth",
		properties: {
			enter: "animated",
			enterActive: "fadeInUp",
			exit: "animated",
			exitActive: "fadeOutUp"
		}
	},
	{
		name: "zoomInzoomOut",
		type: "smooth",
		properties: {
			enter: "animated",
			enterActive: "zoomIn",
			exit: "animated",
			exitActive: "zoomOut"
		}
	},
	{
		name: "bounceInbounceOut",
		type: "crazy",
		properties: {
			enter: "animated",
			enterActive: "bounceIn",
			exit: "animated",
			exitActive: "bounceOut"
		}
	},
	{
		name: "fadeInfadeOut",
		type: "smooth",
		properties: {
			enter: "animated",
			enterActive: "fadeIn",
			exit: "animated",
			exitActive: "fadeOut"
		}
	},
	{
		name: "jelloZoomOut",
		type: "crazy",
		properties: {
			enter: "animated",
			enterActive: "jello",
			exit: "animated",
			exitActive: "zoomOut"
		}
	},
	{
		name: "fadeInRightFadeOutRight",
		type: "smooth",
		properties: {
			enter: "animated",
			enterActive: "fadeInRight",
			exit: "animated",
			exitActive: "fadeOutRight"
		}
	},
	{
		name: "rotateInRotateOut",
		type: "crazy",
		properties: {
			enter: "animated",
			enterActive: "rotateIn",
			exit: "animated",
			exitActive: "rotateOut"
		}
	},
	{
		name: "flipInYFlipOutY",
		type: "crazy",
		properties: {
			enter: "animated",
			enterActive: "flipInY",
			exit: "animated",
			exitActive: "flipOutY"
		}
	},
	{
		name: "fadeInLeftfadeOutRight",
		type: "smooth",
		properties: {
			enter: "animated",
			enterActive: "fadeInLeft",
			exit: "animated",
			exitActive: "fadeOutRight"
		}
	},
	{
		name: "slideInLeftslideOutLeft",
		type: "smooth",
		properties: {
			enter: "animated",
			enterActive: "slideInLeft",
			exit: "animated",
			exitActive: "slideOutLeft"
		}
	},
	{
		name: "rotateOutrotateIn",
		type: "crazy",
		properties: {
			enter: "animated",
			enterActive: "rotateIn",
			exit: "animated",
			exitActive: "rotateOut"
		}
	},
	{
		name: "fadeInDownfadeOutDown",
		type: "smooth",
		properties: {
			enter: "animated",
			enterActive: "fadeInDown",
			exit: "animated",
			exitActive: "fadeOutDown"
		}
	},
	{
		name: "slideInDownslideOutDown",
		type: "smooth",
		properties: {
			enter: "animated",
			enterActive: "slideInDown",
			exit: "animated",
			exitActive: "slideOutDown"
		}
	},

	{
		name: "bounceInDownbounceOutDown",
		type: "crazy",
		properties: {
			enter: "animated",
			enterActive: "bounceInDown",
			exit: "animated",
			exitActive: "bounceOutDown"
		}
	},
	{
		name: "lightSpeedInlightSpeedOut",
		type: "smooth",
		properties: {
			enter: "animated",
			enterActive: "lightSpeedIn",
			exit: "animated",
			exitActive: "lightSpeedOut"
		}
	},
	{
		name: "flipInXFlipOutX",
		type: "crazy",
		properties: {
			enter: "animated",
			enterActive: "flipInX",
			exit: "animated",
			exitActive: "flipOutX"
		}
	},
	{
		name: "slideInLeftslideOutRight",
		type: "smooth",
		properties: {
			enter: "animated",
			enterActive: "slideInLeft",
			exit: "animated",
			exitActive: "slideOutRight"
		}
	},
	{
		name: "rollInrollOut",
		type: "crazy",
		properties: {
			enter: "animated",
			enterActive: "rollIn",
			exit: "animated",
			exitActive: "rollOut"
		}
	},
	{
		name: "zoomInDownzoomInUp",
		type: "crazy",
		properties: {
			enter: "animated",
			enterActive: "zoomInUp",
			exit: "animated",
			exitActive: "zoomInDown"
		}
	},
	{
		name: "hingeJackInTheBox",
		type: "crazy",
		properties: {
			enter: "animated",
			enterActive: "hinge",
			exit: "animated",
			exitActive: "jackInTheBox"
		}
	}
];

// export let defaultAppTheme = {};
// defaultAppTheme = Object.assign(defaultAppTheme, themes[0].properties);
