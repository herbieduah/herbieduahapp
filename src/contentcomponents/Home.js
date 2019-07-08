/* eslint-disable no-unused-expressions */
import React, { Fragment, useState } from "react";
import Text from "../stylecomponents/Text";
import Media from "../maincomponents/Media";
import Fade from "react-reveal/Fade";
import { ContentShow, ThisValueEqualsState } from "../ComponentHelpers";
import Modal from "../maincomponents/Modal";

const header = "HerbieDuah.app";
// There is an app for everything, in
// 					the future, I believe there is going to be an app for everyone. I am
// 					Herbie Duah, and this is my app.

const HomePage = ({ contentProps }) => {
	const { whom } = contentProps;

	return (
		<Fragment>
			<ContentShow header={header} />
			<ContentShow less>
				<Text>This App is Alpha</Text>
			</ContentShow>
			<ContentShow more>
				<div className='container'>
					<ThisValueEqualsState thisValue='Nuvi' stateValue={whom}>
						<Text xl>How is it going in Bunkston</Text>
					</ThisValueEqualsState>
					<ThisValueEqualsState thisValue='Daliza' stateValue={whom}>
						<Text xl>How di do McDimple face</Text>
					</ThisValueEqualsState>
					<ThisValueEqualsState thisValue='Mel' stateValue={whom}>
						<Text xl>
							Yo Mel, can't wait to be done with this shit so we can get REALLY
							get to work on C$. I have it as a coming soon on my site.
						</Text>
					</ThisValueEqualsState>
					<ThisValueEqualsState
						thisValue={"George" || "Clown"}
						stateValue={whom}>
						<Text xl>You a clown George</Text>
					</ThisValueEqualsState>
					<ThisValueEqualsState thisValue='Wieland' stateValue={whom}>
						<Text xl>Hi Burrito</Text>
					</ThisValueEqualsState>
					<ThisValueEqualsState thisValue='Greg' stateValue={whom}>
						<Text xl>
							At Ease, Lietunenent Bunk... I fucking mispelled that shit as
							always
						</Text>
					</ThisValueEqualsState>
					<ThisValueEqualsState thisValue='Mooney' stateValue={whom}>
						<Text xl>If you're grinning, you're winning!</Text>
					</ThisValueEqualsState>
					<ThisValueEqualsState thisValue='Johnny' stateValue={whom}>
						<Text xl>Johnny why you so ugly bro?</Text>
					</ThisValueEqualsState>
					<div className='container-full'>
						<Fade up duration={1500}>
							<Media
								type='image'
								src='https://scontent-lax3-2.cdninstagram.com/vp/2c0c284778f47e789fa8706d0d6adc8c/5D7B9E1F/t51.2885-15/e35/p1080x1080/60992958_365983194122426_8030120158390547331_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com'
							/>
						</Fade>
					</div>
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default HomePage;
