import React, { useContext, Fragment } from "react";
import MenuContainer from "../stylecomponents/MenuContainer";
import { isMobile, useWindowResize, revealValues } from "../helpers";
import SubMenu from "./SubMenu";
import { globalState } from "../State";
// import Fade from "react-reveal/Fade";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Text from "../stylecomponents/Text";

export const ContentMenu = () => {
	const { contentWidth: cw, contentHeight: ch } = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	return (
		<MenuContainer isMobile={isMobile(ww, wh)} isShowingMore={isShowingMore}>
			{!isShowingMore ? (
				<Tabs defaultIndex={3}>
					<TabList>
						<Tab>
							<Text format m>
								Work
							</Text>
						</Tab>
						<Tab>
							<Text format m>
								About
							</Text>
						</Tab>
						<Tab>
							<Text format m>
								Customize
							</Text>
						</Tab>
						<Tab>
							<Text format m>
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
		</MenuContainer>
	);
};

export default ContentMenu;
