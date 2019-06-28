/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import Text from "../stylecomponents/Text";
import Media from "../maincomponents/Media";
import Fade from "react-reveal/Fade";
import { ContentShow } from "../Actions";

const header = "HerbieDuah.app";

const HomePage = ({ contentProps }) => {
	// const { browserName, mobileModel } = contentProps;
	return (
		<Fragment>
			<ContentShow header={header} />
			<ContentShow less>
				<Text>
					There is an app for everything, in the future, I believe there is
					going to be an app for everyone. I am Herbie Duah, and this is my app.
				</Text>
			</ContentShow>
			<ContentShow more>
				<div className='container'>
					<div className='container-full'>
						<Fade up duration={1500}>
							<Media
								type='image'
								src='https://scontent-lax3-2.cdninstagram.com/vp/2c0c284778f47e789fa8706d0d6adc8c/5D7B9E1F/t51.2885-15/e35/p1080x1080/60992958_365983194122426_8030120158390547331_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com'
							/>
						</Fade>
					</div>
					<Fade bottom duration={1500}>
						<Text m>
							Don't bother with the menu links. I need to make sure this page is
							good before I copy and paste the code to all the different menu
							items.
						</Text>
						<Text m>
							So yeah. I think I am done with the core functionality of the
							website. I am going to keep adding ways to customize, images,
							videos,smooth animations and many mroe content on this page and
							make sure everything is good.
						</Text>
						<Text m>
							There is an app for everything, I think in the future there is
							going to be an app for everyone{" "}
							<span role='img' aria-label='shock'>
								😱
							</span>
							. I know. The reason why I have the slider is because in real life
							if someone asks where you work or what you do, you give them a
							short answer
							<span role='img' aria-label='shrug'>
								🤷🏿‍
							</span>
							. If they are interested, they will ask more questions...hence the
							slider
							<span role='img' aria-label='mindblown'>
								🤯
							</span>
						</Text>
						{/* <Text m>
							Wanna see something crazy, my website knows that you on an{" "}
							{mobileModel} scrolling through my site on {browserName}
						</Text> */}

						<Text m>
							I am gonna be texting/messaging to check out some things for me.
							Again... thank you.
						</Text>
					</Fade>
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default HomePage;
