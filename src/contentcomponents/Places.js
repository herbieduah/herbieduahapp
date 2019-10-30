/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	Image,
	Header,
	ContentCategory,
	ContentShow
} from "../ContentHelpers";

import {
	placesmountainsFlagstaff,
	placesflagstaffRoadd,
	placesflagstaffWater,
	placestreesInAutumn,
	placesWinterMountain,
	placessnowyRoad,
	placesmysteriousDoor,
	placesicyAlley,
	placesflagstaffStreetOnAutumn,
	placesfallFlagstaff,
	placesevansTundra,
	placeschocolatefalls,
	placesbeautifulmountains,
	placesbeauifulsunset
} from "../MediaVariables";
const header = "Places";

const PeoplePage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<Header less>{header}</Header>
				<Paragraph less>I take pictures of different places.</Paragraph>
				<div className='less__container paddingLRSm'>
					<Image src={placesbeautifulmountains} />
					<Image src={placesbeauifulsunset} />
				</div>
			</ContentShow>
			<ContentShow containerLarge more>
				<Header className='container'>{header}</Header>
				<Paragraph className='container' center>
					Here are some of my favorite photos I've taken at different places.
				</Paragraph>
				<ul className='c-photos'>
					<li>
						<Image src={placesmountainsFlagstaff} />
					</li>
					<li>
						<Image src={placesflagstaffRoadd} />
					</li>
					<li>
						<Image src={placesflagstaffWater} />
					</li>
					<li>
						<Image src={placestreesInAutumn} />
					</li>
					<li>
						<Image src={placesWinterMountain} />
					</li>
					<li>
						<Image src={placessnowyRoad} />
					</li>
					<li>
						<Image src={placesmysteriousDoor} />
					</li>
					<li>
						<Image src={placesicyAlley} />
					</li>
					<li>
						<Image src={placesflagstaffStreetOnAutumn} />
					</li>
					<li>
						<Image src={placesevansTundra} />
					</li>
					<li>
						<Image src={placeschocolatefalls} />
					</li>
					<li>
						<Image src={placesbeautifulmountains} />
					</li>
					<li>
						<Image src={placesbeauifulsunset} />
					</li>
				</ul>
				<ContentCategory category='photography' className='container' />
			</ContentShow>
		</Fragment>
	);
};

export default PeoplePage;
