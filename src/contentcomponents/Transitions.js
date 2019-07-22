/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	HeadingTwo,
	Image,
	Header,
	GenerateTransition
} from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";
import "animate.css";
// import Emoji from "a11y-react-emoji";

const header = "Transition";

const TransitionsPage = ({ contentProps }) => {
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					Just like Microsoft Powerpoint, I got some transitions.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<div className='container'>
					<Header>{header}</Header>
					<GenerateTransition />
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default TransitionsPage;
