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
	viciousStanceTheme
} from "./Themes/ThemeFactory";
export const themes = [
	{
		name: "default",
		properties: {
			...defaultTheme
		},
		type: "gradient"
	},
	{
		name: "snowAgain",
		properties: {
			...snowAgainTheme
		},
		type: "gradient"
	},
	{
		name: "bigMango",
		properties: {
			...bigMangoTheme
		},
		type: "gradient"
	},
	{
		name: "strongBliss",
		properties: {
			...strongBlissTheme
		},
		type: "gradient"
	},
	{
		name: "newYork",
		properties: {
			...newYorkTheme
		},
		type: "gradient"
	},
	{
		name: "temptingAzure",
		properties: {
			...temptingAzureTheme
		},
		type: "poop"
	},
	{
		name: "viciousStance",
		properties: {
			...viciousStanceTheme
		},
		type: "poop"
	}
];

export let defaultAppTheme = {};
defaultAppTheme = Object.assign(defaultAppTheme, themes[0].properties);
