/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import {
	ContentShow,
	ComingSoon,
	Paragraph,
	Header,
	HeadingTwo
} from "../ContentHelpers";

const header = "Theme";

const ThemePage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>You can change the theme of the whole site.</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Paragraph>
					Themes change certain areas of the site to match one of themes below
				</Paragraph>
				<HeadingTwo>
					Matrix <span className='alpha'>Coming soon</span>
				</HeadingTwo>
				<Paragraph>
					This Matrix theme is based on the Matrix Trilogy starring Keanu
					Reeves.
				</Paragraph>
				<HeadingTwo>
					Snapchat <span className='alpha'>ComingSoon</span>
				</HeadingTwo>
				<Paragraph>
					The Snapchat theme borrows some of the looks and colors from Snapchat.
				</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default ThemePage;
