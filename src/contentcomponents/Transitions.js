/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	// HeadingTwo,
	// Image,
	ZigZag,
	Header,
	ContentShow,
	ContentCategory,
	LessContent,
	Small,
	GenerateTransition,
	Link,
	Instructions,
	ElementReveal
} from "../ContentHelpers";
// import { ShowIf } from "../ComponentHelpers";
import "animate.css";
import { ReactTabs } from "../stylecomponents/Base";
import { Tab, TabList, TabPanel } from "react-tabs";
import Text from "../stylecomponents/Text";
// import Emoji from "a11y-react-emoji";

const header = "Animations";

const TransitionsPage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<LessContent header={header}>
					You can choose how you bring the elements on this web app to life.
				</LessContent>
				<div className='less__container'>
					{/* <Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
						risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta
						gravida at eget metus. Sed posuere consectetur est at lobortis.
						Maecenas sed diam eget risus varius blandit sit amet non magna.
					</Paragraph> */}
				</div>
			</ContentShow>
			<ContentShow containerLarge more>
				{/* normal crazy ridiculous */}
				<ZigZag>
					<Header beta>{header}</Header>
					<Paragraph>
						Animations bring the elements of this web app to life. I added an
						extensive collection of random animations for you to choose how you
						want to bring this web app to life.
					</Paragraph>
					<Small className='marginTopMed'>
						Refreshing web app resets animation to default.
					</Small>
				</ZigZag>

				<ZigZag>
					<Small className='marginTopXLarge'>
						Tip: After you choose an animation, navigate to a different page to
						see it in action.
					</Small>
					<ReactTabs defaultIndex={0}>
						<ElementReveal className='paddingLRSm'>
							<TabList className='react-tabs__tab-list'>
								<Tab tabIndex='0'>
									<Text format xs tertiary className='marginLRSm'>
										Smooth
									</Text>
								</Tab>
								<Tab tabIndex='0'>
									<Text format xs tertiary className='marginLRSm'>
										Crazy
									</Text>
								</Tab>
							</TabList>
						</ElementReveal>
						<TabPanel>
							<GenerateTransition type='smooth' />
						</TabPanel>
						<TabPanel>
							<GenerateTransition type='crazy' />
						</TabPanel>
					</ReactTabs>
					{/* <ShowIf noAnimation thisValue={forDev} thatValue={true}> */}
					<div className='marginTopMed'>
						<Paragraph>
							Shout out to <Link href='https://daneden.me/'>Daniel Edens'</Link>{" "}
							amazing{" "}
							<Link href='https://daneden.github.io/animate.css/'>
								Animate.css
							</Link>{" "}
							library.
						</Paragraph>
					</div>
				</ZigZag>
				<ContentCategory category='customize' />
				{/* </ShowIf> */}
			</ContentShow>
		</Fragment>
	);
};

export default TransitionsPage;
