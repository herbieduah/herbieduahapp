/* eslint-disable no-unused-expressions */
import React from "react";
import { Paragraph, Header, Gif, HeadingThree } from "../ContentHelpers";
import Emoji from "a11y-react-emoji";
import testVideoHorizontal from "../media/videos/videosOfme/404.mp4";
const header = "404";

const FourOhFourPage = ({ contentProps }) => {
	return (
		<div className='container'>
			<Header>{header}</Header>
			<Paragraph>
				Oh man <Emoji className='emoji' symbol='🙁' label='sad face' />
			</Paragraph>
			<Gif url={testVideoHorizontal} />
			<Paragraph>Looks like you stumbled on the wrong page</Paragraph>
		</div>
	);
};

export default FourOhFourPage;
