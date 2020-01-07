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
			<div className='marginTopMed'>
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
				<ShowIf noAnimation thisValue={"linkedin"} thatValue={forYou}>
					<HeadingTwo>First Off</HeadingTwo>
					<Paragraph className=' '>
						I'd like to say thanks. You could have been wishing your coworker or
						some connection you don't really know a happy work anniversary but
						instead you're here, checking out my web app.
					</Paragraph>
					<Paragraph className=' '>
						If you have any feedback please let me know.
					</Paragraph>
				</ShowIf>
				{/* Reddit */}
				<ShowIf noAnimation thisValue={"reddit"} thatValue={forYou}>
					<HeadingTwo>First Off</HeadingTwo>
					<Paragraph className=' '>
						I'd like to say thanks. You could have been upvoting some reddit
						post but instead you're here, checking out my web app. I really
						appreciate you. ()
					</Paragraph>
					<Paragraph className=' '>
						Shoutout to r/webdev, r/reactjs/ ,r/design_critiques and
						r/web_design/. (Also, this web app doesn't work in in-app browser)
					</Paragraph>
				</ShowIf>

				{/* https://www.linkedin.com/jobs/view/1460515336/ */}
				{/* Visa */}
				{/* https://www.herbieduah.app/?=CyberSource */}

				<JobApplication
					jobID='indeed'
					job='UX Developer'
					company='Indeed'
					city='Austin'
					topping="contribute to Indeed's mission to help people get jobs."
					forYou={forYou}
				/>
				<JobApplication
					jobID='vrbo'
					job='UX Developer/Design Technologist'
					company='VRBO'
					city='Austin'
					topping='partner with the engineering teams to deliver great experiences and patterns for Vrbo travelers and suppliers.'
					forYou={forYou}
				/>
				<JobApplication
					jobID='adp'
					job='Associate UX Engineer/Lead UX Engineer'
					company='ADP'
					city='Pasadena'
					topping='deliver innovative HR technologies and solutions that help employees all over the world do their jobs better.'
					forYou={forYou}
				/>
				<JobApplication
					jobID='disneydev'
					job='Software Developer/Sr UX Engineer'
					company='Disney'
					city='Burbank'
					topping='align technology, content and distribution platforms to expand the Company’s global footprint and deliver world-class, personalized entertainment experiences to consumers around the world.'
					forYou={forYou}
				/>
				<JobApplication
					jobID='psjob'
					company='Playstation'
					job='Software Engineer II, Front End'
					city='Los Angeles'
					topping='apply web technologies to the core user experience on PlayStation®4 and beyond, with which millions of customers around the world interact daily.'
					forYou={forYou}
				/>
				<JobApplication
					jobID='google'
					company='Google'
					job='Software Engineer, Front End'
					city='Los Angeles'
					topping='develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. '
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
			</div>
		</Fragment>
	);
};

export const JobApplication = props => {
	const job = props.job;
	const city = props.city;
	const topping = props.topping ? ` and ${props.topping}` : "";
	const jobID = props.jobID;
	const company = props.company;
	const forYou = props.forYou;
	return (
		<Fragment>
			<ShowIf noAnimation thisValue={jobID} thatValue={forYou}>
				<Paragraph className='paddingLRParagraph'>
					I appreciate you taking the time to check out my application and
					portfolio. Hope all is well at the {city} location.
				</Paragraph>
				<Paragraph>
					I believe I have the skills for your {job} position. I'll also love to
					support {company}'s mission to
					{topping}. I designed and engineered this portfolio with a role like
					this in mind. Looking forward to hearing from you.
				</Paragraph>
				{/* <Paragraph>
					If I am not a good fit the role, please let me know why so I can learn
					to improve my skills. I hope you have a pleasant experience on my web
					app (I'm open to feedback on it too!).
				</Paragraph> */}
			</ShowIf>
		</Fragment>
	);
};
export const forYouHelper = forSomebody => {
	let person = forSomebody === "" ? "" : ` ${forSomebody}`;
	switch (forSomebody.toLowerCase()) {
		case "indeed":
			person = " Indeed Employer/Employee";
			return person;
		case "cybersource":
			person = " CyberSource Employer/Employee";
			return person;
		case "cloudflare":
			person = " Cloudflare Employer/Employee";
			return person;
		case "linkedin":
			person = " LinkedIn Connect";
			return person;
		case "vrbo":
			person = " Vrbo Employer/Employee";
			return person;
		case "adp":
			person = " ADP Employee";
			return person;
		case "psjob":
			person = " Playstation Employee";
			return person;
		case "ticket":
			person = " Ticketmaster Employee";
			return person;
		case "hulu":
			person = " Hulu Employee";
			return person;
		case "google":
			person = " Google Employee";
			return person;
		case "houzz":
			person = " Houzz Employee";
			return person;
		case "amazon":
			person = " Amazon Employee";
			return person;
		case "disneydev":
			person = " Disney Employee";
			return person;
		case "daliza":
			person = " My Love";
			return person;
		default:
			return person;
	}
};

// I am a Phoenix based a Web developer/designer with five years of
// 					experience. I graduated at Northern Arizona University with a degree
// 					in Applied Computer Science. Somewhere along the way, I fell in love
// 					with design. I enjoy any opportunity that allows me to use my coding
// 					and design skills in an original and creative way.
