/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import {
	ContentShow,
	HeadingTwo,
	ContentCategory,
	Header,
	Paragraph,
	Link,
	UL,
	LI
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";

const header = "Special Thanks";

const SpecialThanksPage = ({ contentProps }) => {
	const { forDev } = contentProps;
	// const [marqueePlay, setmarqueePlay] = useState(true);
	// const marqueePlay = true;
	// const marqueePlaying = () => {
	// 	marqueePlay ? setmarqueePlay(false) : setmarqueePlay(true);
	// };
	return (
		<Fragment>
			<ContentShow less>
				<Header less>{header}</Header>
				<Paragraph less>
					I want to give a special shout out to everyone that helped me with is
					project.
				</Paragraph>
				<div className='less__container'>
					{/* <Paragraph>
						Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo
						cursus magna, vel scelerisque nisl consectetur et. Integer posuere
						erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo
						quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
					</Paragraph> */}
				</div>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<HeadingTwo>Shout out to these people</HeadingTwo>
				<Paragraph>
					I am the sole developer, designer, engineer, UX writer etc and I put
					countless hours into this project.
				</Paragraph>
				<Paragraph>It was tough.</Paragraph>
				<Paragraph>Big shout out to these people for their support.</Paragraph>
				<UL>
					<LI wide>Daliza Jeffrey</LI>
					<LI wide>Henry Duah</LI>
					<LI wide>Kyle Mooney</LI>
					<LI wide>Johnny Haizel-Cobbina</LI>
					<LI wide>Nuvi Njinimbam</LI>
				</UL>

				{/* <div className='c-border'>
					<Marquee playing={marqueePlay} left className='c-no-wrap'>
						<Text format l extrawide>
							Daliza Jeffrey - Henry Duah - Kyle Mooney - Nuvi Njinimbam -
							Wieland Mego
						</Text>
						<Text format l extrawide>
							Daliza Jeffrey - Henry Duah - Kyle Mooney - Nuvi Njinimbam -
							Wieland Mego
						</Text>
					</Marquee> */}
				{/* <Marquee playing={marqueePlay} left>
						<Text format xl extrawide>
							Henry Duah
						</Text>
					</Marquee>
					<Marquee playing={marqueePlay}>
						<Text format xl extrawide>
							Kyle Mooney
						</Text>
					</Marquee>

					<Marquee playing={marqueePlay} left>
						<Text format xl extrawide>
							Nuvi Njinimbam
						</Text>
					</Marquee>
					<Marquee playing={marqueePlay}>
						<Text format xl extrawide>
							Wieland Mego
						</Text>
					</Marquee> */}
				{/* </div> */}
				{/* <ShowIf noAnimation thisValue={marqueePlay} thatValue={true}>
					<Small>Okay I get it these people are awesome</Small>
					<Text
						button
						m
						onClick={marqueePlaying}
						className=' paddingLRSm'>
						make it stop
					</Text>
				</ShowIf>

				<ShowIf noAnimation thisValue={marqueePlay} thatValue={false}>
					<Small>
						I wanna see the people you appreciate over and over again
					</Small>
					<Text
						button
						m
						onClick={marqueePlaying}
						className='paddingLRSm'>
						make it go again
					</Text>
				</ShowIf> */}
				<ShowIf noAnimation thisValue={forDev} thatValue={true}>
					<HeadingTwo>The Dev Community</HeadingTwo>
					<Paragraph>
						Shout out to the amazing developer community. I have truly learned a
						lot these past couple months. Once this project is wrapped, I hope
						to be more active in Stack Overflow and also sharing my knowledge on
						my&nbsp;<Link href='https://medium.com/@herbieduah'>Medium</Link>
						&nbsp;account.
					</Paragraph>
					{/* <div className='c-border'>
						<Marquee playing={marqueePlay} left>
							<Text format m extrawide className='c-no-wrap'>
								react-dom - styled-components - react-split-pane - react-player
								- react-lazyload - react-tabs - react-matrix-effect -
								react-image - query-string
							</Text>
						</Marquee>
						<Marquee playing={marqueePlay} left>
							<Text format m extrawide>
								react-sizeme - react-reveal - react-visibility-sensor -
								react-device-detect - eact-transition-group - react-svg
							</Text>
						</Marquee>
					</div> */}
				</ShowIf>
				<ContentCategory category='about' />
			</ContentShow>
		</Fragment>
	);
};

export default SpecialThanksPage;
