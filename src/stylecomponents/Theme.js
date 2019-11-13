// blockBorderColor
// pTextColor
// bgColor
// headingColor
// ctaColor
// import { rgba, invert } from "polished";
import {
	defaultTheme,
	snowAgainTheme,
	bigMangoTheme,
	strongBlissTheme,
	newYorkTheme,
	temptingAzureTheme,
	viciousStanceTheme,
	paloAltoTheme,
	nightSkyTheme,
	wildAppleTheme,
	zeusMiracleTheme,
	grownEarlyTheme,
	teenNotebookTheme,
	premiumDarkTheme,
	healthyWaterTheme,
	amourAmourTheme,
	hiddenJaguarTheme,
	orangeJuiceTheme,
	perfectBlueTheme,
	cartographer,
	xVTheme,
	subtleGrungeTheme,
	starDustTheme,
	psNeutralTheme,
	poolTableTheme,
	pinkDustTheme,
	oldMathematicsTheme,
	marsPartyTheme,
	smartIndigoTheme,
	perfectWhiteTheme,
	niceSnowTheme,
	halftoneYellowTheme,
	grungeWallTheme,
	greyFloralTheme,
	cardboardFlatTheme,
	carbonFibreTheme,
	nightPartyTheme,
	loveKissTheme,
	passionateBedTheme,
	partyBlissTheme,
	leCocktailTheme,
	fruitBlendTheme,
	northMiracleTheme,
	sugarLollipopTheme,
	fabledSunsetTheme,
	newRetrowaveTheme,
	deepBlueTheme,
	matrix
} from "./Themes/ThemeFactory";
import {
	themeColorMaker,
	themeStarWars,
	themeNineties
} from "./Themes/ThemeHelpers";
export const themes = [
	{
		name: "white",
		properties: {
			...themeColorMaker()
		},
		type: "color",
		text: "White",
		desc: ""
	},
	{
		name: "starwars",
		properties: {
			...themeStarWars()
		},
		type: "theme",
		text: "Star Wars",
		desc: ""
	},
	{
		name: "nineties",
		properties: {
			...themeNineties()
		},
		type: "theme",
		text: "Nineties",
		desc: ""
	},

	{
		name: "Navy Blazer",
		properties: {
			...themeColorMaker("3B3D4B")
		},
		type: "color",
		text: "Navy Blazer",
		desc: ""
	},
	{
		name: "Ash",
		properties: {
			...themeColorMaker("A09D9C")
		},
		type: "color",
		text: "Ash",
		desc: ""
	},
	{
		name: "Lark",
		properties: {
			...themeColorMaker("B49C73")
		},
		type: "color",
		text: "Lark",
		desc: ""
	},
	{
		name: "Flame Scarlet",
		properties: {
			...themeColorMaker("D13B40")
		},
		type: "color",
		text: "Flame Scarlet",
		desc: ""
	},
	{
		name: "Saffron",
		properties: {
			...themeColorMaker("FFAF12")
		},
		type: "color",
		text: "Saffron",
		desc: ""
	},
	{
		name: "Classic Blue",
		properties: {
			...themeColorMaker("34558B")
		},
		type: "color",
		text: "Classic Blue",
		desc: ""
	},
	{
		name: "Biscay Green",
		properties: {
			...themeColorMaker("4EC5A5")
		},
		type: "color",
		text: "Biscay Green",
		desc: ""
	},
	{
		name: "Chive",
		properties: {
			...themeColorMaker("565D47")
		},
		type: "color",
		text: "Chive",
		desc: ""
	},
	{
		name: "Faded Denim",
		properties: {
			...themeColorMaker("798FA8")
		},
		type: "color",
		text: "Faded Denim",
		desc: ""
	},
	{
		name: "Orange Peel",
		properties: {
			...themeColorMaker("FD823E")
		},
		type: "color",
		text: "Orange Peel",
		desc: ""
	},
	{
		name: "Mosaic Blue",
		properties: {
			...themeColorMaker("117893")
		},
		type: "color",
		text: "Mosaic Blue",
		desc: ""
	},
	{
		name: "Sunlight",
		properties: {
			...themeColorMaker("F0DAA4")
		},
		type: "color",
		text: "Sunlight",
		desc: ""
	},
	{
		name: "Coral Pink",
		properties: {
			...themeColorMaker("EAAC9D")
		},
		type: "color",
		text: "Coral Pink",
		desc: ""
	},

	{
		name: "Cinnamon Stick",
		properties: {
			...themeColorMaker("A2553A")
		},
		type: "color",
		text: "Cinnamon Stick",
		desc: ""
	},
	{
		name: "Grape Compote",
		properties: {
			...themeColorMaker("72617D")
		},
		type: "color",
		text: "Grape Compote",
		desc: ""
	},

	{
		name: "default",
		properties: {
			...defaultTheme
		},
		type: "gradient",
		text: "Plum Bath",
		desc: ""
	},
	{
		name: "matrix",
		properties: {
			...matrix
		},
		type: "theme",
		text: "Matrix",
		desc: ""
	},
	{
		name: "snowAgain",
		properties: {
			...snowAgainTheme
		},
		type: "gradient",
		text: "Snow Again",
		desc: ""
	},
	{
		name: "bigMango",
		properties: {
			...bigMangoTheme
		},
		type: "gradient",
		text: "Big Mango",
		desc: ""
	},
	{
		name: "strongBliss",
		properties: {
			...strongBlissTheme
		},
		type: "gradient",
		text: "Strong Bliss",
		desc: ""
	},
	{
		name: "newYork",
		properties: {
			...newYorkTheme
		},
		type: "gradient",
		text: "New york",
		desc: ""
	},
	{
		name: "temptingAzure",
		properties: {
			...temptingAzureTheme
		},
		type: "gradient",
		text: "Tempting Azure",
		desc: ""
	},
	{
		name: "viciousStance",
		properties: {
			...viciousStanceTheme
		},
		type: "gradient",
		text: "Vicious Stance",
		desc: ""
	},
	{
		name: "paloAlto",
		properties: {
			...paloAltoTheme
		},
		type: "gradient",
		text: "Palo Alto",
		desc: ""
	},
	{
		name: "nightSky",
		properties: {
			...nightSkyTheme
		},
		type: "gradient",
		text: "Night Sky",
		desc: ""
	},
	{
		name: "wildApple",
		properties: {
			...wildAppleTheme
		},
		type: "gradient",
		text: "Wild Apple",
		desc: ""
	},
	{
		name: "zeusMiracle",
		properties: {
			...zeusMiracleTheme
		},
		type: "gradient",
		text: "Zeus Miracle",
		desc: ""
	},
	{
		name: "grownEarly",
		properties: {
			...grownEarlyTheme
		},
		type: "gradient",
		text: "Grown Early",
		desc: ""
	},
	{
		name: "teenNotebook",
		properties: {
			...teenNotebookTheme
		},
		type: "gradient",
		text: "Teen Notebook",
		desc: ""
	},
	{
		name: "premiumDark",
		properties: {
			...premiumDarkTheme
		},
		type: "gradient",
		text: "Premium Dark",
		desc: ""
	},
	{
		name: "marsParty",
		properties: {
			...marsPartyTheme
		},
		type: "gradient",
		text: "Mars Party",
		desc: ""
	},
	{
		name: "healthyWater",
		properties: {
			...healthyWaterTheme
		},
		type: "gradient",
		text: "Healthy Water",
		desc: ""
	},
	{
		name: "amourAmour",
		properties: {
			...amourAmourTheme
		},
		type: "gradient",
		text: "Amour Amour",
		desc: ""
	},
	{
		name: "hiddenJaguar",
		properties: {
			...hiddenJaguarTheme
		},
		type: "gradient",
		text: "Hidden Jaguar",
		desc: ""
	},
	{
		name: "orangeJuice",
		properties: {
			...orangeJuiceTheme
		},
		type: "gradient",
		text: "Orange Juice",
		desc: ""
	},
	{
		name: "smartIndigo",
		properties: {
			...smartIndigoTheme
		},
		type: "gradient",
		text: "Smart Indigo",
		desc: ""
	},
	{
		name: "perfectWhite",
		properties: {
			...perfectWhiteTheme
		},
		type: "gradient",
		text: "Perfect White",
		desc: ""
	},
	{
		name: "perfectBlueTheme",
		properties: {
			...perfectBlueTheme
		},
		type: "gradient",
		text: "Perfect Blue",
		desc: ""
	},
	{
		name: "cartographer",
		properties: {
			...cartographer
		},
		type: "bg",
		text: "Cartographer",
		desc: ""
	},
	{
		name: "xV",
		properties: {
			...xVTheme
		},
		type: "bg",
		text: "XV",
		desc: ""
	},
	{
		name: "subtleGrunge",
		properties: {
			...subtleGrungeTheme
		},
		type: "bg",
		text: "Subtle Grunge",
		desc: ""
	},
	{
		name: "starDust",
		properties: {
			...starDustTheme
		},
		type: "bg",
		text: "Star Dust",
		desc: ""
	},
	{
		name: "psNeutral",
		properties: {
			...psNeutralTheme
		},
		type: "bg",
		text: "Ps Neutral",
		desc: ""
	},
	{
		name: "poolTable",
		properties: {
			...poolTableTheme
		},
		type: "bg",
		text: "Pool Table",
		desc: ""
	},
	{
		name: "pinkDust",
		properties: {
			...pinkDustTheme
		},
		type: "bg",
		text: "Pink Dust",
		desc: ""
	},
	{
		name: "oldMathematics",
		properties: {
			...oldMathematicsTheme
		},
		type: "bg",
		text: "Old Mathematics",
		desc: ""
	},
	{
		name: "niceSnow",
		properties: {
			...niceSnowTheme
		},
		type: "bg",
		text: "Nice Snow",
		desc: ""
	},
	{
		name: "halftoneYellow",
		properties: {
			...halftoneYellowTheme
		},
		type: "bg",
		text: "Halftone Yellow",
		desc: ""
	},
	{
		name: "grungeWall",
		properties: {
			...grungeWallTheme
		},
		type: "bg",
		text: "Grunge Wall",
		desc: ""
	},
	{
		name: "greyFloral",
		properties: {
			...greyFloralTheme
		},
		type: "bg",
		text: "Grey Floral",
		desc: ""
	},
	{
		name: "cardboardFlat",
		properties: {
			...cardboardFlatTheme
		},
		type: "bg",
		text: "Cardboard Flat",
		desc: ""
	},
	{
		name: "carbonFibre",
		properties: {
			...carbonFibreTheme
		},
		type: "bg",
		text: "Carbon Fibre",
		desc: ""
	},
	{
		name: "nightParty",
		properties: {
			...nightPartyTheme
		},
		type: "gradient",
		text: "Night Party",
		desc: ""
	},
	{
		name: "loveKiss",
		properties: {
			...loveKissTheme
		},
		type: "gradient",
		text: "Love Kiss",
		desc: ""
	},
	{
		name: "passionateBed",
		properties: {
			...passionateBedTheme
		},
		type: "gradient",
		text: "Passionate Bed",
		desc: ""
	},
	{
		name: "partyBliss",
		properties: {
			...partyBlissTheme
		},
		type: "gradient",
		text: "Party Bliss",
		desc: ""
	},
	{
		name: "leCocktail",
		properties: {
			...leCocktailTheme
		},
		type: "gradient",
		text: "Le Cocktail",
		desc: ""
	},
	{
		name: "fruitBlend",
		properties: {
			...fruitBlendTheme
		},
		type: "gradient",
		text: "Fruit Blend",
		desc: ""
	},
	{
		name: "northMiracle",
		properties: {
			...northMiracleTheme
		},
		type: "gradient",
		text: "North Miracle",
		desc: ""
	},
	{
		name: "sugarLollipop",
		properties: {
			...sugarLollipopTheme
		},
		type: "gradient",
		text: "Sugar Lollipop",
		desc: ""
	},
	{
		name: "fabledSunset",
		properties: {
			...fabledSunsetTheme
		},
		type: "gradient",
		text: "Fabled Sunset",
		desc: ""
	},
	{
		name: "newRetrowave",
		properties: {
			...newRetrowaveTheme
		},
		type: "gradient",
		text: "New Retrowave",
		desc: ""
	},
	{
		name: "deepBlueTheme",
		properties: {
			...deepBlueTheme
		},
		type: "gradient",
		text: "Deep Blue",
		desc: ""
	}
];

export let defaultAppTheme = {};
defaultAppTheme = Object.assign(defaultAppTheme, themes[0].properties);
