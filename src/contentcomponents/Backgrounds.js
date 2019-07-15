/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import { Paragraph, Header, GenerateTheme } from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";
// import Emoji from "a11y-react-emoji";

const header = "Backgrounds";

const BackgroundsPage = ({ contentProps }) => {
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					I chose a splendid selection of subtle backgrounds for your choosing.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<div className='container'>
					<Header>{header}</Header>
					<GenerateTheme type='bg' />
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default BackgroundsPage;
