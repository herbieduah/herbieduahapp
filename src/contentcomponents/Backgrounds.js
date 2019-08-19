/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	Header,
	GenerateTheme,
	ContentCategory,
	ContentShow,
	Link
} from "../ContentHelpers";

// import Emoji from "a11y-react-emoji";

const header = "Backgrounds";

const BackgroundsPage = ({ contentProps }) => {
	const { fullScreen } = contentProps;
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					I chose a splendid selection of subtle backgrounds for your choosing.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				{/* <div className='c-border marginLR paddingTB'> */}
				<GenerateTheme type='bg' />
				{/* </div> */}
				<ContentCategory fullScreen={fullScreen} category='customize' />
				<Paragraph className='c-margin-top-med'>
					Big shout out to{" "}
					<Link href='https://www.toptal.com/designers/subtlepatterns/'>
						Toptal
					</Link>{" "}
					for their subtle background collection.
				</Paragraph>
				<ContentCategory fullScreen={fullScreen} category='customize' />
			</ContentShow>
		</Fragment>
	);
};

export default BackgroundsPage;
