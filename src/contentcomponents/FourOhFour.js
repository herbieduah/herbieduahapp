/* eslint-disable no-unused-expressions */
import React from "react";
import { Paragraph, Header, Gif } from "../ContentHelpers";
import Emoji from "a11y-react-emoji";
// import fourohfour from "../media/videos/videosOfme/404.mp4";
import { videosofme404 } from "../media/appVideos/videosofme404.mp4";
// import { from } from "rxjs";
const header = "404";

const FourOhFourPage = ({ contentProps }) => {
	return (
		<div className='container'>
			<Header>{header}</Header>
			<Paragraph>
				Oh man <Emoji className='emoji' symbol='🙁' label='sad face' />
			</Paragraph>
			<Gif url={videosofme404} />
			<Paragraph>Looks like you stumbled on the wrong page</Paragraph>
		</div>
	);
};

export default FourOhFourPage;
