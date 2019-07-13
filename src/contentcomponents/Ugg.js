/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import { ContentShow, ComingSoon } from "../ContentHelpers";

const header = "Ugg";

const UggPage = () => {
	return (
		<Fragment>
			<ContentShow header={header} />
			<ContentShow less>
				<Text>
					At Deckers Brand, I had a wonderful opportunity learn about digital
					marketing, developing wonderful User Interfaces for email and web for
					Ugg, and getting my parking ticket paid for by a secret admirer.
				</Text>
			</ContentShow>
			<ContentShow more>
				<ComingSoon header={header} />
			</ContentShow>
		</Fragment>
	);
};

export default UggPage;
