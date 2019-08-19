/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	HeadingTwo,
	Image,
	Header,
	ContentShow,
	ContentCategory,
	GenerateTransition,
	Link
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";
import "animate.css";
// import Emoji from "a11y-react-emoji";

const header = "Transitions";

const TransitionsPage = ({ contentProps }) => {
	const { fullScreen, techy } = contentProps;
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					Just like Microsoft Powerpoint, I got some transitions.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<div className='padding-left-right'>
					<GenerateTransition />
				</div>
				<ShowIf noAnimation thisValue={techy} thatValue={true}>
					<Paragraph className='c-margin-top-med'>
						Big shout out to{" "}
						<Link href='https://daneden.me/'>Daniel Edens'</Link> amazing{" "}
						<Link href='https://daneden.github.io/animate.css/'>
							Animate.css
						</Link>{" "}
						library
					</Paragraph>
					<ContentCategory fullScreen={fullScreen} category='customize' />
				</ShowIf>
			</ContentShow>
		</Fragment>
	);
};

export default TransitionsPage;
