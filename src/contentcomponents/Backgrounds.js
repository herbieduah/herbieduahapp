/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	Header,
	GenerateTheme,
	ContentCategory,
	ContentShow,
	Link,
	ElementReveal
} from "../ContentHelpers";
import { ReactTabs } from "../stylecomponents/Base";
import { Tab, TabList, TabPanel } from "react-tabs";
import Text from "../stylecomponents/Text";
// import Emoji from "a11y-react-emoji";

const header = "Backgrounds";

const BackgroundsPage = ({ contentProps }) => {
	const { fullScreen , minimalMode } = contentProps;
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
					backgrounds you can select to change the look of this web app in hopes
					that you will find one that you'd like.
				</Paragraph>
				<Paragraph>
					The border around the circle is the font color, so if a circle doesn't
					have a border, then font color is the current background.
				</Paragraph>

				<ReactTabs defaultIndex={0} className='c-margin-top-med'>
					<ElementReveal>
						<TabList>
							<Tab>
								<Text format xs wide>
									Colors
								</Text>
							</Tab>
							<Tab>
								<Text format xs wide>
									Gradients
								</Text>
							</Tab>
							<Tab>
								<Text format xs wide>
									Textures/Patterns
								</Text>
							</Tab>
						</TabList>
					</ElementReveal>
					<TabPanel>
						<GenerateTheme type='color' />
						<Paragraph className='c-margin-top-med'>
							Big shout out to{" "}
							<Link href='https://cloudflare.design/color/'>
								cloudflare.design/color
							</Link>{" "}
							for accessible color combination tool.
						</Paragraph>
					</TabPanel>
					<TabPanel>
						<GenerateTheme type='gradient' />
						<Paragraph className='c-margin-top-med'>
							Big shout out to{" "}
							<Link href='https://webgradients.com/'>webgradients.com</Link> for
							their stellar choices of gradients and the names to with theme.
						</Paragraph>
					</TabPanel>
					<TabPanel>
						<GenerateTheme type='bg' />
						<Paragraph className='c-margin-top-med'>
							Big shout out to{" "}
							<Link href='https://www.toptal.com/designers/subtlepatterns/'>
								Toptal
							</Link>{" "}
							for their subtle background collection.
						</Paragraph>
					</TabPanel>
				</ReactTabs>

				<ContentCategory fullScreen={fullScreen} minimalMode={minimalMode} category='customize' />
			</ContentShow>
		</Fragment>
	);
};

export default BackgroundsPage;
