// blockBorderColor
// pTextColor
// bgColor
// headingColor
// ctaColor
import { rgba, invert } from "polished";
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
		}
	},
	{
		name: "snowAgain",
		properties: {
			...snowAgainTheme
		}
	},
	{
		name: "bigMango",
		properties: {
			...bigMangoTheme
		}
	},
	{
		name: "strongBliss",
		properties: {
			...strongBlissTheme
		}
	},
	{
		name: "newYork",
		properties: {
			...newYorkTheme
		}
	},
	{
		name: "temptingAzure",
		properties: {
			...temptingAzureTheme
		}
	},
	{
		name: "viciousStance",
		properties: {
			...viciousStanceTheme
		}
	}
];

export let defaultAppTheme = {};
defaultAppTheme = Object.assign(defaultAppTheme, themes[0].properties);
