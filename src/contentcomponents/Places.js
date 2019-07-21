/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import { Paragraph, HeadingTwo, Image, Header } from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";
// import Emoji from "a11y-react-emoji";
import treesInAutumn2000x3004 from "../media/images/places/treesInAutumn.jpg";
import snowMountainLake1480x985 from "../media/images/places/photography-winterMountain-986.jpg";
import snowyRoad2000x2999 from "../media/images/places/snowyRoad.jpg";
import greenGrass1480x2220 from "../media/images/places/photography-mountains-2220.jpg";
import bwMountain1480x832 from "../media/images/places/photography-bw-832.jpg";
import marshallLake1480x987 from "../media/images/places/photography-flagstaffWater-987.jpg";
import flagstaffRoad1480x986 from "../media/images/places/photography-flagstafRoad-986.jpg";
import mysteriousDoor2000x2999 from "../media/images/places/mysteriousDoor.jpg";
import flagstaffStreetOnAutumn2000x3000 from "../media/images/places/flagstaffStreetOnAutumn.jpg";
import icyAlley2000x3001 from "../media/images/places/icyAlley.jpg";
import evansTundra2000x3331 from "../media/images/places/evansTundra.jpg";
import chocolatefalls2000x1333 from "../media/images/places/chocolatefalls.jpg";
import beauifulsunset2000x1333 from "../media/images/places/beauifulsunset.jpg";

const header = "Places";

const PeoplePage = ({ contentProps }) => {
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>I take pictures of places?</Paragraph>
			</ContentShow>
			<ContentShow more>
				<div className='container'>
					<Header>{header}</Header>
					<Paragraph>
						Basically any pictures that do not evolve people
					</Paragraph>
					<Image src={treesInAutumn2000x3004} />
					<Image src={snowMountainLake1480x985} />
					<Image src={snowyRoad2000x2999} />
					<Image src={greenGrass1480x2220} />
					<Image src={bwMountain1480x832} />
					<Image src={marshallLake1480x987} />
					<Image src={flagstaffRoad1480x986} />
					<Image src={mysteriousDoor2000x2999} />
					<Image src={flagstaffStreetOnAutumn2000x3000} />
					<Image src={icyAlley2000x3001} />
					<Image src={evansTundra2000x3331} />
					<Image src={chocolatefalls2000x1333} />
					<Image src={beauifulsunset2000x1333} />
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default PeoplePage;
