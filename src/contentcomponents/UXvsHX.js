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
				<Paragraph>
					{" "}
					There is an app for everything, in the future, I believe there is
					going to be an app for everyone. I am Herbie Duah, and this is my app.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Paragraph>
					There is an app for everything, in the future, I believe there is
					going to be an app for everyone. I am Herbie Duah, and this is my app.
				</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default UXvsHXPage;
