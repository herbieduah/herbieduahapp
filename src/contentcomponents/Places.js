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
			<ContentShow more>
				<Header>{header}</Header>
				<Image src={placesmountainsFlagstaff} />
				<Image src={placesflagstaffRoadd} />
				<Image src={placesflagstaffWater} />
				<Image src={placestreesInAutumn} />
				<Image src={placesWinterMountain} />
				<Image src={placessnowyRoad} />
				<Image src={placesmysteriousDoor} />
				<Image src={placesicyAlley} />
				<Image src={placesflagstaffStreetOnAutumn} />
				<Image src={placesfallFlagstaff} />
				<Image src={placesevansTundra} />
				<Image src={placeschocolatefalls} />
				<Image src={placesbeautifulmountains} />
				<Image src={placesbeauifulsunset} />
				<ContentCategory category='photography' />
			</ContentShow>
		</Fragment>
	);
};

export default PeoplePage;
