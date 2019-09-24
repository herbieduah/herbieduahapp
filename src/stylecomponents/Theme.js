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
	snapchat,
	matrix
} from "./Themes/ThemeFactory";
import { themeColorMaker } from "./Themes/ThemeHelpers";
export const themes = [
	{
		name: "white",
		properties: {
			...themeColorMaker()
		},
		type: "color",
		text: "",
		desc: ""
	},
	// {
	// 	name: "Color-F7F7F8-000000",
	// 	properties: {
	// 		...themeColorMaker("Color-F7F7F8-000000")
	// 	},
	// 	type: "color",
	// 	text: "",
	// 	desc: ""
	// },
	{
		name: "Color-000000-F7F7F8",
		properties: {
			...themeColorMaker("Color-000000-F7F7F8")
		},
		type: "color",
		text: "",
		desc: ""
	},
	{
		name: "Color-FFFC00-1D1F20",
		properties: {
			...themeColorMaker("Color-FFFC00-1D1F20")
		},
		type: "color",
		text: "",
		desc: ""
	},
	{
		name: "Color-1D1F20-FFFC00",
		properties: {
			...themeColorMaker("Color-1D1F20-FFFC00")
		},
		type: "color",
		text: "",
		desc: ""
	},
	{
		name: "Color-F8C296-341A04",
		properties: {
			...themeColorMaker("Color-F8C296-341A04")
		},
		type: "color",
		text: "",
		desc: ""
	},
	{
		name: "Color-341A04-F8C296",
		properties: {
			...themeColorMaker("Color-341A04-F8C296")
		},
		type: "color",
		text: "",
		desc: ""
	},
	{
		name: "Color-FDF1E7-4A00A0",
		properties: {
			...themeColorMaker("Color-FDF1E7-4A00A0")
		},
		type: "color",
		text: "",
		desc: ""
	},
	{
		name: "Color-4A00A0-FDF1E7",
		properties: {
			...themeColorMaker("Color-4A00A0-FDF1E7")
		},
		type: "color",
		text: "",
		desc: ""
	},
	{
		name: "Color-EFF8F3-1C422B",
		properties: {
			...themeColorMaker("Color-EFF8F3-1C422B")
		},
		type: "color",
		text: "",
		desc: ""
	},
	{
		name: "Color-1C422B-EFF8F3",
		properties: {
			...themeColorMaker("Color-1C422B-EFF8F3")
		},
		type: "color",
		text: "",
		desc: ""
	},
	{
		name: "Color-F7F7F8-711423",
		properties: {
			...themeColorMaker("Color-F7F7F8-711423")
		},
		type: "color",
		text: "",
		desc: ""
	},
	{
		name: "Color-711423-F7F7F8",
		properties: {
			...themeColorMaker("Color-711423-F7F7F8")
		},
		type: "color",
		text: "",
		desc: ""
	},
	{
		name: "Color-F3BAC3-430C15",
		properties: {
			...themeColorMaker("Color-F3BAC3-430C15")
		},
		type: "color",
		text: "",
		desc: ""
	},
	{
		name: "Color-430C15-F3BAC3",
		properties: {
			...themeColorMaker("Color-430C15-F3BAC3")
		},
		type: "color",
		text: "",
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
		name: "snapchat",
		properties: {
			...snapchat
		},
		type: "theme",
		text: "Snapchat",
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
