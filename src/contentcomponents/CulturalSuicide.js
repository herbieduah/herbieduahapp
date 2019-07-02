/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import { ContentShow, ComingSoon } from "../ComponentHelpers";

const header = "Cultural Suicide";

const CulturalSuicide = () => {
	return (
		<Fragment>
			<ContentShow header={header} />
			<ContentShow less>
				<Text>Cultural Suicide Web Page coming soon</Text>
			</ContentShow>
			<ContentShow more>
				<ComingSoon header={header} />
			</ContentShow>
		</Fragment>
	);
};

export default CulturalSuicide;
