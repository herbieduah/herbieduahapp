import {
	themeMaker,
	themeBgMaker,
	matrixTheme,
	snapchatTheme
} from "./ThemeHelpers";
import xvImage from "../bgImages/xv.png";
import subtleGrungeImage from "../bgImages/subtle_grunge.png";
import stardustImage from "../bgImages/stardust.png";
import poolTableImage from "../bgImages/pool_table.png";
import psNeutralImage from "../bgImages/ps_neutral.png";
import pinkDustImage from "../bgImages/pink_dust.png";
import oldMathematicsImage from "../bgImages/old_mathematics.png";
import niceSnowImage from "../bgImages/nice_snow.png";
import halftoneyellowImage from "../bgImages/halftone-yellow.png";
import grungeWallImage from "../bgImages/grunge_wall.png";
import greyFloralImage from "../bgImages/greyfloral.png";
import cardboardFlatImage from "../bgImages/cardboard_flat.png";
import carbonFibreImage from "../bgImages/carbon_fibre.png";
// const blackText = "#000000";
// const whiteText = `#ffffff`;

export const defaultTheme = themeMaker();
export const cartographer = themeBgMaker();
export const matrix = matrixTheme();
export const snapchat = snapchatTheme();

const carbonFibre = {
	bgColor: "#282828",
	bgImage: `${carbonFibreImage}`
};
export const carbonFibreTheme = themeBgMaker(carbonFibre);

const cardboardFlat = {
	bgColor: "#DEDEDE",
	bgImage: `${cardboardFlatImage}`
};
export const cardboardFlatTheme = themeBgMaker(cardboardFlat);

const greyFloral = {
	bgColor: "#FFFFFF",
	bgImage: `${greyFloralImage}`
};
export const greyFloralTheme = themeBgMaker(greyFloral);

const grungeWall = {
	bgColor: "#EBEBEB",
	bgImage: `${grungeWallImage}`
};
export const grungeWallTheme = themeBgMaker(grungeWall);

const halftoneYellow = {
	bgColor: "#FFD867",
	bgImage: `${halftoneyellowImage}`
};
export const halftoneYellowTheme = themeBgMaker(halftoneYellow);

const niceSnow = {
	bgColor: "#F9F9F9",
	bgImage: `${niceSnowImage}`
};
export const niceSnowTheme = themeBgMaker(niceSnow);

const oldMathematics = {
	bgColor: "#f1f4f4",
	bgImage: `${oldMathematicsImage}`
};
export const oldMathematicsTheme = themeBgMaker(oldMathematics);

const pinkDust = {
	bgColor: "#3E3C3D",
	bgImage: `${pinkDustImage}`
};
export const pinkDustTheme = themeBgMaker(pinkDust);

const poolTable = {
	bgColor: "#215f3b",
	bgImage: `${poolTableImage}`
};
export const poolTableTheme = themeBgMaker(poolTable);

const psNeutral = {
	bgColor: "#F8F8F8",
	bgImage: `${psNeutralImage}`
};
export const psNeutralTheme = themeBgMaker(psNeutral);

const starDust = {
	bgColor: "#444349",
	bgImage: `${stardustImage}`
};
export const starDustTheme = themeBgMaker(starDust);

const subtleGrunge = {
	bgColor: "#F6F6F6",
	bgImage: `${subtleGrungeImage}`
};
export const subtleGrungeTheme = themeBgMaker(subtleGrunge);

const xV = {
	bgColor: "#EBEBEB",
	bgImage: `${xvImage}`
};
export const xVTheme = themeBgMaker(xV);

//snowAgain
// background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
const snowAgain = {
	bgColor: "#e6e9f0",
	gradientValues: "#e6e9f0 0%, #eef1f5 100%"
};
export const snowAgainTheme = themeMaker(snowAgain);

//desert hump
//background-image: linear-gradient(to top, #c79081 0%, #dfa579 100%);
const desertHump = {
	bgColor: "#c79081",
	gradientValues: "#c79081 0%, #dfa579 100%"
};
export const desertHumpTheme = themeMaker(desertHump);

//big mango
//background-image: linear-gradient(to top, #c71d6f 0%, #d09693 100%);
const bigMango = {
	bgColor: "#c71d6f",
	gradientValues: "#c71d6f 0%, #d09693 100%"
};
export const bigMangoTheme = themeMaker(bigMango);

// strong bliss
//background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
const strongBliss = {
	bgColor: "#f78ca0",
	gradientValues: "#f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%"
};
export const strongBlissTheme = themeMaker(strongBliss);

//new york
//background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
const newYork = {
	bgColor: "#fff1eb",
	gradientValues: "#fff1eb 0%, #ace0f9 100%"
};
export const newYorkTheme = themeMaker(newYork);

//tempting azure
//background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
const temptingAzure = {
	bgColor: "#84fab0",
	gradientValues: "#84fab0 0%, #8fd3f4 100%"
};
export const temptingAzureTheme = themeMaker(temptingAzure);

//vicious stance
//background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
const viciousStance = {
	bgColor: "#29323c",
	gradientValues: "#29323c 0%, #485563 100%"
};
export const viciousStanceTheme = themeMaker(viciousStance);

// Perfect Blue
// background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);
// Blue gradient
const perfectBlue = {
	bgColor: "#3D4E81",
	gradientValues: "#3D4E81 0%, #5753C9 48%, #6E7FF3"
};
export const perfectBlueTheme = themeMaker(perfectBlue);

// 162 Perfect White
// background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
const perfectWhite = {
	bgColor: "#E3FDF5",
	gradientValues: "#E3FDF5 0%, #FFE6FA 100%"
};
export const perfectWhiteTheme = themeMaker(perfectWhite);

// 147 Smart Indigo
// background-image: linear-gradient(to top, #b224ef 0%, #7579ff 100%);
const smartIndigo = {
	bgColor: "#b224ef",
	gradientValues: "#b224ef 0%, #7579ff 100%"
};
export const smartIndigoTheme = themeMaker(smartIndigo);

// 133 Orange Juice
// background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
const orangeJuice = {
	bgColor: "#fc6076",
	gradientValues: "#fc6076 0%, #ff9a44 100%"
};
export const orangeJuiceTheme = themeMaker(orangeJuice);

// 115 Hidden Jaguar
// background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
const hiddenJaguar = {
	bgColor: "#0fd850",
	gradientValues: "#0fd850 0%, #f9f047 100%"
};
export const hiddenJaguarTheme = themeMaker(hiddenJaguar);

// 097 Amour Amour
// background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
const amourAmour = {
	bgColor: "#f77062",
	gradientValues: "#f77062 0%, #fe5196 100%"
};
export const amourAmourTheme = themeMaker(amourAmour);

// 096 Healthy Water
// background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
const healthyWater = {
	bgColor: "#96deda",
	gradientValues: "#96deda 0%, #50c9c3 100%"
};
export const healthyWaterTheme = themeMaker(healthyWater);

// 090 Mars Party
// background-image: linear-gradient(to top, #5f72bd 0%, #9b23ea 100%);
const marsParty = {
	bgColor: "#5f72bd",
	gradientValues: "#5f72bd 0%, #9b23ea 100%"
};
export const marsPartyTheme = themeMaker(marsParty);

// 076 Premium Dark
// background-image: linear-gradient(to right, #434343 0%, black 100%);
const premiumDark = {
	bgColor: "#434343",
	gradientValues: "#434343 0%, #111111 100%"
};
export const premiumDarkTheme = themeMaker(premiumDark);

// 059 Teen Notebook
// background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
const teenNotebook = {
	bgColor: "#9795f0",
	gradientValues: "#9795f0 0%, #fbc8d4 100%"
};
export const teenNotebookTheme = themeMaker(teenNotebook);

// 054 Grown Early
// background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
const grownEarly = {
	bgColor: "#0ba360",
	gradientValues: "#0ba360 0%, #3cba92 100%"
};
export const grownEarlyTheme = themeMaker(grownEarly);

// 036 Zeus Miracle
// background-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%);
const zeusMiracle = {
	bgColor: "#cd9cf2",
	gradientValues: "#cd9cf2 0%, #f6f3ff 100%"
};
export const zeusMiracleTheme = themeMaker(zeusMiracle);

// 025 Wild Apple
// background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
const wildApple = {
	bgColor: "#d299c2",
	gradientValues: "#d299c2 0%, #fef9d7 100%"
};
export const wildAppleTheme = themeMaker(wildApple);

// 123 Night Sky
// background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
const nightSky = {
	bgColor: "#1e3c72",
	gradientValues: "#1e3c72 0%, #1e3c72 1%, #2a5298 100%"
};
export const nightSkyTheme = themeMaker(nightSky);

// 101 Palo Alto
// background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
const paloAlto = {
	bgColor: "#16a085",
	gradientValues: "#16a085 0%, #f4d03f 100%"
};
export const paloAltoTheme = themeMaker(paloAlto);

// nightparty
// background-image: linear-gradient(to top, #0250c5 0%, #d43f8d 100%);
const nightParty = {
	bgColor: "#0250c5",
	gradientValues: "#0250c5 0%, #d43f8d 100%"
};
export const nightPartyTheme = themeMaker(nightParty);

//love kiss
//background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
const loveKiss = {
	bgColor: "#ff0844",
	gradientValues: "#ff0844 0%, #ffb199 100%"
};
export const loveKissTheme = themeMaker(loveKiss);

//passionate bed
//background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
const passionateBed = {
	bgColor: "#ff758c",
	gradientValues: "#ff758c 0%, #ff7eb3 100%"
};
export const passionateBedTheme = themeMaker(passionateBed);

//party bliss
//background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
const partyBliss = {
	bgColor: "#4481eb",
	gradientValues: "#4481eb 0%, #04befe 100%"
};
export const partyBlissTheme = themeMaker(partyBliss);

//le cocktail
//background-image: linear-gradient(45deg, #874da2 0%, #c43a30 100%);
const leCocktail = {
	bgColor: "#874da2",
	gradientValues: "#874da2 0%, #c43a30 100%"
};
export const leCocktailTheme = themeMaker(leCocktail);

// fruit Blend
// background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);
const fruitBlend = {
	bgColor: "#f9d423",
	gradientValues: "#f9d423 0%, #ff4e50 100%"
};
export const fruitBlendTheme = themeMaker(fruitBlend);

//north miracle
//background-image: linear-gradient(to right, #00dbde 0%, #fc00ff 100%);
const northMiracle = {
	bgColor: "#00dbde",
	gradientValues: "#00dbde 0%, #fc00ff 100%"
};
export const northMiracleTheme = themeMaker(northMiracle);

//sugar lollipop
//background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);
const sugarLollipop = {
	bgColor: "#A445B2",
	gradientValues: "#A445B2 0%, #D41872 52%, #FF0066 100%"
};
export const sugarLollipopTheme = themeMaker(sugarLollipop);

//fabled sunset
// background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
const fabledSunset = {
	bgColor: "#231557",
	gradientValues: "#231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%"
};
export const fabledSunsetTheme = themeMaker(fabledSunset);

//new retrowave
//background-image: linear-gradient(to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%);
const newRetrowave = {
	bgColor: "#3b41c5",
	gradientValues: "#3b41c5 0%, #a981bb 49%, #ffc8a9 100%"
};
export const newRetrowaveTheme = themeMaker(newRetrowave);

//Deep Blue
// background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
const deepBlue = {
	bgColor: "#6a11cb",
	gradientValues: "#6a11cb 0%, #2575fc 100%"
};
export const deepBlueTheme = themeMaker(deepBlue);
