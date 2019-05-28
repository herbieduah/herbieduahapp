import React, { useContext } from "react";
import { globalState } from "../State";
import Text from "../stylecomponents/Text";
import ContentContainer from "../stylecomponents/ContentContainer";
import Media from "../maincomponents/Media";
import { revealValues, useWindowResize } from "../helpers";
import { browserName, mobileModel } from "react-device-detect";

export const Home = props => {
	const uniqueID = "home";
	const {
		currentContent,
		setCurrentContent,
		contentWidth: cw,
		contentHeight: ch,
		dragging
	} = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	const showMe = uniqueID === currentContent ? true : false;
	let subMenu = props.menu;
	console.log(revealValues(values));

	if (showMe) {
		return (
			<ContentContainer
				className='content'
				isShowingMore={isShowingMore}
				dragging={dragging}>
				<header className='content__header'>
					<Text h1 m bold>
						Herbie Duah App Test
					</Text>
				</header>
				<Text m className='content__less'>
					Hello. Thank you for testing my app. First drag down (drag right on
					Desktop) the little circle to read more.
				</Text>
				<div className='content__more'>
					<Text m>
						Hello again. Don't bother with the menu links. I need to make sure
						this page is good before I copy and paste the code to all the
						different menu items.
					</Text>
					<Text m>
						So yeah. I think I am done with the core functionality of the
						website. I am going to keep adding ways to customize, images,
						videos,smooth animations and many mroe content on this page and make
						sure everything is good.
					</Text>
					<Text m>
						Wanna see something crazy, my website knows that you on a{" "}
						{mobileModel} scrolling through my site on {browserName}
					</Text>

					<Text m>
						I am gonna be texting/messaging to check out somethings for me.
						Again... thank you.
					</Text>

					<Media
						type='image'
						width='640'
						height='360'
						src='https://placebear.com/640/360'
					/>
				</div>
			</ContentContainer>
		);
	} else if (subMenu) {
		return (
			<li className='subMenu__link' onClick={() => setCurrentContent(uniqueID)}>
				Sub Menu
			</li>
		);
	} else {
		return null;
	}
};
export default Home;
