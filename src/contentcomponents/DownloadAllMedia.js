import React, { Fragment, useContext } from "react";
import { DownloadAll } from "../stylecomponents/Base";
import { globalState } from "../State";
import ReactPlayer from "react-player";
// import Img from "react-image";
// ../media/images/bedzin/bedziniPhoneNavNormal.jpg
// ../media/images/modeling/robcaliwide.JPG
// import
import robcaliwide from "../media/images/modeling/robcaliwide.JPG";
import herbieUmberto from "../media/images/modeling/photography-herbieUmberto-2220.jpg";
import herbieUmberto2 from "../media/images/modeling/photography-herbieUmberto2-2220.jpg";
import herbieUmberto3 from "../media/images/modeling/photography-herbieUmberto3-1850.jpg";
import herbieVictoriaNabours from "../media/images/modeling/photography-herbieVictoriaNabours-2219.jpg";
import herbieVictoriaNaboursJacket from "../media/images/modeling/photography-herbieVictoriaNaboursJacket-2219.jpg";
import herbieVictoriaNaboursScratch from "../media/images/modeling/photography-herbieVictoriaNaboursScratch-2639.jpg";
import herbieByDyesa from "../media/images/modeling/photography-herbieByDyesa-2220.jpg";
import herbieByNae from "../media/images/modeling/photography-herbieByNae-1973.jpg";
import herbieCali from "../media/images/modeling/photography-herbieCali-1973.jpg";
import herbieConner2 from "../media/images/modeling/photography-herbieConner2-1851.jpg";
import herbieConner from "../media/images/modeling/photography-herbieConner3-986.jpg";
import herbieJacketNabours from "../media/images/modeling/photography-herbieJacketNabours-2219.jpg";
import herbiebyAnd from "../media/images/modeling/photography-herbiebyAndy-971.jpg";
import herbieByConne from "../media/images/modeling/photography-herbieByConner-986.jpg";
import brianaPhoto from "../media/images/modeling/photography-brianaPhoto-2221.jpg";
import ByBethanyBaldwin2 from "../media/images/modeling/ByBethanyBaldwin2.jpg";
import ByBethanyBaldwin from "../media/images/modeling/ByBethanyBaldwin.jpg";
// ../stylecomponents/bgImages/cartographer.png
import xv from "../stylecomponents/bgImages/xv.png";
import subtle_grunge from "../stylecomponents/bgImages/subtle_grunge.png";
import old_mathematics from "../stylecomponents/bgImages/old_mathematics.png";
import pink_dust from "../stylecomponents/bgImages/pink_dust.png";
import pool_table from "../stylecomponents/bgImages/pool_table.png";
import ps_neutral from "../stylecomponents/bgImages/ps_neutral.png";
import stardust from "../stylecomponents/bgImages/stardust.png";
import grunge_wall from "../stylecomponents/bgImages/grunge_wall.png";
import halftone from "../stylecomponents/bgImages/halftone-yellow.png";
import nice_snow from "../stylecomponents/bgImages/nice_snow.png";
import greyfloral from "../stylecomponents/bgImages/greyfloral.png";
import cartographer from "../stylecomponents/bgImages/cartographer.png";
import cardboard_flat from "../stylecomponents/bgImages/cardboard_flat.png";
import carbon_fibre from "../stylecomponents/bgImages/carbon_fibre.png";
import tireCheckMatt1480x987 from "../media/images/discountTire/work-herbieDTShoot3-987.jpg";
import showroomCheckMatt1480x987 from "../media/images/discountTire/work-herbieDTShoot2-987.jpg";
import standupTireCheck1480x987 from "../media/images/discountTire/work-herbieDTSHoot-987.jpg";
import dtbrochure1480x1973 from "../media/images/discountTire/work-herbieDTReceipt-1973.jpg";
import dtASU1480x2693 from "../media/images/discountTire/work-herbieDTPoster-2693.jpg";
import throughbedzinDesktop1480x3193 from "../media/images/bedzin/throughbedzinDesktop.jpg";
import BedzinCreationofExhibitDesktop1480x2781 from "../media/images/bedzin/BedzinCreationofExhibitDesktop.jpg";
import BedziniPhoneCreationofExhibit1480x9042 from "../media/images/bedzin/BedziniPhoneCreationofExhibit.jpg";
import bedziniPhoneNavNormal1480x2877 from "../media/images/bedzin/bedziniPhoneNavNormal.jpg";
import beziniPhoneExhibit1480x6938 from "../media/images/bedzin/beziniPhoneExhibit.jpg";
import GlossaryDesktop1480x2749 from "../media/images/bedzin/GlossaryDesktop.jpg";
import herbieduahcomMobile1480x2632 from "../media/images/thisApp/herbieduahcomMobile.jpg";
import appOld1480x2923 from "../media/images/thisApp/appOld.jpg";
import HDRHome1480x1052 from "../media/images/thisApp/HDRHome.jpg";
import HDRHomeCopy4x1480x1052 from "../media/images/thisApp/HDRHomeCopy4.jpg";
import HDRHomeCopy6x1480x1052 from "../media/images/thisApp/HDRHomeCopy6.jpg";
import sunsetPoint1480x1110 from "../media/images/iPhone/sunsetPoint.jpg";
import santaMonicaBeach1480x1973 from "../media/images/iPhone/santaMonicaBeach.jpg";
import sunsetsnowlift1480x1973 from "../media/images/iPhone/photography-APC_1099-1973.jpg";
import BWGrandCanyon1480x1110 from "../media/images/iPhone/photography-BWGrandCanyon-1110.jpg";
import sunsetMexico1480x1110 from "../media/images/iPhone/photography-sunsetMexico-1110.jpg";
import Naebabe1480x1973 from "../media/images/iPhone/Naebabe.jpg";
import NAUDome2000x1505 from "../media/images/iPhone/NAUDome.jpg";
import lockettJeepLife1480x1110 from "../media/images/iPhone/lockettJeepLife.jpg";
import melDaddy1480x1973 from "../media/images/iPhone/melDaddy.jpg";
import gradAunty1480x1110 from "../media/images/iPhone/gradAunty.jpg";
import georgeInTown1480x1110 from "../media/images/iPhone/georgeInTown.jpg";
import gloomy1480x1110 from "../media/images/iPhone/gloomy.jpg";
import flagstaffRailroad1480x1110 from "../media/images/iPhone/flagstaffRailroad.jpg";
import flagstaffPrettyColors1480x1110 from "../media/images/iPhone/flagstaffPrettyColors.jpg";
import flagstaffColorfulHouses1480x1110 from "../media/images/iPhone/flagstaffColorfulHouses.jpg";
import afterDCTrip1480x1973 from "../media/images/iPhone/afterDCTrip.jpg";
import photographyTesfayFamilyKiss1480x2220 from "../media/images/people/photography-photographyTesfayFamilyKiss2-2220.jpg";
import abenaNightTime1480x2221 from "../media/images/people/photography-abenaNightTime-2221.jpg";
import ashleyTaylor1480x2221 from "../media/images/people/photography-ashleyTaylor-2222.jpg";
import connorGrad1480x2221 from "../media/images/people/photography-connorGrad-2221.jpg";
import cristian1480x2220 from "../media/images/people/photography-cristian-2220.jpg";
import david1480x2220 from "../media/images/people/photography-david-2220.jpg";
import dyesaColors1480x2221 from "../media/images/people/photography-dyesaColors-2221.jpg";
import emmaModel1480x2221 from "../media/images/people/photography-emmaModel-2221.jpg";
import fashionShow1480x2221 from "../media/images/people/photography-fashionShow-2221.jpg";
import herbieNatasha1480x2221 from "../media/images/people/photography-herbieNatasha-2221.jpg";
import jesseForte1480x2219 from "../media/images/people/photography-jesseForte-2219.jpg";
import oforis1480x2221 from "../media/images/people/photography-oforis-2221.jpg";
import nana1480x2220 from "../media/images/people/nana.jpg";
import ceiphers1480x2220 from "../media/images/people/ceiphers.jpg";
import grindingWie1480x2220 from "../media/images/people/grindingWie.jpg";
import gweg1480x987 from "../media/images/people/gweg.jpg";
import halle1480x2220 from "../media/images/people/halle.jpg";
import johnnyGrad1480x2220 from "../media/images/people/johnnyGrad.jpg";
import meliPoet1480x2220 from "../media/images/people/meliPoet.jpg";
import melphotography1480x2220 from "../media/images/people/melphotography.jpg";
import treesInAutumn2000x3004 from "../media/images/places/treesInAutumn.jpg";
import snowMountainLake1480x985 from "../media/images/places/photography-winterMountain-986.jpg";
import snowyRoad2000x2999 from "../media/images/places/snowyRoad.jpg";
import greenGrass1480x2220 from "../media/images/places/photography-mountains-2220.jpg";
import bwMountain1480x832 from "../media/images/places/photography-bw-832.jpg";
import marshallLake1480x987 from "../media/images/places/photography-flagstaffWater-987.jpg";
import flagstaffRoad1480x986 from "../media/images/places/photography-flagstafRoad-986.jpg";
import mysteriousDoor2000x2999 from "../media/images/places/mysteriousDoor.jpg";
import flagstaffStreetOnAutumn2000x3000 from "../media/images/places/flagstaffStreetOnAutumn.jpg";
import icyAlley2000x3001 from "../media/images/places/icyAlley.jpg";
import evansTundra2000x3331 from "../media/images/places/evansTundra.jpg";
import chocolatefalls2000x1333 from "../media/images/places/chocolatefalls.jpg";
import beauifulsunset2000x1333 from "../media/images/places/beauifulsunset.jpg";
import ACMClubPhoto2000x2667 from "../media/images/startNow/ACMClubPhoto.jpg";
import Yes1480x2220 from "../media/images/startNow/Yes.jpg";
import FullPage1480x1824 from "../media/images/startNow/FullPage.jpg";
import FullSizeStudents1480x1774 from "../media/images/startNow/FullSizeStudents.jpg";
import idkwhatIamDoing1480x2220 from "../media/images/startNow/idkwhatIamDoing.jpg";
import smileStock1480x2220 from "../media/images/startNow/smileStock.jpg";
import UnsolicitedUggDesktop2000x3203 from "../media/images/ugg/work-UnsolicitedUggDesktop.jpg";
import fourohfour from "../media/videos/videosOfme/404.mp4";
import herbieSelfieVisionary1480x1479 from "../media/images/picsOfMe/hd-herbieSelfieVisionary-1479.jpg";
import dherbstaAndDinchman from "../media/images/picsOfMe/hd-dherbstaAndDinchman.JPG";
import herbiePancakes1480x1973 from "../media/images/picsOfMe/hd-herbiePancakes-1973.jpg";
import herbieMeme1480x1480 from "../media/images/picsOfMe/hd-herbieMeme-1480.jpg";
import herbieBasketBall1480x1973 from "../media/images/picsOfMe/hd-herbieBasketBall-1973.jpg";
import graduation from "../media/images/picsOfMe/hd-graduation-2222.jpg";

//videos
import howtowritecoverletter_1 from "../media/videos/startnow/howtowritecoverletter_1.mp4";
import resumeemail from "../media/videos/startnow/resumeemail.mp4";
import raveMillyRock_1 from "../media/videos/videosOfme/raveMillyRock_1.mp4";
import soreLoser_1 from "../media/videos/videosOfme/soreLoser_1.mp4";
import StandUp from "../media/videos/videosOfme/StandUp.mp4";
import frikkinPhillipLim from "../media/videos/ugg/frikkinPhillipLim.mp4";
import JeremyScottDesktop_2 from "../media/videos/ugg/JeremyScottDesktop_2.mp4";
import JeremyScottMobile from "../media/videos/ugg/JeremyScottMobile.mp4";
import Philip from "../media/videos/ugg/Philip-Lim-Mobile.mp4";
import shoeuggemail from "../media/videos/ugg/shoeuggemail.mp4";
import slidesemail from "../media/videos/ugg/slidesemail.mp4";
import giftguide from "../media/videos/ugg/giftguide_11_1.mp4";
import carribeanQueen from "../media/videos/videosOfme/carribeanQueen.mp4";
import millyRockByPool_1 from "../media/videos/videosOfme/millyRockByPool_1.mp4";
import millyrockgrandcanyon from "../media/videos/videosOfme/millyrockgrandcanyon.mp4";
import offRoadingDriving_1 from "../media/videos/videosOfme/offRoadingDriving_1.mp4";
import OffRoadSplash from "../media/videos/videosOfme/OffRoadSplash.mp4";
import wakanda_12 from "../media/videos/videosOfme/wakanda_1.mp4";

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
			<ReactPlayer url={howtowritecoverletter_1} />
			<ReactPlayer url={resumeemail} />
			<ReactPlayer url={raveMillyRock_1} />
			<ReactPlayer url={soreLoser_1} />
			<ReactPlayer url={StandUp} />
			<ReactPlayer url={frikkinPhillipLim} />
			<ReactPlayer url={JeremyScottDesktop_2} />
			<ReactPlayer url={JeremyScottMobile} />
			<ReactPlayer url={Philip} />
			<ReactPlayer url={shoeuggemail} />
			<ReactPlayer url={slidesemail} />
			<ReactPlayer url={giftguide} />
			<ReactPlayer url={carribeanQueen} />
			<ReactPlayer url={millyRockByPool_1} />
			<ReactPlayer url={millyrockgrandcanyon} />
			<ReactPlayer url={offRoadingDriving_1} />
			<ReactPlayer url={OffRoadSplash} />
			<ReactPlayer url={wakanda_12} />
			<img alt='downloaded' src={robcaliwide} />
			<img alt='downloaded' src={herbieUmberto} />
			<img alt='downloaded' src={herbieUmberto2} />
			<img alt='downloaded' src={herbieUmberto3} />
			<img alt='downloaded' src={herbieVictoriaNabours} />
			<img alt='downloaded' src={herbieVictoriaNaboursJacket} />
			<img alt='downloaded' src={herbieVictoriaNaboursScratch} />
			<img alt='downloaded' src={herbieByDyesa} />
			<img alt='downloaded' src={herbieByNae} />
			<img alt='downloaded' src={herbieCali} />
			<img alt='downloaded' src={herbieConner2} />
			<img alt='downloaded' src={herbieConner} />
			<img alt='downloaded' src={herbieJacketNabours} />
			<img alt='downloaded' src={herbiebyAnd} />
			<img alt='downloaded' src={herbieByConne} />
			<img alt='downloaded' src={brianaPhoto} />
			<img alt='downloaded' src={ByBethanyBaldwin2} />
			<img alt='downloaded' src={ByBethanyBaldwin} />
			<img alt='downloaded' src={xv} />>
			<img alt='downloaded' src={subtle_grunge} />
			<img alt='downloaded' src={old_mathematics} />
			<img alt='downloaded' src={pink_dust} />
			<img alt='downloaded' src={pool_table} />
			<img alt='downloaded' src={ps_neutral} />
			<img alt='downloaded' src={stardust} />
			<img alt='downloaded' src={grunge_wall} />
			<img alt='downloaded' src={halftone} />
			<img alt='downloaded' src={nice_snow} />
			<img alt='downloaded' src={greyfloral} />
			<img alt='downloaded' src={cartographer} />
			<img alt='downloaded' src={cardboard_flat} />
			<img alt='downloaded' src={carbon_fibre} />
			<img alt='downloaded' src={tireCheckMatt1480x987} />
			<img alt='downloaded' src={showroomCheckMatt1480x987} />
			<img alt='downloaded' src={standupTireCheck1480x987} />
			<img alt='downloaded' src={dtbrochure1480x1973} />
			<img alt='downloaded' src={dtASU1480x2693} />
			<img alt='downloaded' src={throughbedzinDesktop1480x3193} />
			<img alt='downloaded' src={BedzinCreationofExhibitDesktop1480x2781} />
			<img alt='downloaded' src={BedziniPhoneCreationofExhibit1480x9042} />
			<img alt='downloaded' src={bedziniPhoneNavNormal1480x2877} />
			<img alt='downloaded' src={beziniPhoneExhibit1480x6938} />
			<img alt='downloaded' src={GlossaryDesktop1480x2749} />
			<img alt='downloaded' src={herbieduahcomMobile1480x2632} />
			<img alt='downloaded' src={appOld1480x2923} />
			<img alt='downloaded' src={HDRHome1480x1052} />
			<img alt='downloaded' src={HDRHomeCopy4x1480x1052} />
			<img alt='downloaded' src={HDRHomeCopy6x1480x1052} />
			<img alt='downloaded' src={sunsetPoint1480x1110} />
			<img alt='downloaded' src={santaMonicaBeach1480x1973} />
			<img alt='downloaded' src={sunsetsnowlift1480x1973} />
			<img alt='downloaded' src={BWGrandCanyon1480x1110} />
			<img alt='downloaded' src={sunsetMexico1480x1110} />
			<img alt='downloaded' src={Naebabe1480x1973} />
			<img alt='downloaded' src={NAUDome2000x1505} />
			<img alt='downloaded' src={lockettJeepLife1480x1110} />
			<img alt='downloaded' src={melDaddy1480x1973} />
			<img alt='downloaded' src={gradAunty1480x1110} />
			<img alt='downloaded' src={georgeInTown1480x1110} />
			<img alt='downloaded' src={gloomy1480x1110} />
			<img alt='downloaded' src={flagstaffRailroad1480x1110} />
			<img alt='downloaded' src={flagstaffPrettyColors1480x1110} />
			<img alt='downloaded' src={flagstaffColorfulHouses1480x1110} />
			<img alt='downloaded' src={afterDCTrip1480x1973} />
			<img alt='downloaded' src={photographyTesfayFamilyKiss1480x2220} />
			<img alt='downloaded' src={abenaNightTime1480x2221} />
			<img alt='downloaded' src={ashleyTaylor1480x2221} />
			<img alt='downloaded' src={connorGrad1480x2221} />
			<img alt='downloaded' src={cristian1480x2220} />
			<img alt='downloaded' src={david1480x2220} />
			<img alt='downloaded' src={dyesaColors1480x2221} />
			<img alt='downloaded' src={emmaModel1480x2221} />
			<img alt='downloaded' src={fashionShow1480x2221} />
			<img alt='downloaded' src={herbieNatasha1480x2221} />
			<img alt='downloaded' src={jesseForte1480x2219} />
			<img alt='downloaded' src={oforis1480x2221} />
			<img alt='downloaded' src={nana1480x2220} />
			<img alt='downloaded' src={ceiphers1480x2220} />
			<img alt='downloaded' src={grindingWie1480x2220} />
			<img alt='downloaded' src={gweg1480x987} />
			<img alt='downloaded' src={halle1480x2220} />
			<img alt='downloaded' src={johnnyGrad1480x2220} />
			<img alt='downloaded' src={meliPoet1480x2220} />
			<img alt='downloaded' src={melphotography1480x2220} />
			<img alt='downloaded' src={treesInAutumn2000x3004} />
			<img alt='downloaded' src={snowMountainLake1480x985} />
			<img alt='downloaded' src={snowyRoad2000x2999} />
			<img alt='downloaded' src={greenGrass1480x2220} />
			<img alt='downloaded' src={bwMountain1480x832} />
			<img alt='downloaded' src={marshallLake1480x987} />
			<img alt='downloaded' src={flagstaffRoad1480x986} />
			<img alt='downloaded' src={mysteriousDoor2000x2999} />
			<img alt='downloaded' src={flagstaffStreetOnAutumn2000x3000} />
			<img alt='downloaded' src={icyAlley2000x3001} />
			<img alt='downloaded' src={evansTundra2000x3331} />
			<img alt='downloaded' src={chocolatefalls2000x1333} />
			<img alt='downloaded' src={beauifulsunset2000x1333} />
			<img alt='downloaded' src={ACMClubPhoto2000x2667} />
			<img alt='downloaded' src={Yes1480x2220} />
			<img alt='downloaded' src={FullPage1480x1824} />
			<img alt='downloaded' src={FullSizeStudents1480x1774} />
			<img alt='downloaded' src={idkwhatIamDoing1480x2220} />
			<img alt='downloaded' src={smileStock1480x2220} />
			<img alt='downloaded' src={UnsolicitedUggDesktop2000x3203} />
			<img alt='downloaded' src={fourohfour} />
			<img alt='downloaded' src={herbieSelfieVisionary1480x1479} />
			<img alt='downloaded' src={dherbstaAndDinchman} />
			<img alt='downloaded' src={herbiePancakes1480x1973} />
			<img alt='downloaded' src={herbieMeme1480x1480} />
			<img alt='downloaded' src={herbieBasketBall1480x1973} />
			<img alt='downloaded' src={graduation} />
		</DownloadAll>
	);
};

export const DownloadAllMedia = () => {
	const { lazyLoading } = useContext(globalState);
	return <Fragment>{lazyLoading ? null : <AllMedia />}</Fragment>;
};

export default DownloadAllMedia;
