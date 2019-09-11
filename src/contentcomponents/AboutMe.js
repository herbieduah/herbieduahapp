/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import {
	ContentShow,
	Gif,
	Header,
	Paragraph,
	// Image,
	FiGif,
	Figcaption,
	ContentCategory,
	HeadingTwo,
	Figure
} from "../ContentHelpers";

import {
	videosofmewakanda,
	videosofmecarribeanQueen,
	videosofmeStandUp,
	videosofmeoffRoadingDriving,
	videosofmesoreLoser
} from "../VideoVariables";
import {
	picsOfMeDherbstaAndDinchman,
	picsOfMeRickJamesBball,
	picsOfMeMeme
} from "../MediaVariables";

const header = "About Me";

const AboutMePage = ({ contentProps }) => {
	const { fullScreen } = contentProps;
	return (
		<Fragment>
			<ContentShow less>
				<Header less>{header}</Header>
				<Paragraph less>
					I am going to try to describe myself with pictures and gifs.
				</Paragraph>
				<div className='less__container'>
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
						risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta
						gravida at eget metus. Sed posuere consectetur est at lobortis.
						Maecenas sed diam eget risus varius blandit sit amet non magna.
					</Paragraph>
				</div>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<HeadingTwo>I was born and raised in Ghana</HeadingTwo>
				<FiGif
					className='paddingLRLarge'
					desc='A picture of me doing that Wakanda salute in Black Panther'
					width='720'
					height='900'
					url={videosofmewakanda}>
					<Figcaption>Not Wakanka.</Figcaption>
				</FiGif>
				{/* <HeadingTwo>I graduated at Northern Arizona University</HeadingTwo>
				<Figure
					className='paddingLRLarge'
					alt='A picture of me holding my cap by a lake'
					width='1480'
					height='2222'
					src={picsOfMeGraduation}>
					<Figcaption>
						I graduated with a degree in Applied Computer Science.
					</Figcaption>
				</Figure> */}
				{/* <HeadingTwo>I love breakfast food</HeadingTwo>
				<Image
					className='paddingLRLarge'
					alt='Holding pancakes while dressed as Prince from Dave Chappelle'
					width='1480'
					height='1973'
					src={herbiePancakes1480x1973}
				/> */}
				<HeadingTwo>I absolutely love puns.</HeadingTwo>
				<Figure
					alt='A picture of a life cereal in the trash with the caption saying my I threw my life away'
					width='1480'
					height='1480'
					src={picsOfMeMeme}>
					<Figcaption>
						Fun fact: This web app functions as Pun Generator when you flip your
						phone to a landscape orientation.
					</Figcaption>
				</Figure>
				<HeadingTwo>I suck at basketball</HeadingTwo>
				<Figure
					className='paddingLRLarge'
					alt='Holding a basked while dressed as Prince from Dave Chappelle while sitting on my jeep'
					width='1480'
					height='1973'
					src={picsOfMeRickJamesBball}>
					<Figcaption>
						I was dressed as Prince from the famous Dave Chappelle's skit.
					</Figcaption>
				</Figure>
				{/* <HeadingTwo>I milly rock on every block</HeadingTwo>
				<FiGif
					className='paddingLRLarge'
					desc='Milling rocking in parents background'
					width='720'
					height='1280'
					url={millyRockByPool_1}>
					<Figcaption>I milly rock in my parents backyard.</Figcaption>
				</FiGif>

				<FiGif
					className='paddingLRLarge'
					desc='Milly rocking at a rave'
					width='626'
					height='1234'
					url={raveMillyRock_1}>
					<Figcaption>I milly rock at concerts.</Figcaption>
				</FiGif>
				<FiGif
					className='paddingLRLarge'
					desc='milly rocking at grand canyon'
					width='720'
					height='1280'
					url={millyrockgrandcanyon}>
					<Figcaption>
						I even milly rock at one of the seven wonders of the world.
					</Figcaption>
				</FiGif> */}
				<HeadingTwo>I love dancing even though I am not that good</HeadingTwo>
				<Gif
					className='paddingLRLarge'
					desc='My friend and I dancing in a hotel room'
					width='720'
					height='1280'
					url={videosofmecarribeanQueen}
				/>
				<HeadingTwo>
					I love playing video games... even though I suck
				</HeadingTwo>
				<FiGif
					className='paddingLRLarge'
					desc='playing video games with a disconcerned look'
					width='720'
					height='1280'
					url={videosofmesoreLoser}>
					<Figcaption>I've been told I am still fun to play with.</Figcaption>
				</FiGif>
				{/* <HeadingTwo>I love creativity</HeadingTwo>
				<Figure
					className='paddingLRLarge'
					alt='A mirror selfie of me with my phone propped up on cleaning supplies'
					width='1480'
					height='1479'
					src={herbieSelfieVisionary1480x1479}>
					<Figcaption>The 'Look Ma No Hands' mirror selfie.</Figcaption>
				</Figure> */}
				<HeadingTwo>I enjoy offroading</HeadingTwo>
				<Gif
					className='paddingLRLarge'
					desc='Offroading with some friends'
					width='634'
					height='1234'
					url={videosofmeoffRoadingDriving}
				/>
				{/* <Gif desc='' width='1920' height='1080' url={OffRoadSplash} /> */}
				<HeadingTwo>I love putting smiles on peoples faces</HeadingTwo>
				<FiGif
					className='paddingLRMed'
					desc='Doing some stand up'
					width='960'
					height='540'
					url={videosofmeStandUp}>
					<Figcaption>
						One of the four seperate occassions where I've done stand up comedy.
					</Figcaption>
				</FiGif>
				<HeadingTwo>I love technology</HeadingTwo>
				<Figure
					className='paddingLR'
					alt='Me and my little bro next to my very first computer in Ghana'
					width='1152'
					height='864'
					src={picsOfMeDherbstaAndDinchman}>
					<Figcaption>
						Me and my little bro next to my very first computer in Ghana. 2002?
					</Figcaption>
				</Figure>
				<ContentCategory fullScreen={fullScreen} category='about' />
			</ContentShow>
		</Fragment>
	);
};

export default AboutMePage;
