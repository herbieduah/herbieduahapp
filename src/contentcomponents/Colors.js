/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import { ContentShow, GradientTheme } from "../ComponentHelpers";

const header = "App Colors";

const ColorsPage = () => {
	return (
		<Fragment>
			<ContentShow header={header} />
			<ContentShow less>
				<Text>Here you can change colors and stuff</Text>
			</ContentShow>
			<ContentShow more>
				<GradientTheme themeValue={"default"} />
				<GradientTheme themeValue={"snowAgain"} />
				<GradientTheme themeValue={"bigMango"} />
				<GradientTheme themeValue={"strongBliss"} />
				<GradientTheme themeValue={"newYork"} />
				<GradientTheme themeValue={"temptingAzure"} />
				<GradientTheme themeValue={"viciousStance"} />
			</ContentShow>
		</Fragment>
	);
};

export default ColorsPage;
