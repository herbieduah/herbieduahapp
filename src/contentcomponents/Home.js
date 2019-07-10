/* eslint-disable no-unused-expressions */
import React, { Fragment, useState } from "react";
import Text from "../stylecomponents/Text";
import Media from "../maincomponents/Media";
import Fade from "react-reveal/Fade";
import { ContentShow, ThisValueEqualsState } from "../ComponentHelpers";
import Modal from "../maincomponents/Modal";
import testVideo from "../media/videos/JeremyScottDesktop_9.mp4";
import ReactPlayer from "react-player";

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
				<Text>
					Still in development...{whom}.
					<ThisValueEqualsState thisValue='Connor' stateValue={whom}>
						<Text xl>BIG DOGGG</Text>
					</ThisValueEqualsState>
				</Text>
			</ContentShow>
			<ContentShow more>
				<div className='container'>
					<Text xs>
						XS Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus
						sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
					</Text>
					<Text s>
						S Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus
						sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
					</Text>
					<Text m>
						M Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus
						sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
					</Text>
					<Text l>
						L Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus
						sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
					</Text>
					<Text xl>
						XL Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus
						sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
					</Text>
					<Text xxl>
						XXL Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus
						sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
					</Text>
					<ThisValueEqualsState thisValue='Connor' stateValue={whom}>
						<Text xl>ROOF ROOF</Text>
					</ThisValueEqualsState>
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
							<ReactPlayer
								url={testVideo}
								width='100%'
								height='100%'
								playing
								loop
								muted
								playsinline
							/>
						</Fade>
					</div>
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default HomePage;
