/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	Image,
	Header,
	ContentCategory,
	ContentShow,
	LessContent,
	ZigZag
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
				<LessContent header={header}>
					I take pictures of different places.
				</LessContent>
				<div className='less__container paddingLRSm'>
					<Image alt='INSERT ALT HERE' src={placesbeautifulmountains} />
					<Image alt='INSERT ALT HERE' src={placesbeauifulsunset} />
				</div>
			</ContentShow>
			<ContentShow containerLarge more>
				<ZigZag>
					<Header>{header}</Header>
					<Paragraph>
						Here are some of my favorite photos I've taken at different places.
					</Paragraph>
				</ZigZag>
				<ZigZag>
					<Image
						alt='mountains in black and white'
						src={placesmountainsFlagstaff}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of a road with nice looking trees'
						src={placesflagstaffRoadd}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='cloudy skys looking over a lake'
						src={placesflagstaffWater}
					/>
				</ZigZag>
				<ZigZag>
					<Image alt='wall of trees in autumn' src={placestreesInAutumn} />
				</ZigZag>
				<ZigZag>
					<Image
						alt='reflection of a snowy mountain'
						src={placesWinterMountain}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='road in snow that is leading into a curve'
						src={placessnowyRoad}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='black and white picture of a mysterious door'
						src={placesmysteriousDoor}
					/>
				</ZigZag>
				<ZigZag>
					<Image alt='picture of an icy alley' src={placesicyAlley} />
				</ZigZag>
				<ZigZag>
					<Image
						alt='A road with overlapping fall trees'
						src={placesflagstaffStreetOnAutumn}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='toyota tundra driving through dirt'
						src={placesevansTundra}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='a beautiful chocolate looking waterfall'
						src={placeschocolatefalls}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='gorgeous landscape mountain'
						src={placesbeautifulmountains}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='beautiful purple skies with a within a snowy area'
						src={placesbeauifulsunset}
					/>
				</ZigZag>
				<ContentCategory category='photography' className='container' />
			</ContentShow>
		</Fragment>
	);
};

export default PeoplePage;
