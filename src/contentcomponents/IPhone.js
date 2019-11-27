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
	ContentCategory,
	LessContent,
	ZigZag
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
				<LessContent header={header}>
					I enjoy taking pictures on my iPhone
				</LessContent>
				<div className='less__container paddingLRSm'>
					<Image alt='picture of ' src={iphonemexicoSunset} />
					<Image alt='picture of ' src={iphonelockettJeepLife} />
					<Image alt='picture of ' src={iphonesunsetPoint} />
				</div>
			</ContentShow>
			<ContentShow containerLarge more>
				<ZigZag>
					<Header>{header}</Header>
					<Paragraph>
						Here are some of my favorite photos I've shot on my iPhone.
					</Paragraph>
				</ZigZag>
				<ZigZag>
					<Image
						alt='picture of a beach in Santa Monica California'
						src={iphonesantaMonicaBeach}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='picture of kid jumping up'
						src={iphoneDavidBestIphonePic}
					/>
				</ZigZag>
				<ZigZag>
					<Image alt='picture of my Jeep in snow' src={iphonejeepSnow} />
				</ZigZag>
				<ZigZag>
					<Image
						alt='picture of a sunset near a ski lift'
						src={iphonehumphreysSkiSunset}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='picture of of the Grand Canyon in black and white'
						src={iphonegrandcanyonBlackandWhite}
					/>
				</ZigZag>
				<ZigZag>
					<Image alt='picture of a sunset in Mexico' src={iphonemexicoSunset} />
				</ZigZag>
				<ZigZag>
					<Image
						alt='picture of girl infront of a blue sky '
						src={iphonenaebabe}
					/>
				</ZigZag>
				<ZigZag>
					<Image alt='picture of Dome in snow' src={iphonenauDome} />
				</ZigZag>
				<ZigZag>
					<Image
						alt='picture of a jeep on a picturesque landscape'
						src={iphonelockettJeepLife}
					/>
				</ZigZag>
				<ZigZag>
					<Image alt='picture of guy in sunglasses' src={iphonemelDaddy} />
				</ZigZag>
				<ZigZag>
					<Image
						alt='picture of best friends surrounded their college graduate friend'
						src={iphonegradAunty}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='picture of colorful trees '
						src={iphonetreesbyEdgeofTheWorld}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='picture of a jeep infront of a gloomy sky '
						src={iphonegloomy}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='picture of dark cloudy city infront of a train station '
						src={iphoneflagstaffRailroad}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='picture of some pretty colors  in the sky'
						src={iphoneflagstaffPrettyColors}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='picture of a snowy neighborhood with pretty skies '
						src={iphoneflagstaffColorfulHouses}
					/>
				</ZigZag>
				<ZigZag>
					<Image alt='picture of sunset' src={iphoneafterDCTrip} />
				</ZigZag>
				<ContentCategory category='photography' className='container' />
			</ContentShow>
		</Fragment>
	);
};

export default iPhonePage;
