/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import {
	ContentShow,
	ComingSoon,
	Header,
	Paragraph,
	Image
} from "../ContentHelpers";
// import herbieYay from "../media/images/picsOfMe/hd-herbieYay-2220.jpg";
// import herbieSmile from "../media/images/picsOfMe/hd-herbieSmile-1974.jpg";
// import herbieSelfieVisionary from "../media/images/picsOfMe/hd-herbieSelfieVisionary-1479.jpg";
// import herbieSedona from "../media/images/picsOfMe/hd-herbieSedona-1973.jpg";
// import herbiePancakes from "../media/images/picsOfMe/hd-herbiePancakes-1973.jpg";
// import herbieRedDeadVideosGames from "../media/images/picsOfMe/hd-herbieRedDeadVideosGames-1973.jpg";
// import herbieNonSmile from "../media/images/picsOfMe/hd-herbieNonSmile-1973.jpg";
// import herbieMeme from "../media/images/picsOfMe/hd-herbieMeme-1480.jpg";
// import herbieGhanaNoSmiling from "../media/images/picsOfMe/hd-herbieGhanaNoSmiling-1973.jpg";
// import herbieEatingOutdoor from "../media/images/picsOfMe/hd-herbieEatingOutdoor-987.jpg";
// import herbieBasketBall from "../media/images/picsOfMe/hd-herbieBasketBall-1973.jpg";
// import graduation from "../media/images/picsOfMe/hd-graduation-2222.jpg";
// import ghanaKid from "../media/images/picsOfMe/hd-ghanaKid-1480.jpg";
import dherbstaAndDinchman from "../media/images/picsOfMe/hd-dherbstaAndDinchman.JPG";
// import africanWhite from "../media/images/picsOfMe/hd-africanWhite-1973.jpg";

const header = "About Me";

const AboutMePage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>Yo what's up it's yo boy!</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Image src={dherbstaAndDinchman} />
			</ContentShow>
		</Fragment>
	);
};

export default AboutMePage;
