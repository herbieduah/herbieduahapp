/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	// HeadingTwo,
	Header,
	Link,
	ContentCategory,
	ContentShow,
	GenerateTheme
} from "../ContentHelpers";
// import Emoji from "a11y-react-emoji";

const header = "Gradients";

const GradientsPage = ({ contentProps }) => {
	const { fullScreen , minimalMode } = contentProps;
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					I have curated a beautiful collection of gradients.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				{/* <div className='c-border marginLR paddingTB'> */}
				<GenerateTheme type='gradient' />
				<Paragraph className='c-margin-top-med'>
					Big shout out to{" "}
					<Link href='https://webgradients.com/'>webgradients.com</Link> for
					their stellar choices of gradients and the names to with theme.
				</Paragraph>

				<ContentCategory fullScreen={fullScreen} minimalMode={minimalMode} category='customize' />
				{/* </div> */}
			</ContentShow>
		</Fragment>
	);
};

export default GradientsPage;
