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
	const { fullScreen } = contentProps;
	return (
		<Fragment>
			<ContentShow less>
				<Header less>{header}</Header>
				<Paragraph less>
					I chose a splendid selection of subtle backgrounds for your choosing.
				</Paragraph>
				<div className='less__container'>
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
						risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta
						gravida at eget metus. Sed posuere consectetur est at lobortis.
						Maecenas sed diam eget risus varius blandit sit amet non magna.
					</Paragraph>
				</div>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				{/* <div className='c-border marginLR paddingTB'> */}

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
							<Link href='https://webgradients.com/'>webgradients.com</Link> for
							their stellar choices of gradients and the names to with theme.
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

				<ContentCategory fullScreen={fullScreen} category='customize' />
			</ContentShow>
		</Fragment>
	);
};

export default BackgroundsPage;
