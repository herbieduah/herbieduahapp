import React, { Fragment } from "react";
import { ShowIf } from "../ComponentHelpers";
import { Paragraph, HeadingTwo } from "../ContentHelpers";
import { mobileModel, isMobileOnly } from "react-device-detect";
// import Emoji from "a11y-react-emoji";

export const ForSomeone = props => {
	const whom = props.whom;
	const forYou = props.forYou;
	return (
		<Fragment>
			{/* Dherbsta Twitter */}
			<ShowIf noAnimation thisValue={"dherbstatwitter"} thatValue={whom}>
				<Paragraph>
					You know what's crazy? I am still not tired of MegTheeStallion
					twerking on the timeline.
					<ShowIf noAnimation thisValue={isMobileOnly} thatValue={true}>
						&nbsp; I know she is blessing the lil {mobileModel} you holding
						right now.
					</ShowIf>
					Anyways, here is my web app, it ain't done yet tho.
				</Paragraph>
			</ShowIf>
			{/* Linked */}
			<ShowIf noAnimation thisValue={"linkedin"} thatValue={whom}>
				<HeadingTwo>First Off</HeadingTwo>
				<Paragraph className=' '>
					I'd like to say thanks. You could have been wishing your coworker or
					some connection you don't really know a happy work anniversary but
					instead you're here, checking out my web app. I really appreciate you.
				</Paragraph>
			</ShowIf>
			{/* Reddit */}
			<ShowIf noAnimation thisValue={"reddit"} thatValue={whom}>
				<HeadingTwo>First Off</HeadingTwo>
				<Paragraph className=' '>
					I'd like to say thanks. You could have been upvoting some reddit post
					but instead you're here, checking out my web app. I really appreciate
					you.
				</Paragraph>
				<Paragraph className=' '>
					Shoutout to r/webdev, r/reactjs/ and r/web_design/. Y'all are awesome!
				</Paragraph>
			</ShowIf>

			<ShowIf noAnimation thisValue={"indeed"} thatValue={forYou}>
				<HeadingTwo>First Off</HeadingTwo>
				<Paragraph className=' '>
					Me and my girl, Daliza are big fans of Indeed man. That joint is dope.
				</Paragraph>
				<Paragraph className=' '>
					Speaking of which, are y'all hiring?!?!
				</Paragraph>
			</ShowIf>
		</Fragment>
	);
};

export const forYouHelper = forSomebody => {
	switch (forSomebody) {
		case "indeed":
			return " Indeed Employer";
		//   break;
		// case 'Mangoes':
		// case 'Papayas':
		//   console.log('Mangoes and papayas are $2.79 a pound.');
		//   break;
		default:
			return ` ${forSomebody}`;
	}
};
