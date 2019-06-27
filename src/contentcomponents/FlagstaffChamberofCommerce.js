/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import { ContentShow, ComingSoon } from "../Actions";

const header = "Flagstaff Chamber of Commerce";

const FCCPage = () => {
	return (
		<Fragment>
			<ContentShow header={header} />
			<ContentShow less>
				<Text m>Graphic Design for Flagstaff Chamber of Commerce.</Text>
			</ContentShow>
			<ContentShow more>
				<ComingSoon header={header} />
			</ContentShow>
		</Fragment>
	);
};

export default FCCPage;