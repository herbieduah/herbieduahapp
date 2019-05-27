import React, { useContext } from "react";
import { globalState } from "../State";
import Text from "../stylecomponents/Text";
import ContentContainer from "../stylecomponents/ContentContainer";
import Media from "../maincomponents/Media";
import { revealValues, useWindowResize } from "../helpers";

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

	if (showMe) {
		return (
			<ContentContainer
				className='content'
				isShowingMore={isShowingMore}
				dragging={dragging}>
				<header className='content__header'>
					<Text h1>Hi, I am Herbie</Text>
				</header>
				<Text m className='content__less'>
					There is an app for everything. In the future, there is going to be an
					app for everyone. Hi, I am Herbie Duah and this is my app.
				</Text>
				<div className='content__more'>
					<Text m>So what do I mean by that?</Text>
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
