/* eslint-disable no-unused-expressions */
import React, { Fragment, useState } from "react";
import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import {
	ContentShow,
	ComingSoon,
	Header,
	Paragraph,
	Marquee
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";

const header = "Special Thanks";

const SpecialThanksPage = () => {
	const [marqueePlay, setmarqueePlay] = useState(true);
	const marqueePlaying = () => {
		marqueePlay ? setmarqueePlay(false) : setmarqueePlay(true);
	};
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					I want to give a special shout out to everyone that helped me with is
					project.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<div className='c-border'>
					<Marquee playing={marqueePlay}>
						<Text format xl extrawide>
							Daliza Jeffrey
						</Text>
					</Marquee>
					<Marquee playing={marqueePlay} left>
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
					</Marquee>
				</div>
				<ShowIf noAnimation thisValue={marqueePlay} thatValue={true}>
					<Text
						button
						m
						onClick={marqueePlaying}
						className='c-margin-top padding-left-right'>
						Okay I get it these people are awesome please make it stop
					</Text>
				</ShowIf>

				<ShowIf noAnimation thisValue={marqueePlay} thatValue={false}>
					<Text
						button
						m
						onClick={marqueePlaying}
						className='c-margin-top padding-left-right'>
						I wanna see the people you appreciate over and over again
					</Text>
				</ShowIf>
			</ContentShow>
		</Fragment>
	);
};

export default SpecialThanksPage;
