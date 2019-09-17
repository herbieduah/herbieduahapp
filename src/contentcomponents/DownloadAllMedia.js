import React, { Fragment, useContext } from "react";
import { DownloadAll } from "../stylecomponents/Base";
import { globalState } from "../State";
import ReactPlayer from "react-player";
// import Img from "react-image";
// ../media/images/bedzin/bedziniPhoneNavNormal.jpg
// ../media/images/modeling/robcaliwide.JPG
// import
import {

bedzinCreationofExhibitDesktop,
bedziniPhoneCreationofExhibit,
bedzinIPhoneExhibit,
bedziniPhoneNavNormal,
bedzinthroughbedzinDesktop,
dtCheckOutTheseTires,
dtCreepySmile,
dtPostedUp,
dtposter,
dtReceipt,
dtShootLaughing,
dtShootWithMustang,
dtTeamworkTools,
glossaryDesktop,
iphoneafterDCTrip,
iphoneDavidBestIphonePic,
iPhoneExhibitMobile,
iphoneflagstaffColorfulHouses,
iphonegradAunty,
iphonegrandcanyonBlackandWhite,
iphonehumphreysSkiSunset,
iphonejeepSnow,
iphonelockettJeepLife,
iphonemelDaddy,
iphonenaebabe,
iphonenauDome,
iphonesantaMonicaBeach,
iphonesunsetPoint,
iphonetreesbyEdgeofTheWorld,
modelingBethanyBAldWinsStars,
modelingBrianaAfrican,
modelingBWMembersONly,
modelingByNae,
modelingDyesaDTPhoenix,
modelingInCaliWithRob,
modelingJacketHoldNabours,
modelingJacketHoldNaboursDown,
modelingNaboursFavorite,
modelingSnowInFlagstaffConner,
modelingUmbertoScienceMuseum,
modelingUmbertoScienceMuseumHandsFolded,
modelingUmbertoScienceMuseumIPhone,
peopleAshleyTaylor,
peopleCeiphers,
peopleconnorGrad,
peopleCristian,
peopleDavid,
peopleDyesa,
peopleEmma,
peopleFashionShow,
peopleGoldenFace,
peopleGrindingWie,
peopleHalle,
peopleJesseForte,
peopleJohnnyGrad,
peopleMeliPoet,
peopleMelvin,
peopleMelvinBenz,
peopleNana,
peopleTesfayFamily,
peopleTheGRand,
picsOfMeAfricanWhite,
picsOfMeGhanaNoSmiling,
picsOfMeGhanaSchool,
picsOfMeGraduation,
picsOfMeHerbieGhana,
picsOfMeHero,
picsOfMeHero3,
picsOfMeHeroImageTwo,
picsOfMeMeEating,
picsOfMeMeme,
picsOfMeNonSmileCornish,
picsOfMeRedDeadHat,
picsOfMeRickJamesBball,
picsOfMeRickJamesPancakes,
picsOfMeSedonaCar,
picsOfMeYayCareerPhotoShoot,
placesbeauifulsunset,
placesbeautifulmountains,
placeschocolatefalls,
placesevansTundra,
placesfallFlagstaff,
placesflagstaffStreetOnAutumn,
placesicyAlley,
placesmysteriousDoor,
placessnowyRoad,
placestreesInAutumn,
placesWinterMountain,
startNowCareerImageWithPeople,
startNowCareerResourseGuide,
startNowCareerWidePosterPhotoshop,
startNowConstructAPlan,
startNowConstructAPlanHorizontal,
startNowFullPage,
startNowFullSizeStudents,
startNowherbieCareerWidePoster,
startNowidkwhatIamDoing,
startNowKnowTheGame,
startNowsmileStock,
startNowStandOutFromTheRest,
startNowYes,
thisAppappOld,
thisAppGatsbySmiling,
uggUnsolicitedUggDesktop,
bedzinExhibitOld,
dtLookingDown,
dtShootMentoringNearMustang,
iphoneflagstaffPrettyColors,
iphoneflagstaffRailroad,
iphonegloomy,
iphonemexicoSunset,
modelingAndyDauterman,
modelingBethanyBaldwinDTFlagstaff,
modelingceiphersClothing,
modelingConnerSnow,
modelingRobCaliLandscape,
modelingSnowInFlagstaffConnerArmsFold,
peopleAbena,
peopleGweg,
peopleMelphotography,
peopleNatasha,
picsOfMeDherbstaAndDinchman,
picsOfMeSelfieOlympics,
placesflagstaffRoadd,
placesflagstaffWater,
placesmountainsFlagstaff,
startNowACMClubPhoto,
startNowCareerPoster,
startNowNAUConstruction,
thisAppHDRHomeTop,
thisAppHDRHomeUX,
thisAppHerbieDuahComeUX,
thisAppHerbieDuahMobile,
thisAppHerokuDesktopPic
} from "../MediaVariables";
//videos
// import howtowritecoverletter_1 from "../media/videos/startnow/howtowritecoverletter_1.mp4";
// import resumeemail from "../media/videos/startnow/resumeemail.mp4";
// import raveMillyRock_1 from "../media/videos/videosOfme/raveMillyRock_1.mp4";
// import soreLoser_1 from "../media/videos/videosOfme/soreLoser_1.mp4";
// import StandUp from "../media/videos/videosOfme/StandUp.mp4";
// import frikkinPhillipLim from "../media/videos/ugg/frikkinPhillipLim.mp4";
// import JeremyScottDesktop_2 from "../media/videos/ugg/JeremyScottDesktop_2.mp4";
// import JeremyScottMobile from "../media/videos/ugg/JeremyScottMobile.mp4";
// import Philip from "../media/videos/ugg/Philip-Lim-Mobile.mp4";
// import shoeuggemail from "../media/videos/ugg/shoeuggemail.mp4";
// import slidesemail from "../media/videos/ugg/slidesemail.mp4";
// import giftguide from "../media/videos/ugg/giftguide_11_1.mp4";
// import carribeanQueen from "../media/videos/videosOfme/carribeanQueen.mp4";
// import millyRockByPool_1 from "../media/videos/videosOfme/millyRockByPool_1.mp4";
// import millyrockgrandcanyon from "../media/videos/videosOfme/millyrockgrandcanyon.mp4";
// import offRoadingDriving_1 from "../media/videos/videosOfme/offRoadingDriving_1.mp4";
// import OffRoadSplash from "../media/videos/videosOfme/OffRoadSplash.mp4";
// import wakanda_12 from "../media/videos/videosOfme/wakanda_1.mp4";

// import offRoadStuck from "../media/videos/videosOfme/offRoadStuck.mp4";
// import photosSedona from "../media/videos/videosOfme/photosSedona.mp4";

// import toast_1 from "../media/videos/videosOfme/toast_1.mp4";
// import toastSquad from "../media/videos/videosOfme/toastSquad.mp4";
// import vNeckCrewNeck from "../media/videos/videosOfme/vNeckCrewNeck.mp4";
// {
/* <ReactPlayer
							url={props.url}
							className={props.className}
							width={props.width || "100%"}
							height={props.height || "100%"}
						/> */
// }
export const AllMedia = () => {
	return (
		<DownloadAll aria-hidden='true'>
<img alt="downloaded" src={bedzinCreationofExhibitDesktop[1]} srcSet={`${bedzinCreationofExhibitDesktop[0]} 740w`}/>
<img alt="downloaded" src={bedziniPhoneCreationofExhibit[1]} srcSet={`${bedziniPhoneCreationofExhibit[0]} 740w`}/>
<img alt="downloaded" src={bedzinIPhoneExhibit[1]} srcSet={`${bedzinIPhoneExhibit[0]} 740w`}/>
<img alt="downloaded" src={bedziniPhoneNavNormal[1]} srcSet={`${bedziniPhoneNavNormal[0]} 740w`}/>
<img alt="downloaded" src={bedzinthroughbedzinDesktop[1]} srcSet={`${bedzinthroughbedzinDesktop[0]} 740w`}/>
<img alt="downloaded" src={dtCheckOutTheseTires[1]} srcSet={`${dtCheckOutTheseTires[0]} 740w`}/>
<img alt="downloaded" src={dtCreepySmile[1]} srcSet={`${dtCreepySmile[0]} 740w`}/>
<img alt="downloaded" src={dtPostedUp[1]} srcSet={`${dtPostedUp[0]} 740w`}/>
<img alt="downloaded" src={dtposter[1]} srcSet={`${dtposter[0]} 740w`}/>
<img alt="downloaded" src={dtReceipt[1]} srcSet={`${dtReceipt[0]} 740w`}/>
<img alt="downloaded" src={dtShootLaughing[1]} srcSet={`${dtShootLaughing[0]} 740w`}/>
<img alt="downloaded" src={dtShootWithMustang[1]} srcSet={`${dtShootWithMustang[0]} 740w`}/>
<img alt="downloaded" src={dtTeamworkTools[1]} srcSet={`${dtTeamworkTools[0]} 740w`}/>
<img alt="downloaded" src={glossaryDesktop[1]} srcSet={`${glossaryDesktop[0]} 740w`}/>
<img alt="downloaded" src={iphoneafterDCTrip[1]} srcSet={`${iphoneafterDCTrip[0]} 740w`}/>
<img alt="downloaded" src={iphoneDavidBestIphonePic[1]} srcSet={`${iphoneDavidBestIphonePic[0]} 740w`}/>
<img alt="downloaded" src={iPhoneExhibitMobile[1]} srcSet={`${iPhoneExhibitMobile[0]} 740w`}/>
<img alt="downloaded" src={iphoneflagstaffColorfulHouses[1]} srcSet={`${iphoneflagstaffColorfulHouses[0]} 740w`}/>
<img alt="downloaded" src={iphonegradAunty[1]} srcSet={`${iphonegradAunty[0]} 740w`}/>
<img alt="downloaded" src={iphonegrandcanyonBlackandWhite[1]} srcSet={`${iphonegrandcanyonBlackandWhite[0]} 740w`}/>
<img alt="downloaded" src={iphonehumphreysSkiSunset[1]} srcSet={`${iphonehumphreysSkiSunset[0]} 740w`}/>
<img alt="downloaded" src={iphonejeepSnow[1]} srcSet={`${iphonejeepSnow[0]} 740w`}/>
<img alt="downloaded" src={iphonelockettJeepLife[1]} srcSet={`${iphonelockettJeepLife[0]} 740w`}/>
<img alt="downloaded" src={iphonemelDaddy[1]} srcSet={`${iphonemelDaddy[0]} 740w`}/>
<img alt="downloaded" src={iphonenaebabe[1]} srcSet={`${iphonenaebabe[0]} 740w`}/>
<img alt="downloaded" src={iphonenauDome[1]} srcSet={`${iphonenauDome[0]} 740w`}/>
<img alt="downloaded" src={iphonesantaMonicaBeach[1]} srcSet={`${iphonesantaMonicaBeach[0]} 740w`}/>
<img alt="downloaded" src={iphonesunsetPoint[1]} srcSet={`${iphonesunsetPoint[0]} 740w`}/>
<img alt="downloaded" src={iphonetreesbyEdgeofTheWorld[1]} srcSet={`${iphonetreesbyEdgeofTheWorld[0]} 740w`}/>
<img alt="downloaded" src={modelingBethanyBAldWinsStars[1]} srcSet={`${modelingBethanyBAldWinsStars[0]} 740w`}/>
<img alt="downloaded" src={modelingBrianaAfrican[1]} srcSet={`${modelingBrianaAfrican[0]} 740w`}/>
<img alt="downloaded" src={modelingBWMembersONly[1]} srcSet={`${modelingBWMembersONly[0]} 740w`}/>
<img alt="downloaded" src={modelingByNae[1]} srcSet={`${modelingByNae[0]} 740w`}/>
<img alt="downloaded" src={modelingDyesaDTPhoenix[1]} srcSet={`${modelingDyesaDTPhoenix[0]} 740w`}/>
<img alt="downloaded" src={modelingInCaliWithRob[1]} srcSet={`${modelingInCaliWithRob[0]} 740w`}/>
<img alt="downloaded" src={modelingJacketHoldNabours[1]} srcSet={`${modelingJacketHoldNabours[0]} 740w`}/>
<img alt="downloaded" src={modelingJacketHoldNaboursDown[1]} srcSet={`${modelingJacketHoldNaboursDown[0]} 740w`}/>
<img alt="downloaded" src={modelingNaboursFavorite[1]} srcSet={`${modelingNaboursFavorite[0]} 740w`}/>
<img alt="downloaded" src={modelingSnowInFlagstaffConner[1]} srcSet={`${modelingSnowInFlagstaffConner[0]} 740w`}/>
<img alt="downloaded" src={modelingUmbertoScienceMuseum[1]} srcSet={`${modelingUmbertoScienceMuseum[0]} 740w`}/>
<img alt="downloaded" src={modelingUmbertoScienceMuseumHandsFolded[1]} srcSet={`${modelingUmbertoScienceMuseumHandsFolded[0]} 740w`}/>
<img alt="downloaded" src={modelingUmbertoScienceMuseumIPhone[1]} srcSet={`${modelingUmbertoScienceMuseumIPhone[0]} 740w`}/>
<img alt="downloaded" src={peopleAshleyTaylor[1]} srcSet={`${peopleAshleyTaylor[0]} 740w`}/>
<img alt="downloaded" src={peopleCeiphers[1]} srcSet={`${peopleCeiphers[0]} 740w`}/>
<img alt="downloaded" src={peopleconnorGrad[1]} srcSet={`${peopleconnorGrad[0]} 740w`}/>
<img alt="downloaded" src={peopleCristian[1]} srcSet={`${peopleCristian[0]} 740w`}/>
<img alt="downloaded" src={peopleDavid[1]} srcSet={`${peopleDavid[0]} 740w`}/>
<img alt="downloaded" src={peopleDyesa[1]} srcSet={`${peopleDyesa[0]} 740w`}/>
<img alt="downloaded" src={peopleEmma[1]} srcSet={`${peopleEmma[0]} 740w`}/>
<img alt="downloaded" src={peopleFashionShow[1]} srcSet={`${peopleFashionShow[0]} 740w`}/>
<img alt="downloaded" src={peopleGoldenFace[1]} srcSet={`${peopleGoldenFace[0]} 740w`}/>
<img alt="downloaded" src={peopleGrindingWie[1]} srcSet={`${peopleGrindingWie[0]} 740w`}/>
<img alt="downloaded" src={peopleHalle[1]} srcSet={`${peopleHalle[0]} 740w`}/>
<img alt="downloaded" src={peopleJesseForte[1]} srcSet={`${peopleJesseForte[0]} 740w`}/>
<img alt="downloaded" src={peopleJohnnyGrad[1]} srcSet={`${peopleJohnnyGrad[0]} 740w`}/>
<img alt="downloaded" src={peopleMeliPoet[1]} srcSet={`${peopleMeliPoet[0]} 740w`}/>
<img alt="downloaded" src={peopleMelvin[1]} srcSet={`${peopleMelvin[0]} 740w`}/>
<img alt="downloaded" src={peopleMelvinBenz[1]} srcSet={`${peopleMelvinBenz[0]} 740w`}/>
<img alt="downloaded" src={peopleNana[1]} srcSet={`${peopleNana[0]} 740w`}/>
<img alt="downloaded" src={peopleTesfayFamily[1]} srcSet={`${peopleTesfayFamily[0]} 740w`}/>
<img alt="downloaded" src={peopleTheGRand[1]} srcSet={`${peopleTheGRand[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeAfricanWhite[1]} srcSet={`${picsOfMeAfricanWhite[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeGhanaNoSmiling[1]} srcSet={`${picsOfMeGhanaNoSmiling[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeGhanaSchool[1]} srcSet={`${picsOfMeGhanaSchool[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeGraduation[1]} srcSet={`${picsOfMeGraduation[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeHerbieGhana[1]} srcSet={`${picsOfMeHerbieGhana[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeHero[1]} srcSet={`${picsOfMeHero[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeHero3[1]} srcSet={`${picsOfMeHero3[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeHeroImageTwo[1]} srcSet={`${picsOfMeHeroImageTwo[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeMeEating[1]} srcSet={`${picsOfMeMeEating[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeMeme[1]} srcSet={`${picsOfMeMeme[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeNonSmileCornish[1]} srcSet={`${picsOfMeNonSmileCornish[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeRedDeadHat[1]} srcSet={`${picsOfMeRedDeadHat[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeRickJamesBball[1]} srcSet={`${picsOfMeRickJamesBball[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeRickJamesPancakes[1]} srcSet={`${picsOfMeRickJamesPancakes[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeSedonaCar[1]} srcSet={`${picsOfMeSedonaCar[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeYayCareerPhotoShoot[1]} srcSet={`${picsOfMeYayCareerPhotoShoot[0]} 740w`}/>
<img alt="downloaded" src={placesbeauifulsunset[1]} srcSet={`${placesbeauifulsunset[0]} 740w`}/>
<img alt="downloaded" src={placesbeautifulmountains[1]} srcSet={`${placesbeautifulmountains[0]} 740w`}/>
<img alt="downloaded" src={placeschocolatefalls[1]} srcSet={`${placeschocolatefalls[0]} 740w`}/>
<img alt="downloaded" src={placesevansTundra[1]} srcSet={`${placesevansTundra[0]} 740w`}/>
<img alt="downloaded" src={placesfallFlagstaff[1]} srcSet={`${placesfallFlagstaff[0]} 740w`}/>
<img alt="downloaded" src={placesflagstaffStreetOnAutumn[1]} srcSet={`${placesflagstaffStreetOnAutumn[0]} 740w`}/>
<img alt="downloaded" src={placesicyAlley[1]} srcSet={`${placesicyAlley[0]} 740w`}/>
<img alt="downloaded" src={placesmysteriousDoor[1]} srcSet={`${placesmysteriousDoor[0]} 740w`}/>
<img alt="downloaded" src={placessnowyRoad[1]} srcSet={`${placessnowyRoad[0]} 740w`}/>
<img alt="downloaded" src={placestreesInAutumn[1]} srcSet={`${placestreesInAutumn[0]} 740w`}/>
<img alt="downloaded" src={placesWinterMountain[1]} srcSet={`${placesWinterMountain[0]} 740w`}/>
<img alt="downloaded" src={startNowCareerImageWithPeople[1]} srcSet={`${startNowCareerImageWithPeople[0]} 740w`}/>
<img alt="downloaded" src={startNowCareerResourseGuide[1]} srcSet={`${startNowCareerResourseGuide[0]} 740w`}/>
<img alt="downloaded" src={startNowCareerWidePosterPhotoshop[1]} srcSet={`${startNowCareerWidePosterPhotoshop[0]} 740w`}/>
<img alt="downloaded" src={startNowConstructAPlan[1]} srcSet={`${startNowConstructAPlan[0]} 740w`}/>
<img alt="downloaded" src={startNowConstructAPlanHorizontal[1]} srcSet={`${startNowConstructAPlanHorizontal[0]} 740w`}/>
<img alt="downloaded" src={startNowFullPage[1]} srcSet={`${startNowFullPage[0]} 740w`}/>
<img alt="downloaded" src={startNowFullSizeStudents[1]} srcSet={`${startNowFullSizeStudents[0]} 740w`}/>
<img alt="downloaded" src={startNowherbieCareerWidePoster[1]} srcSet={`${startNowherbieCareerWidePoster[0]} 740w`}/>
<img alt="downloaded" src={startNowidkwhatIamDoing[1]} srcSet={`${startNowidkwhatIamDoing[0]} 740w`}/>
<img alt="downloaded" src={startNowKnowTheGame[1]} srcSet={`${startNowKnowTheGame[0]} 740w`}/>
<img alt="downloaded" src={startNowsmileStock[1]} srcSet={`${startNowsmileStock[0]} 740w`}/>
<img alt="downloaded" src={startNowStandOutFromTheRest[1]} srcSet={`${startNowStandOutFromTheRest[0]} 740w`}/>
<img alt="downloaded" src={startNowYes[1]} srcSet={`${startNowYes[0]} 740w`}/>
<img alt="downloaded" src={thisAppappOld[1]} srcSet={`${thisAppappOld[0]} 740w`}/>
<img alt="downloaded" src={thisAppGatsbySmiling[1]} srcSet={`${thisAppGatsbySmiling[0]} 740w`}/>
<img alt="downloaded" src={uggUnsolicitedUggDesktop[1]} srcSet={`${uggUnsolicitedUggDesktop[0]} 740w`}/>
<img alt="downloaded" src={bedzinExhibitOld[1]} srcSet={`${bedzinExhibitOld[0]} 740w`}/>
<img alt="downloaded" src={dtLookingDown[1]} srcSet={`${dtLookingDown[0]} 740w`}/>
<img alt="downloaded" src={dtShootMentoringNearMustang[1]} srcSet={`${dtShootMentoringNearMustang[0]} 740w`}/>
<img alt="downloaded" src={iphoneflagstaffPrettyColors[1]} srcSet={`${iphoneflagstaffPrettyColors[0]} 740w`}/>
<img alt="downloaded" src={iphoneflagstaffRailroad[1]} srcSet={`${iphoneflagstaffRailroad[0]} 740w`}/>
<img alt="downloaded" src={iphonegloomy[1]} srcSet={`${iphonegloomy[0]} 740w`}/>
<img alt="downloaded" src={iphonemexicoSunset[1]} srcSet={`${iphonemexicoSunset[0]} 740w`}/>
<img alt="downloaded" src={modelingAndyDauterman[1]} srcSet={`${modelingAndyDauterman[0]} 740w`}/>
<img alt="downloaded" src={modelingBethanyBaldwinDTFlagstaff[1]} srcSet={`${modelingBethanyBaldwinDTFlagstaff[0]} 740w`}/>
<img alt="downloaded" src={modelingceiphersClothing[1]} srcSet={`${modelingceiphersClothing[0]} 740w`}/>
<img alt="downloaded" src={modelingConnerSnow[1]} srcSet={`${modelingConnerSnow[0]} 740w`}/>
<img alt="downloaded" src={modelingRobCaliLandscape[1]} srcSet={`${modelingRobCaliLandscape[0]} 740w`}/>
<img alt="downloaded" src={modelingSnowInFlagstaffConnerArmsFold[1]} srcSet={`${modelingSnowInFlagstaffConnerArmsFold[0]} 740w`}/>
<img alt="downloaded" src={peopleAbena[1]} srcSet={`${peopleAbena[0]} 740w`}/>
<img alt="downloaded" src={peopleGweg[1]} srcSet={`${peopleGweg[0]} 740w`}/>
<img alt="downloaded" src={peopleMelphotography[1]} srcSet={`${peopleMelphotography[0]} 740w`}/>
<img alt="downloaded" src={peopleNatasha[1]} srcSet={`${peopleNatasha[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeDherbstaAndDinchman[1]} srcSet={`${picsOfMeDherbstaAndDinchman[0]} 740w`}/>
<img alt="downloaded" src={picsOfMeSelfieOlympics[1]} srcSet={`${picsOfMeSelfieOlympics[0]} 740w`}/>
<img alt="downloaded" src={placesflagstaffRoadd[1]} srcSet={`${placesflagstaffRoadd[0]} 740w`}/>
<img alt="downloaded" src={placesflagstaffWater[1]} srcSet={`${placesflagstaffWater[0]} 740w`}/>
<img alt="downloaded" src={placesmountainsFlagstaff[1]} srcSet={`${placesmountainsFlagstaff[0]} 740w`}/>
<img alt="downloaded" src={startNowACMClubPhoto[1]} srcSet={`${startNowACMClubPhoto[0]} 740w`}/>
<img alt="downloaded" src={startNowCareerPoster[1]} srcSet={`${startNowCareerPoster[0]} 740w`}/>
<img alt="downloaded" src={startNowNAUConstruction[1]} srcSet={`${startNowNAUConstruction[0]} 740w`}/>
<img alt="downloaded" src={thisAppHDRHomeTop[1]} srcSet={`${thisAppHDRHomeTop[0]} 740w`}/>
<img alt="downloaded" src={thisAppHDRHomeUX[1]} srcSet={`${thisAppHDRHomeUX[0]} 740w`}/>
<img alt="downloaded" src={thisAppHerbieDuahComeUX[1]} srcSet={`${thisAppHerbieDuahComeUX[0]} 740w`}/>
<img alt="downloaded" src={thisAppHerbieDuahMobile[1]} srcSet={`${thisAppHerbieDuahMobile[0]} 740w`}/>
<img alt="downloaded" src={thisAppHerokuDesktopPic[1]} srcSet={`${thisAppHerokuDesktopPic[0]} 740w`}/>
		</DownloadAll>
	);
};

export const DownloadAllMedia = () => {
	const { lazyLoading } = useContext(globalState);
	return <Fragment>{lazyLoading ? null : <AllMedia />}</Fragment>;
};

export default DownloadAllMedia;
