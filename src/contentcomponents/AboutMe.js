/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import { ContentShow, ComingSoon, ContentWrapper } from "../Actions";

const header = "About Me";

const AboutMePage = () => {
	return (
		<ContentWrapper>
			<Fragment>
				<ContentShow header={header} />
				<ContentShow less>
					<Text m>Yo what's up it's yo boy!</Text>
				</ContentShow>
				<ContentShow more>
					<ComingSoon header={header} />
				</ContentShow>
			</Fragment>
		</ContentWrapper>
	);
};

export default AboutMePage;
