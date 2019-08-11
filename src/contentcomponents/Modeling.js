/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import {
	ContentShow,
	ComingSoon,
	Paragraph,
	Image,
	Link,
	Figure,
	Header,
	Figcaption
} from "../ContentHelpers";
import herbieVictoriaNaboursScratch1480x2639 from "../media/images/modeling/photography-herbieVictoriaNaboursScratch-2639.jpg";
import herbieVictoriaNaboursJacket1480x2219 from "../media/images/modeling/photography-herbieVictoriaNaboursJacket-2219.jpg";
import herbieVictoriaNabours1480x2219 from "../media/images/modeling/photography-herbieVictoriaNabours-2219.jpg";
import herbieUmberto1480x2220 from "../media/images/modeling/photography-herbieUmberto2-2220.jpg";
import herbieUmbertoTwo1480x2220 from "../media/images/modeling/photography-herbieUmberto-2220.jpg";
import herbieJacketNabours1480x2219 from "../media/images/modeling/photography-herbieJacketNabours-2219.jpg";
import herbieConner1480x1851 from "../media/images/modeling/photography-herbieConner2-1851.jpg";
import herbieCalixRob2048x1152 from "../media/images/modeling/robcaliwide.JPG";
import herbieByNae1480x1973 from "../media/images/modeling/photography-herbieByNae-1973.jpg";
import herbieByDyesa1480x2220 from "../media/images/modeling/photography-herbieByDyesa-2220.jpg";
import herbieByConner1480x1980 from "../media/images/modeling/photography-herbieByConner-986.jpg";
import herbiebyAndy1480x971 from "../media/images/modeling/photography-herbiebyAndy-971.jpg";
import brianaPhoto1480x2221 from "../media/images/modeling/photography-brianaPhoto-2221.jpg";
import bethanyBaldwin2000x1333 from "../media/images/modeling/ByBethanyBaldwin.jpg";
import bethanyBaldwin2000x3096 from "../media/images/modeling/ByBethanyBaldwin2.jpg";

const header = "Modeling";

const Modeling = () => {
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					Sometimes, I like to stand infront of the camera and have talented
					people take pictures of me.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Figure src={herbieVictoriaNaboursScratch1480x2639}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/vmnphoto/'>@vmnphoto</Link>
					</Figcaption>
				</Figure>
				<Figure src={herbieVictoriaNaboursJacket1480x2219}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/vmnphoto/'>@vmnphoto</Link>
					</Figcaption>
				</Figure>
				<Figure src={herbieVictoriaNabours1480x2219}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/vmnphoto/'>@vmnphoto</Link>
					</Figcaption>
				</Figure>
				<Figure src={herbieUmberto1480x2220}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/umberto.luk/'>
							@umberto.luk
						</Link>
					</Figcaption>
				</Figure>
				<Figure src={herbieUmbertoTwo1480x2220}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/umberto.luk/'>
							@umberto.luk
						</Link>
					</Figcaption>
				</Figure>
				<Figure src={herbieJacketNabours1480x2219}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/vmnphoto/'>@vmnphoto</Link>
					</Figcaption>
				</Figure>
				<Figure src={herbieConner1480x1851}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/yourbuddyconner/'>
							@yourbuddyconner
						</Link>
					</Figcaption>
				</Figure>
				<Figure src={herbieCalixRob2048x1152}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/wavyoceans/'>
							@wavyoceans
						</Link>
					</Figcaption>
				</Figure>
				<Figure src={herbieByNae1480x1973}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/nae_babe/'>@nae_babe</Link>
					</Figcaption>
				</Figure>
				<Figure src={herbieByDyesa1480x2220}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/dyesv.photography/'>
							@dyesv.photography
						</Link>
					</Figcaption>
				</Figure>
				<Figure src={herbieByConner1480x1980}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/yourbuddyconner/'>
							@yourbuddyconner
						</Link>
					</Figcaption>
				</Figure>
				<Figure src={herbiebyAndy1480x971}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/dauterman_photography/'>
							@dauterman_photography
						</Link>
					</Figcaption>
				</Figure>
				<Image src={brianaPhoto1480x2221} />
				{/* <Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/wavyoceans/'>
							@wavyoceans
						</Link>
					</Figcaption> */}
				<Figure src={bethanyBaldwin2000x1333}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/beelieve07/'>
							@beelieve07
						</Link>
					</Figcaption>
				</Figure>
				<Figure src={bethanyBaldwin2000x3096}>
					<Figcaption>
						Taken by{" "}
						<Link href='https://www.instagram.com/beelieve07/'>
							@beelieve07
						</Link>
					</Figcaption>
				</Figure>
			</ContentShow>
		</Fragment>
	);
};

export default Modeling;
