/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import {
	ContentShow,
	Header,
	Paragraph,
	Image,
	ContentCategory
} from "../ContentHelpers";
// import sunsetPoint1480x1110 from "../media/images/iPhone/sunsetPoint.jpg";
// import santaMonicaBeach1480x1973 from "../media/images/iPhone/santaMonicaBeach.jpg";
// import sunsetsnowlift1480x1973 from "../media/images/iPhone/photography-APC_1099-1973.jpg";
// import BWGrandCanyon1480x1110 from "../media/images/iPhone/photography-BWGrandCanyon-1110.jpg";
// import sunsetMexico1480x1110 from "../media/images/iPhone/photography-sunsetMexico-1110.jpg";
// import Naebabe1480x1973 from "../media/images/iPhone/Naebabe.jpg";
// import NAUDome2000x1505 from "../media/images/iPhone/NAUDome.jpg";
// import lockettJeepLife1480x1110 from "../media/images/iPhone/lockettJeepLife.jpg";
// import melDaddy1480x1973 from "../media/images/iPhone/melDaddy.jpg";
// import gradAunty1480x1110 from "../media/images/iPhone/gradAunty.jpg";
// import georgeInTown1480x1110 from "../media/images/iPhone/georgeInTown.jpg";
// import gloomy1480x1110 from "../media/images/iPhone/gloomy.jpg";
// import flagstaffRailroad1480x1110 from "../media/images/iPhone/flagstaffRailroad.jpg";
// import flagstaffPrettyColors1480x1110 from "../media/images/iPhone/flagstaffPrettyColors.jpg";
// import flagstaffColorfulHouses1480x1110 from "../media/images/iPhone/flagstaffColorfulHouses.jpg";
// import afterDCTrip1480x1973 from "../media/images/iPhone/afterDCTrip.jpg";
import {
	iphonemexicoSunset,
	iphoneflagstaffRailroad,
	iphonegloomy,
	iphonetreesbyEdgeofTheWorld,
	iphoneflagstaffPrettyColors,
	iphonesunsetPoint,
	iphonesantaMonicaBeach,
	iphonenauDome,
	iphonenaebabe,
	iphonemelDaddy,
	iphonelockettJeepLife,
	iphonejeepSnow,
	iphonehumphreysSkiSunset,
	iphonegrandcanyonBlackandWhite,
	iphonegradAunty,
	iphoneflagstaffColorfulHouses,
	iphoneDavidBestIphonePic,
	iphoneafterDCTrip
} from "../MediaVariables";

const header = "ShotOniPhone";

const iPhonePage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<Header less>{header}</Header>
				<Paragraph less>I enjoy taking pictures on my iPhone</Paragraph>
				<div className='less__container paddingLRSm'>
					<Image src={iphonemexicoSunset} />
					<Image src={iphonelockettJeepLife} />
					<Image src={iphonesunsetPoint} />
				</div>
			</ContentShow>
			<ContentShow containerLarge more>
				<Header className='container'>{header}</Header>
				<Paragraph className='container' center>
					Here are some of my favorite photos I've shot on my iPhone.
				</Paragraph>
				<ul className='c-photos'>
					<li>
						<Image src={iphonesantaMonicaBeach} />
					</li>
					<li>
						<Image src={iphoneDavidBestIphonePic} />
					</li>
					<li>
						<Image src={iphonejeepSnow} />
					</li>
					<li>
						<Image src={iphonesantaMonicaBeach} />
					</li>
					<li>
						<Image src={iphonehumphreysSkiSunset} />
					</li>
					<li>
						<Image src={iphonegrandcanyonBlackandWhite} />
					</li>
					<li>
						<Image src={iphonemexicoSunset} />
					</li>
					<li>
						<Image src={iphonenaebabe} />
					</li>
					<li>
						<Image src={iphonenauDome} />
					</li>
					<li>
						<Image src={iphonelockettJeepLife} />
					</li>
					<li>
						<Image src={iphonemelDaddy} />
					</li>
					<li>
						<Image src={iphonegradAunty} />
					</li>
					<li>
						<Image src={iphonetreesbyEdgeofTheWorld} />
					</li>
					<li>
						<Image src={iphonegloomy} />
					</li>
					<li>
						<Image src={iphoneflagstaffRailroad} />
					</li>
					<li>
						<Image src={iphoneflagstaffPrettyColors} />
					</li>
					<li>
						<Image src={iphoneflagstaffColorfulHouses} />
					</li>
					<li>
						<Image src={iphoneafterDCTrip} />
					</li>
				</ul>
				<ContentCategory category='photography' className='container' />
			</ContentShow>
		</Fragment>
	);
};

export default iPhonePage;
