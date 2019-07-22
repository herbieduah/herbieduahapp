/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import { ContentShow, Header, Paragraph, Image } from "../ContentHelpers";
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

const header = "iPhone";

const iPhonePage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>I enjoy taking pics on my iPhone</Paragraph>
			</ContentShow>
			<ContentShow more>
				<div className='container'>
					<Header>{header}</Header>
					<Image src={sunsetPoint1480x1110} />
					<Image src={santaMonicaBeach1480x1973} />
					<Image src={sunsetsnowlift1480x1973} />
					<Image src={BWGrandCanyon1480x1110} />
					<Image src={sunsetMexico1480x1110} />
					<Image src={Naebabe1480x1973} />
					<Image src={NAUDome2000x1505} />
					<Image src={lockettJeepLife1480x1110} />
					<Image src={melDaddy1480x1973} />
					<Image src={gradAunty1480x1110} />
					<Image src={georgeInTown1480x1110} />
					<Image src={gloomy1480x1110} />
					<Image src={flagstaffRailroad1480x1110} />
					<Image src={flagstaffPrettyColors1480x1110} />
					<Image src={flagstaffColorfulHouses1480x1110} />
					<Image src={afterDCTrip1480x1973} />
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default iPhonePage;
