import React, { useContext, Fragment } from "react";
import MenuContainer from "../stylecomponents/MenuContainer";
import {
	isMobile,
	useWindowResize,
	revealValues,
	revealSecs
} from "../helpers";
import SubMenu from "./SubMenu";
import { globalState } from "../State";
import Fade from "react-reveal/Fade";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Text from "../stylecomponents/Text";

export const ContentMenu = () => {
	const { contentWidth: cw, contentHeight: ch } = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	return (
		<MenuContainer isMobile={isMobile(ww, wh)} isShowingMore={isShowingMore}>
			<Fade up duration={revealSecs}>
				{!isShowingMore ? (
					<Tabs defaultIndex={-1}>
						<TabList>
							<Tab>
								<Text format extrabold m>
									Work
								</Text>
							</Tab>
							<Tab>
								<Text format extrabold m>
									About
								</Text>
							</Tab>
							<Tab>
								<Text format extrabold m>
									Customize
								</Text>
							</Tab>
							<Tab>
								<Text format extrabold m>
									Contact
								</Text>
							</Tab>
						</TabList>

						<TabPanel>
							<SubMenu isShowingMore={isShowingMore} category='work' />
						</TabPanel>
						<TabPanel>
							<SubMenu isShowingMore={isShowingMore} category='about' />
						</TabPanel>
						<TabPanel>
							<SubMenu isShowingMore={isShowingMore} category='customize' />
						</TabPanel>
						<TabPanel>
							<SubMenu isShowingMore={isShowingMore} category='contact' />
						</TabPanel>
					</Tabs>
				) : (
					<Fragment>
						<SubMenu isShowingMore={isShowingMore} category='work' />
						<SubMenu isShowingMore={isShowingMore} category='about' />
						<SubMenu isShowingMore={isShowingMore} category='customize' />
						<SubMenu isShowingMore={isShowingMore} category='contact' />
						<div className='offset' />
					</Fragment>
				)}
				{/* <nav className='menu'>
				<ul className='menu__list'>
					<Fade
						cascade
						right={!isMobile(ww, wh)}
						left={isMobile(ww, wh)}
						duration={1000}>
						<div>
							<li className='menu__item'>
								<SubMenu  isShowingMore={isShowingMore} category='work' />
							</li>
							<li className='menu__item'>
								<SubMenu  isShowingMore={isShowingMore} category='about' />
							</li>
							<li className='menu__item'>
								<SubMenu  isShowingMore={isShowingMore} category='customize' />
							</li>
							<li className='menu__item'>
								<SubMenu  isShowingMore={isShowingMore} category='contact' />
							</li>
						</div>
					</Fade>
				</ul>
			</nav> */}
			</Fade>
		</MenuContainer>
	);
};

export default ContentMenu;
