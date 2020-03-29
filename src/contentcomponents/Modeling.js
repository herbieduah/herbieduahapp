/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import {
	ContentShow,
	Paragraph,
	Image,
	Link,
	Figure,
	LessContent,
	Header,
	Figcaption,
	ZigZag,
	ContentCategory
} from "../ContentHelpers";
// import herbieVictoriaNaboursScratch1480x2639 from "../media/images/modeling/photography-herbieVictoriaNaboursScratch-2639.jpg";
// import herbieVictoriaNaboursJacket1480x2219 from "../media/images/modeling/photography-herbieVictoriaNaboursJacket-2219.jpg";
// import herbieVictoriaNabours1480x2219 from "../media/images/modeling/photography-herbieVictoriaNabours-2219.jpg";
// import herbieUmberto1480x2220 from "../media/images/modeling/photography-herbieUmberto2-2220.jpg";
// import herbieUmbertoTwo1480x2220 from "../media/images/modeling/photography-herbieUmberto-2220.jpg";
// import herbieJacketNabours1480x2219 from "../media/images/modeling/photography-herbieJacketNabours-2219.jpg";
// import herbieConner1480x1851 from "../media/images/modeling/photography-herbieConner2-1851.jpg";
// import herbieCalixRob2048x1152 from "../media/images/modeling/robcaliwide.JPG";
// import herbieByNae1480x1973 from "../media/images/modeling/photography-herbieByNae-1973.jpg";
// import herbieByDyesa1480x2220 from "../media/images/modeling/photography-herbieByDyesa-2220.jpg";
// import herbieByConner1480x1980 from "../media/images/modeling/photography-herbieByConner-986.jpg";
// import herbiebyAndy1480x971 from "../media/images/modeling/photography-herbiebyAndy-971.jpg";
// import brianaPhoto1480x2221 from "../media/images/modeling/photography-brianaPhoto-2221.jpg";
// import bethanyBaldwin2000x1333 from "../media/images/modeling/ByBethanyBaldwin.jpg";
// import bethanyBaldwin2000x3096 from "../media/images/modeling/ByBethanyBaldwin2.jpg";

import {
	modelingSnowInFlagstaffConnerArmsFold,
	modelingRobCaliLandscape,
	modelingAndyDauterman,
	modelingBethanyBaldwinDTFlagstaff,
	modelingceiphersClothing,
	modelingConnerSnow,
	// modelingUmbertoScienceMuseum,
	modelingUmbertoScienceMuseumHandsFolded,
	// modelingUmbertoScienceMuseumIPhone,
	modelingSnowInFlagstaffConner,
	modelingNaboursFavorite,
	modelingJacketHoldNaboursDown,
	// modelingInCaliWithRob,
	// modelingJacketHoldNabours,
	modelingDyesaDTPhoenix,
	modelingByNae,
	modelingBWMembersONly,
	modelingBrianaAfrican,
	modelingBethanyBAldWinsStars
} from "../MediaVariables";

const header = "Modeling";

const Modeling = () => {
	return (
		<Fragment>
			<ContentShow less>
				<LessContent header={header}>
					Sometimes, I like to stand infront of the camera and have talented
					people take pictures of me.
				</LessContent>
				<div className='less__container paddingLRSm'>
					<Image src={modelingJacketHoldNaboursDown} />
					<Image src={modelingBethanyBAldWinsStars} />
					<Image src={modelingConnerSnow} />
				</div>
			</ContentShow>
			<ContentShow containerLarge more className='c-photos no-margin'>
				<ZigZag>
					<Header>{header}</Header>
					<Paragraph className="paddingBottomLarge">
						Here are some of my favorite photos of me taken by some amazing
						photographers.
					</Paragraph>
				</ZigZag>
				<ZigZag>
					<Figure
						alt='Photo of me in black and white wearing a members only jacket'
						src={modelingBWMembersONly}>
						<Figcaption>
							Taken by{" "}
							<Link href='https://www.instagram.com/vmnphoto/'>@vmnphoto</Link>
						</Figcaption>
					</Figure>
				</ZigZag>
				<ZigZag>
					<Figure
						alt='Photo of me in a members only jacket looking very stressed'
						src={modelingNaboursFavorite}>
						<Figcaption>
							Taken by{" "}
							<Link href='https://www.instagram.com/vmnphoto/'>@vmnphoto</Link>
						</Figcaption>
					</Figure>
				</ZigZag>
				{/* <ZigZag><Figure alt="Photo of me" src={modelingJacketHoldNaboursDown}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/vmnphoto/'>@vmnphoto</Link>
					</Figcaption>
				</Figure></ZigZag> */}
				<ZigZag>
					<Figure
						alt='Photo of me in shorts and a short sleeve'
						src={modelingUmbertoScienceMuseumHandsFolded}>
						<Figcaption>
							Taken by{" "}
							<Link href='https://www.instagram.com/umberto.luk/'>
								@umberto.luk
							</Link>
						</Figcaption>
					</Figure>
				</ZigZag>
				{/* <ZigZag><Figure alt="Photo of me" src={modelingUmbertoScienceMuseum}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/umberto.luk/'>
							@umberto.luk
						</Link>
					</Figcaption>
				</Figure></ZigZag> */}
				{/* <ZigZag><Figure alt="Photo of me" src={herbieJacketNabours1480x2219}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/vmnphoto/'>@vmnphoto</Link>
					</Figcaption>
				</Figure></ZigZag> */}
				<ZigZag>
					<Figure alt='Photo of me in snow' src={modelingSnowInFlagstaffConner}>
						<Figcaption>
							Taken by{" "}
							<Link href='https://www.instagram.com/yourbuddyconner/'>
								@yourbuddyconner
							</Link>
						</Figcaption>
					</Figure>
				</ZigZag>
				<ZigZag>
					<Figure
						alt='Photo of me with my hands folded'
						src={modelingSnowInFlagstaffConnerArmsFold}>
						<Figcaption>
							Taken by{" "}
							<Link href='https://www.instagram.com/yourbuddyconner/'>
								@yourbuddyconner
							</Link>
						</Figcaption>
					</Figure>
				</ZigZag>
				<ZigZag>
					<Figure
						alt='Photo of me in between some palm trees'
						src={modelingRobCaliLandscape}>
						<Figcaption>
							Taken by{" "}
							<Link href='https://www.instagram.com/wavyoceans/'>
								@wavyoceans
							</Link>
						</Figcaption>
					</Figure>
				</ZigZag>
				<ZigZag>
					<Figure alt='Photo of me on some stairs' src={modelingByNae}>
						<Figcaption>
							Taken by{" "}
							<Link href='https://www.instagram.com/nae_babe/'>@nae_babe</Link>
						</Figcaption>
					</Figure>
				</ZigZag>
				<ZigZag>
					<Figure
						alt='Photo of me walking down some stairs'
						src={modelingDyesaDTPhoenix}>
						<Figcaption>
							Taken by{" "}
							<Link href='https://www.instagram.com/dyesv.photography/'>
								@dyesv.photography
							</Link>
						</Figcaption>
					</Figure>
				</ZigZag>

				<ZigZag>
					<Figure alt='Photo of me in a beanie' src={modelingAndyDauterman}>
						<Figcaption>
							Taken by{" "}
							<Link href='https://www.instagram.com/dauterman_photography/'>
								@dauterman_photography
							</Link>
						</Figcaption>
					</Figure>
				</ZigZag>
				<ZigZag>
					<Figure alt='Photo of me in a bow tie' src={modelingceiphersClothing}>
						<Figcaption>
							Taken by{" "}
							<Link href='https://www.instagram.com/rachel_olweya/'>
								@rachel_olweya
							</Link>{" "}
							for{" "}
							<Link href='https://www.instagram.com/ceiphers_clothing/'>
								@ceiphers_clothing
							</Link>
						</Figcaption>
					</Figure>
				</ZigZag>
				<ZigZag>
					<Figure
						alt='Photo of me in downtown flagstaff'
						src={modelingBethanyBaldwinDTFlagstaff}>
						<Figcaption>
							Taken by{" "}
							<Link href='https://www.instagram.com/beelieve07/'>
								@beelieve07
							</Link>
						</Figcaption>
					</Figure>
				</ZigZag>
				<ZigZag>
					<Figure
						alt='Photo of me in African clothing with my arms crossed'
						src={modelingBrianaAfrican}>
						<Figcaption>
							I couldn't find her on instagram, but her name is Briana. I'll
							update once I find her.
						</Figcaption>
					</Figure>
				</ZigZag>
				{/* <Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/wavyoceans/'>
							@wavyoceans
						</Link>
					</Figcaption> */}
				<ContentCategory category='photography' className='container' />
			</ContentShow>
		</Fragment>
	);
};

export default Modeling;
