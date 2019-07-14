/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import { ContentShow } from "../ContentHelpers";
import { GradientTheme } from "../ComponentHelpers";
import { themes } from "../stylecomponents/Theme";

const header = "App Colors";

const ColorsPage = () => {
	return (
		<Fragment>
			<ContentShow header={header} />
			<ContentShow less>
				<Text>Here you can change colors and stuff</Text>
			</ContentShow>
			<ContentShow more>
				{themes.map(function(element, uniqueKey) {
					if (element.type !== "poop") {
						return <GradientTheme themeValue={element.name} key={uniqueKey} />;
					}
				})}
				{/* <GradientTheme themeValue={"default"} />
				<GradientTheme themeValue={"snowAgain"} />
				<GradientTheme themeValue={"bigMango"} />
				<GradientTheme themeValue={"strongBliss"} />
				<GradientTheme themeValue={"newYork"} />
				<GradientTheme themeValue={"temptingAzure"} />
				<GradientTheme themeValue={"viciousStance"} /> */}
			</ContentShow>
		</Fragment>
	);
};

export default ColorsPage;
