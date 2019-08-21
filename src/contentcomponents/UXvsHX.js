/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import { ContentShow, ComingSoon, Paragraph, Header } from "../ContentHelpers";

const header = "An App for Everyone";

const UXvsHXPage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph> Every one is going to have their own app.</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Paragraph className='alpha'>
					I am going to try and convince you why everyone is going to have their
					own app in the future. I am doing my research.
				</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default UXvsHXPage;
