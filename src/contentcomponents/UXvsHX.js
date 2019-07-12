/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import { ContentShow, ComingSoon } from "../ComponentHelpers";

const header = "User Experience vs Human Experience";

const UXvsHXPage = () => {
	return (
		<Fragment>
			<ContentShow header={header} />
			<ContentShow less>
				<ComingSoon header={header} />
			</ContentShow>
			<ContentShow more>
				<ComingSoon header={header} />
			</ContentShow>
		</Fragment>
	);
};

export default UXvsHXPage;
