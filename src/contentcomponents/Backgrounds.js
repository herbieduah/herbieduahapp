/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	Header,
	GenerateTheme,
	ContentCategory,
	ContentShow,
	Link,
	Instructions,
	ElementReveal
} from "../ContentHelpers";
import { ReactTabs } from "../stylecomponents/Base";
import { Tab, TabList, TabPanel } from "react-tabs";
import Text from "../stylecomponents/Text";
// import Emoji from "a11y-react-emoji";

const header = "Backgrounds";

const BackgroundsPage = ({ contentProps }) => {
	return (
		<Fragment>
			<ContentShow less>
				<Header less>{header}</Header>
				<Paragraph less>
					I chose a splendid selection of backgrounds for your choosing.
				</Paragraph>
				<div className='less__container'>
					<GenerateTheme type='color' />
				</div>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Paragraph>
					I have chosen an extensive collection of colors, gradients, and
					patterns you can select to change the look of this web app in hopes
					that you will find one that you'd like.
				</Paragraph>
				<Instructions className='marginTopLarge'>
					Select block to change background.
				</Instructions>
				{/* <Paragraph>
					The border around the circle is the font color, so if a circle doesn't
					have a border, then font color is the current background.
				</Paragraph> */}

				<ReactTabs defaultIndex={0} className='marginTopMed '>
					<ElementReveal>
						<TabList className='react-tabs__tab-list'>
							<Tab tabIndex='0'>
								<Text format m tertiary className='marginLRSm'>
									Colors
								</Text>
							</Tab>
							<Tab tabIndex='0'>
								<Text format m tertiary className='marginLRSm'>
									Gradients
								</Text>
							</Tab>
							<Tab tabIndex='0'>
								<Text format m tertiary className='marginLRSm'>
									Patterns
								</Text>
							</Tab>
						</TabList>
					</ElementReveal>
					<TabPanel>
						<GenerateTheme type='color' />
						<Paragraph className='marginTopMed'>
							Big shout out to{" "}
							<Link href='https://cloudflare.design/color/'>
								cloudflare.design/color
							</Link>{" "}
							for accessible color combination tool.
						</Paragraph>
					</TabPanel>
					<TabPanel>
						<GenerateTheme type='gradient' />
						<Paragraph className='marginTopMed'>
							Big shout out to{" "}
							<Link href='https://webgradients.com/'>webgradients.com</Link> for
							their stellar choices of gradients and the names to with theme.
						</Paragraph>
					</TabPanel>
					<TabPanel>
						<GenerateTheme type='bg' />
						<Paragraph className='marginTopMed'>
							Big shout out to{" "}
							<Link href='https://www.toptal.com/designers/subtlepatterns/'>
								Toptal
							</Link>{" "}
							for their subtle background collection.
						</Paragraph>
					</TabPanel>
				</ReactTabs>

				<ContentCategory category='customize' />
			</ContentShow>
		</Fragment>
	);
};

export default BackgroundsPage;
