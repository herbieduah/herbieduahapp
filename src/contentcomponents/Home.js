/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	HeadingOne,
	HeadingTwo,
	HeadingThree,
	Image,
	Small,
	Figure,
	Figcaption,
	Gif,
	Header,
	Flex
} from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";
import Emoji from "a11y-react-emoji";
// import Modal from "../maincomponents/Modal";
import cornishPastyPic from "../media/videos/videosOfme/millyRockByPool_1.mp4";
import testVideoVertical from "../media/videos/videosOfme/millyrockgrandcanyon.mp4";
import testPicHorizontal from "../media/videos/videosOfme/raveMillyRock_1.mp4";
import testVideoHorizontal from "../media/videos/videosOfme/dadDance_1.mp4";

// import ReactPlayer from "react-player";

const header = "Hi, I'm Herbie";
// There is an app for everything, in
// 					the future, I believe there is going to be an app for everyone. I am
// 					Herbie Duah, and this is my app.

/* <ThisValueEqualsState thisValue='Connor' stateValue={whom}>
						<Text xl>BIG DOGGG</Text>
					</ThisValueEqualsState> */

// const HomePage = ({ contentProps }) => {
const HomePage = ({ contentProps }) => {
	const { isContentPortrait } = contentProps;

	return (
		<Fragment>
			<ContentShow less>
				{/* <Paragraph>
					Hello, I'm Herbie, a Photographer and Front End Developer with a
					passion for designing and engineering user experiences for you.
				</Paragraph> */}
				<Flex isPortrait={isContentPortrait}>
					{/* <Paragraph className='col-50'>Hi, I'm Herbie</Paragraph> */}
					<Gif url={cornishPastyPic} />
					<Gif url={testPicHorizontal} />
					<Gif url={testVideoHorizontal} />
					<Gif url={testVideoVertical} />
				</Flex>
			</ContentShow>
			<ContentShow more>
				<div className='container'>
					<Header>{header}</Header>
					<Image src={cornishPastyPic} className='container' />
					<HeadingTwo>Designed and engineered for you</HeadingTwo>
					<Paragraph>
						I have a passion for developing and designing user experiences for
						people like you. Even though this portfolio is about me, I want you,
						the user, to choose how you experience it
						<Emoji symbol='🙂' label='smile' />.
					</Paragraph>
					<HeadingTwo>Work and experience</HeadingTwo>

					<Paragraph>
						Graduated at Northern Arizona University with a degree in Computer
						Science. Somewhere along the way, I fell in love design. I enjoy any
						opportunity that allows me to use my coding AND design skills
						<Emoji symbol='🤓' label='nerd' />.
					</Paragraph>
					<Paragraph>
						I am a Web developer and Designer with five years of experience
						currently working at Discount Tire as a Front End Developer I,
						developing for and maintaining their intranet.
					</Paragraph>
					<Paragraph>
						Previously at Decker Brands, working on the UGG team as a User
						Interface Developer.
					</Paragraph>
					<HeadingTwo>Photography and modeling</HeadingTwo>
					<Paragraph>
						I'm also really into photography, and I enjoy being behind the lens
						of a camera even though I often find myself in front of one
						<Emoji symbol='🤷🏿‍♂️' label='shrug' />.
					</Paragraph>
					{/* <Paragraph>
						Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur
						blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros.
					</Paragraph>
					<Small>
						Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur
						blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros.
					</Small>
					<HeadingOne>HerbieDuah.app</HeadingOne>
					<HeadingTwo>HerbieDuah.app let me tell you all about it</HeadingTwo>
					<HeadingThree>
						HerbieDuah.app let me tell you all about it
					</HeadingThree>
					<Image src={testPic} />
					<Figure src={testPic2} height={2222}>
						<Figcaption>Me fat ass getting food</Figcaption>
					</Figure>
					<Gif url={testVideo} /> */}
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default HomePage;
