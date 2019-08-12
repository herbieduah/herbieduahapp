/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import {
	ContentShow,
	Gif,
	Header,
	Paragraph,
	Image,
	FiGif,
	Figcaption,
	HeadingTwo,
	Figure
} from "../ContentHelpers";
// import herbieYay from "../media/images/picsOfMe/hd-herbieYay-2220.jpg";
// import herbieSmile from "../media/images/picsOfMe/hd-herbieSmile-1974.jpg";
import herbieSelfieVisionary1480x1479 from "../media/images/picsOfMe/hd-herbieSelfieVisionary-1479.jpg";
// import herbieSedona from "../media/images/picsOfMe/hd-herbieSedona-1973.jpg";
import herbiePancakes1480x1973 from "../media/images/picsOfMe/hd-herbiePancakes-1973.jpg";
// import herbieRedDeadVideosGames from "../media/images/picsOfMe/hd-herbieRedDeadVideosGames-1973.jpg";
// import herbieNonSmile from "../media/images/picsOfMe/hd-herbieNonSmile-1973.jpg";
import herbieMeme1480x1480 from "../media/images/picsOfMe/hd-herbieMeme-1480.jpg";
// import herbieGhanaNoSmiling from "../media/images/picsOfMe/hd-herbieGhanaNoSmiling-1973.jpg";
// import herbieEatingOutdoor from "../media/images/picsOfMe/hd-herbieEatingOutdoor-987.jpg";
import herbieBasketBall1480x1973 from "../media/images/picsOfMe/hd-herbieBasketBall-1973.jpg";
import graduation from "../media/images/picsOfMe/hd-graduation-2222.jpg";
// import ghanaKid from "../media/images/picsOfMe/hd-ghanaKid-1480.jpg";
import dherbstaAndDinchman from "../media/images/picsOfMe/hd-dherbstaAndDinchman.JPG";
//import africanWhite from "../media/images/picsOfMe/hd-africanWhite-1973.jpg";
// import four0hfour from "../media/videos/videosOfme/404.mp4";
// import aptDancing_1 from "../media/videos/videosOfme/aptDancing_1.mp4";
import carribeanQueen from "../media/videos/videosOfme/carribeanQueen.mp4";
// import dadDance_1 from "../media/videos/videosOfme/dadDance_1.mp4";
// import good404Snow from "../media/videos/videosOfme/good404Snow.mp4";
// import hammockChilling_1 from "../media/videos/videosOfme/hammockChilling_1.mp4";
import millyRockByPool_1 from "../media/videos/videosOfme/millyRockByPool_1.mp4";
import millyrockgrandcanyon from "../media/videos/videosOfme/millyrockgrandcanyon.mp4";
import offRoadingDriving_1 from "../media/videos/videosOfme/offRoadingDriving_1.mp4";
import OffRoadSplash from "../media/videos/videosOfme/OffRoadSplash.mp4";
// import offRoadStuck from "../media/videos/videosOfme/offRoadStuck.mp4";
// import photosSedona from "../media/videos/videosOfme/photosSedona.mp4";
import raveMillyRock_1 from "../media/videos/videosOfme/raveMillyRock_1.mp4";
import soreLoser_1 from "../media/videos/videosOfme/soreLoser_1.mp4";
import StandUp from "../media/videos/videosOfme/StandUp.mp4";
// import toast_1 from "../media/videos/videosOfme/toast_1.mp4";
// import toastSquad from "../media/videos/videosOfme/toastSquad.mp4";
// import vNeckCrewNeck from "../media/videos/videosOfme/vNeckCrewNeck.mp4";
import wakanda_1 from "../media/videos/videosOfme/wakanda_1.mp4";

const header = "About Me";

const AboutMePage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>Hmm, how do I describe myself?</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<HeadingTwo>I was born and raised in Ghana</HeadingTwo>
				<FiGif className='paddingLRLarge' url={wakanda_1}>
					<Figcaption>Not Wakanka.</Figcaption>
				</FiGif>
				<HeadingTwo>I graduated at Northern Arizona University</HeadingTwo>
				<Figure className='paddingLRLarge' src={graduation}>
					<Figcaption>
						I graduated with a degree in Applied Computer Science.
					</Figcaption>
				</Figure>
				<HeadingTwo>I love breakfast food</HeadingTwo>
				<Image className='paddingLRLarge' src={herbiePancakes1480x1973} />
				<HeadingTwo>I absolutely love puns.</HeadingTwo>
				<Figure src={herbieMeme1480x1480}>
					<Figcaption>
						Fun fact: This web app functions as Pun Generator when you flip your
						phone to a landscape orientation.
					</Figcaption>
				</Figure>
				<HeadingTwo>I suck at basketball</HeadingTwo>
				<Figure className='paddingLRLarge' src={herbieBasketBall1480x1973}>
					<Figcaption>
						I was dressed as Prince from the famous Dave Chappelle's skit.
					</Figcaption>
				</Figure>
				<HeadingTwo>I milly rock on every block</HeadingTwo>
				<FiGif className='paddingLRLarge' url={millyRockByPool_1}>
					<Figcaption>I milly rock in my parents backyard.</Figcaption>
				</FiGif>

				<FiGif className='paddingLRLarge' url={raveMillyRock_1}>
					<Figcaption>I milly rock at concerts.</Figcaption>
				</FiGif>
				<FiGif className='paddingLRLarge' url={millyrockgrandcanyon}>
					<Figcaption>
						I even milly rock at one of the seven wonders of the world.
					</Figcaption>
				</FiGif>
				<HeadingTwo>I love dancing even though I am not that good</HeadingTwo>
				<Gif className='paddingLRLarge' url={carribeanQueen} />
				<HeadingTwo>
					I love playing video games... even though I suck
				</HeadingTwo>
				<FiGif className='paddingLRLarge' url={soreLoser_1}>
					<Figcaption>I've been told I am still fun to play with.</Figcaption>
				</FiGif>
				<HeadingTwo>I love creativity</HeadingTwo>
				<Figure className='paddingLRLarge' src={herbieSelfieVisionary1480x1479}>
					<Figcaption>The 'Look Ma No Hands' mirror selfie.</Figcaption>
				</Figure>
				<HeadingTwo>I enjoy offroading</HeadingTwo>
				<Gif className='paddingLRLarge' url={offRoadingDriving_1} />
				<Gif url={OffRoadSplash} />
				<HeadingTwo>I love putting smiles on peoples faces</HeadingTwo>
				<FiGif className='paddingLRMed' url={StandUp}>
					<Figcaption>
						One of the four seperate occassions where I've done stand up comedy.
					</Figcaption>
				</FiGif>
				<HeadingTwo>I love technology</HeadingTwo>
				<Figure className='paddingLR' src={dherbstaAndDinchman}>
					<Figcaption>
						Me and my little bro next to my very first computer in Ghana. 2002?
					</Figcaption>
				</Figure>
			</ContentShow>
		</Fragment>
	);
};

export default AboutMePage;
