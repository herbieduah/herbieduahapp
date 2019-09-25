import React, { Fragment } from "react";
import { ShowIf } from "../ComponentHelpers";
import { Paragraph, HeadingTwo } from "../ContentHelpers";
import { mobileModel, isMobileOnly } from "react-device-detect";

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

			{/* https://www.linkedin.com/jobs/view/1460515336/ */}
			{/* Visa */}
			{/* https://www.herbieduah.app/?=CyberSource */}
			<JobApplication
				jobID='cybersource'
				job='Sr. UX Design Engineer'
				city='Austin'
				topping="contribute to CyberSource's growth as a global leader in e-Commerce Payment"
				forYou={forYou}
			/>
			<JobApplication
				jobID='cloudflare'
				job='Front End Engineer'
				city='Austin'
				topping="contribute to Cloudflare's goal to help build a better Internet."
				forYou={forYou}
			/>
			<JobApplication
				jobID='indeed'
				job='UX Developer'
				city='Austin'
				topping="contribute to Indeed's mission to help people get jobs."
				forYou={forYou}
			/>
			<JobApplication
				jobID='vrbo'
				job='UX Developer'
				city='Austin'
				topping='partner with the engineering teams to deliver great experiences and patterns for Vrbo travelers and suppliers.'
				forYou={forYou}
			/>
			{/* <ShowIf noAnimation thisValue={""} thatValue={forYou}>
			<Paragraph>
				I am a Phoenix based Web developer/designer with five years of
				experience. I enjoy any opportunity that allows me to use my coding
				and design skills in an original and creative way
				<Emoji className='emoji' symbol='🤓' label='nerd' />.
			</Paragraph>
		</ShowIf> */}
		</Fragment>
	);
};

export const JobApplication = props => {
	const job = props.job;
	const city = props.city;
	const topping = props.topping ? ` and ${props.topping}` : "";
	const jobID = props.jobID;
	const forYou = props.forYou;
	return (
		<Fragment>
			<ShowIf noAnimation thisValue={jobID} thatValue={forYou}>
				<HeadingTwo>{job} position</HeadingTwo>
				<Paragraph>
					I appreciate you taking the time to check out my application and
					portfolio. Hope all is well at the {city} location.
				</Paragraph>
				<Paragraph>
					I believe I have the skills to fill the role for your {job}
					{topping}. I designed and engineered this portfolio with a role like
					this in mind.
				</Paragraph>
				<Paragraph>
					If I am not a good fit the role, please let me know why so I can learn
					to improve my skills. I hope you have a pleasant experience on my web
					app (I'm open to feedback on it too!).
				</Paragraph>
			</ShowIf>
		</Fragment>
	);
};
export const forYouHelper = forSomebody => {
	let person = forSomebody === "" ? "" : ` ${forSomebody}`;
	switch (forSomebody) {
		case "indeed":
			person = " Indeed Employer/Employee";
			return person;
		case "cybersource":
			person = " CyberSource Employer/Employee";
			return person;
		case "cloudflare":
			person = " Cloudflare Employer/Employee";
			return person;
		case "vrbo":
			person = " Expedia Employer/Employee";
			return person;
		// case 'Mangoes':
		// case 'Papayas':
		//   console.log('Mangoes and papayas are $2.79 a pound.');
		//   break;
		default:
			return person;
	}
};

// I am a Phoenix based a Web developer/designer with five years of
// 					experience. I graduated at Northern Arizona University with a degree
// 					in Applied Computer Science. Somewhere along the way, I fell in love
// 					with design. I enjoy any opportunity that allows me to use my coding
// 					and design skills in an original and creative way.
