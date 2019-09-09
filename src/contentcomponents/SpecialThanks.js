/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import {
	ContentShow,
	HeadingTwo,
	ContentCategory,
	Header,
	Paragraph,
	Marquee
	// Small
	// HeadingThree
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";

const header = "Special Thanks";

const SpecialThanksPage = ({ contentProps }) => {
	const { fullScreen, techy } = contentProps;
	// const [marqueePlay, setmarqueePlay] = useState(true);
	const marqueePlay = true;
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
					<Paragraph>
						Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo
						cursus magna, vel scelerisque nisl consectetur et. Integer posuere
						erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo
						quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
					</Paragraph>
				</div>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<HeadingTwo>Shout out to these people</HeadingTwo>
				<Paragraph>
					The hardest thing about designing and developing for eight months is
					to have the will develop and design for eight months. Whether it's
					having weekly "grind nights" to work on things we got going on, words
					of encouragement or texting to make sure I am alive, these people have
					been there for me and I genuinely appreciate them.
				</Paragraph>
				<div className='c-border'>
					<Marquee playing={marqueePlay} left>
						<Text format l extrawide className='c-no-wrap'>
							Daliza Jeffrey - Henry Duah - Kyle Mooney - Nuvi Njinimbam -
							Wieland Mego
						</Text>
					</Marquee>
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
				</div>
				{/* <ShowIf noAnimation thisValue={marqueePlay} thatValue={true}>
					<Small>Okay I get it these people are awesome</Small>
					<Text
						button
						m
						onClick={marqueePlaying}
						className=' padding-left-right'>
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
						className='padding-left-right'>
						make it go again
					</Text>
				</ShowIf> */}
				<ShowIf noAnimation thisValue={techy} thatValue={true}>
					<HeadingTwo>The Dev Community</HeadingTwo>
					<Paragraph>
						Shout out the smart people that created these npm modules:
					</Paragraph>
					<div className='c-border'>
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
					</div>
				</ShowIf>
				<ContentCategory fullScreen={fullScreen} category='about' />
			</ContentShow>
		</Fragment>
	);
};

export default SpecialThanksPage;
