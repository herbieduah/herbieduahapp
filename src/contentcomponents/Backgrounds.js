/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	Header,
	GenerateTheme,
	ContentCategory,
	LessContent,
	ContentShow,
	Link,
	Instructions,
	Small,
	ElementReveal,
	ZigZag
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
				<LessContent header={header}>
					I chose a splendid selection of backgrounds for your choosing.
				</LessContent>
				<div className='less__container'>
					<GenerateTheme type='color' />
				</div>
			</ContentShow>
			<ContentShow containerLarge more>
				<ZigZag>
					<Header>{header}</Header>
				</ZigZag>
				<ZigZag>
					<Paragraph>
						I have chosen an extensive collection of colors, gradients, and
						patterns you can select to change the look of this web app in hopes
						that you will find one that you'd like.
					</Paragraph>
				</ZigZag>
				<ZigZag>
					<Small className='marginTopMed'>
						By default, the Light Theme and Dark Theme backgrounds change
						automatically depending on your device dark mode settings or the
						time you are accessing this web app.
					</Small>
					{/* <Paragraph>
					The border around the circle is the font color, so if a circle doesn't
					have a border, then font color is the current background.
				</Paragraph> */}

					<ReactTabs defaultIndex={0}>
						<ElementReveal className='paddingLRSm'>
							<TabList className='react-tabs__tab-list'>
								<Tab tabIndex='0'>
									<Text format xs tertiary className='marginLRSm'>
										Colors
									</Text>
								</Tab>
								<Tab tabIndex='0'>
									<Text format xs tertiary className='marginLRSm'>
										Gradients
									</Text>
								</Tab>
								<Tab tabIndex='0'>
									<Text format xs tertiary className='marginLRSm'>
										Patterns
									</Text>
								</Tab>
							</TabList>
						</ElementReveal>
						<TabPanel>
							<GenerateTheme type='color' />
							<Paragraph className='marginTopMed'>
								Big shout out to{" "}
								<Link href='https://www.pantone.com/color-intelligence/fashion-color-trend-report/fashion-color-trend-report-new-york-spring-summer-2020'>
									Pantone
								</Link>{" "}
								for their 2020 Color Trend Report.
							</Paragraph>
						</TabPanel>
						<TabPanel>
							<GenerateTheme type='gradient' />
							<Paragraph className='marginTopMed'>
								Big shout out to{" "}
								<Link href='https://webgradients.com/'>webgradients.com</Link>{" "}
								for their stellar choices of gradients and the names to with
								theme.
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
				</ZigZag>
				<ContentCategory category='customize' />
			</ContentShow>
		</Fragment>
	);
};

export default BackgroundsPage;
