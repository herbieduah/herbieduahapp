import React, { useContext, Fragment } from "react";
import MenuContainer from "../stylecomponents/MenuContainer";
import { isMobile, useWindowResize, revealValues } from "../helpers";
import { MenuAction } from "../Actions";
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
			{!isShowingMore ? (
				<Tabs>
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
								Contact
							</Text>
						</Tab>
						<Tab>
							<Text format m>
								Customize
							</Text>
						</Tab>
					</TabList>
					<TabPanel>
						<MenuAction category='work' />
					</TabPanel>
					<TabPanel>
						<MenuAction category='about' />
					</TabPanel>
					<TabPanel>
						<MenuAction category='contact' />
					</TabPanel>
					<TabPanel>
						<MenuAction category='customize' />
					</TabPanel>
				</Tabs>
			) : (
				<Fragment>
					<MenuAction category='work' />
					<MenuAction category='about' />
					<MenuAction category='customize' />
					<MenuAction category='contact' />
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
								<MenuAction category='work' />
							</li>
							<li className='menu__item'>
								<MenuAction category='about' />
							</li>
							<li className='menu__item'>
								<MenuAction category='customize' />
							</li>
							<li className='menu__item'>
								<MenuAction category='contact' />
							</li>
						</div>
					</Fade>
				</ul>
			</nav> */}
		</MenuContainer>
	);
};

export default ContentMenu;
