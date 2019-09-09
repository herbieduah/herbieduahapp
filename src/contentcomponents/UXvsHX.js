/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import { ContentShow, Paragraph, Header } from "../ContentHelpers";

const header = "An App for Everyone";

const UXvsHXPage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<Header less>{header}</Header>
				<Paragraph less>Every one is going to have their own app.</Paragraph>
				<div className='less__container'>
					<Paragraph>
						Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo
						cursus magna, vel scelerisque nisl consectetur et. Integer posuere
						erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo
						quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
					</Paragraph>
				</div>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Paragraph className='alpha'>
					I am going to try and convince you why everyone is going to have their
					own app in the future. I 've been doing some research. I will make a
					blog post and post it here when I am done.
				</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default UXvsHXPage;
