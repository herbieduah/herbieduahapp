/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import { ContentShow, ComingSoon } from "../ComponentHelpers";

const header = "Bedzin Exhibit";

const BedzinExhibitPage = () => {
	return (
		<Fragment>
			<ContentShow header={header} />
			<ContentShow less>
				<Text>
					For my senior capstone for Northern Arizona University, my group had
					the incredible opportunity revamping bedzinexhibit.org. The
					exhibit Through the Eyes of Youth: Life and Death in the Będzin
					Ghetto tells the story of young people in the Jewish ghetto of Będzin
					(Poland) before, during, and after the Holocaust.
				</Text>
			</ContentShow>
			<ContentShow more>
				<ComingSoon header={header} />
			</ContentShow>
		</Fragment>
	);
};

export default BedzinExhibitPage;
