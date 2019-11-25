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
				</ZigZag>
				<ZigZag>
					<Paragraph>
						Here are some of my favorite photos I've taken at different places.
					</Paragraph>
				</ZigZag>
				<ul className='c-photos'>
					<li>
						<Image
							alt='mountains in black and white'
							src={placesmountainsFlagstaff}
						/>
					</li>
					<li>
						<Image
							alt='photograph of a road with nice looking trees'
							src={placesflagstaffRoadd}
						/>
					</li>
					<li>
						<Image
							alt='cloudy skys looking over a lake'
							src={placesflagstaffWater}
						/>
					</li>
					<li>
						<Image alt='wall of trees in autumn' src={placestreesInAutumn} />
					</li>
					<li>
						<Image
							alt='reflection of a snowy mountain'
							src={placesWinterMountain}
						/>
					</li>
					<li>
						<Image
							alt='road in snow that is leading into a curve'
							src={placessnowyRoad}
						/>
					</li>
					<li>
						<Image
							alt='black and white picture of a mysterious door'
							src={placesmysteriousDoor}
						/>
					</li>
					<li>
						<Image alt='picture of an icy alley' src={placesicyAlley} />
					</li>
					<li>
						<Image
							alt='A road with overlapping fall trees'
							src={placesflagstaffStreetOnAutumn}
						/>
					</li>
					<li>
						<Image
							alt='toyota tundra driving through dirt'
							src={placesevansTundra}
						/>
					</li>
					<li>
						<Image
							alt='a beautiful chocolate looking waterfall'
							src={placeschocolatefalls}
						/>
					</li>
					<li>
						<Image
							alt='gorgeous landscape mountain'
							src={placesbeautifulmountains}
						/>
					</li>
					<li>
						<Image
							alt='beautiful purple skies with a within a snowy area'
							src={placesbeauifulsunset}
						/>
					</li>
				</ul>
				<ContentCategory category='photography' className='container' />
			</ContentShow>
		</Fragment>
	);
};

export default PeoplePage;
