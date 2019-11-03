/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
// import Text from "../stylecomponents/Text";
import {
	ContentShow,
	// ComingSoon,
	Paragraph,
	LessContent,
	Small,
	ContentCategory,
	Button,
	Header,
	HeadingTwo
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";

const header = "Theme";

const ThemePage = ({ contentProps }) => {
	const { currentTheme, setTheme } = contentProps;
	const setMatrixTheme = () => {
		setTheme("matrix");
	};
	// const setSnapchatTheme = () => {
	// 	setTheme("snapchat");
	// };

	// const snapMessage = () => {
	// 	setTimeout(() => {
	// 		return `It's been 10 seconds, hope you are digging it`;
	// 	}, 10000);
	// };
	const isMatrix = currentTheme === "matrix" ? true : false;
	// const isSnapchat = currentTheme === "snapchat" ? true : false;
	// const setNigerianTheme = () => {
	// 	currentTheme('nigerian');
	// };

	// const starWarsTheme = () => {
	// 	currentTheme('starwars');
	// };

	return (
		<Fragment>
			<ContentShow less>
				<LessContent header={header}>
					You can change the theme of the whole site.
				</LessContent>
				<div className='less__container'>
					{/* <Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
						risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta
						gravida at eget metus. Sed posuere consectetur est at lobortis.
						Maecenas sed diam eget risus varius blandit sit amet non magna.
					</Paragraph> */}
				</div>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Paragraph>
					I will be adding more Themes once this web app is out of Beta.
				</Paragraph>
				<Paragraph>
					(Hot tip: Choosing a background turns of the Theme)
				</Paragraph>
				<HeadingTwo>Matrix</HeadingTwo>
				<Paragraph>
					This Matrix theme is based on the Matrix Trilogy starring Keanu
					Reeves.
				</Paragraph>
				<ShowIf noAnimation thisValue={isMatrix} thatValue={false}>
					<Button onClick={setMatrixTheme}>Take the Red Pill</Button>
					<Small>
						You stay in Wonderland, and I show you how deep the rabbit hole
						goes...
					</Small>
				</ShowIf>
				<ShowIf noAnimation thisValue={isMatrix} thatValue={true}>
					<Small>You are currently in the Matrix.</Small>
				</ShowIf>
				{/* <HeadingTwo>Snapchat</HeadingTwo>
				<Paragraph>
					The Snapchat theme borrows some of the looks and colors from Snapchat.
				</Paragraph>
				<ShowIf noAnimation thisValue={isSnapchat} thatValue={false}>
					<Button onClick={setSnapchatTheme}>Add Filter</Button>
					<Small>This web app is totally catfish.</Small>
				</ShowIf>
				<ShowIf noAnimation thisValue={isSnapchat} thatValue={true}>
					<Small>Hmm {snapMessage()}</Small>
				</ShowIf> */}
				<ContentCategory category='customize' />
			</ContentShow>
		</Fragment>
	);
};

export default ThemePage;
