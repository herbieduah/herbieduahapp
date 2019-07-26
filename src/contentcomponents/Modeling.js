/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import {
	ContentShow,
	ComingSoon,
	Paragraph,
	Image,
	Header
} from "../ContentHelpers";
import herbieVictoriaNaboursScratch1480x2639 from "../media/images/modeling/photography-herbieVictoriaNaboursScratch-2639.jpg";
import herbieVictoriaNaboursJacket1480x2219 from "../media/images/modeling/photography-herbieVictoriaNaboursJacket-2219.jpg";
import herbieVictoriaNabours1480x2219 from "../media/images/modeling/photography-herbieVictoriaNabours-2219.jpg";
import herbieUmberto1480x2220 from "../media/images/modeling/photography-herbieUmberto2-2220.jpg";
import herbieUmbertoTwo1480x2220 from "../media/images/modeling/photography-herbieUmberto-2220.jpg";
import herbieJacketNabours1480x2219 from "../media/images/modeling/photography-herbieJacketNabours-2219.jpg";
import herbieConner1480x1851 from "../media/images/modeling/photography-herbieConner2-1851.jpg";
import herbieCalixRob1480x1973 from "../media/images/modeling/photography-herbieCali-1973.jpg";
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
				<Paragraph>Infront of the Camera</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Image src={herbieVictoriaNaboursScratch1480x2639} />
				<Image src={herbieVictoriaNaboursJacket1480x2219} />
				<Image src={herbieVictoriaNabours1480x2219} />
				<Image src={herbieUmberto1480x2220} />
				<Image src={herbieUmbertoTwo1480x2220} />
				<Image src={herbieJacketNabours1480x2219} />
				<Image src={herbieConner1480x1851} />
				<Image src={herbieCalixRob1480x1973} />
				<Image src={herbieByNae1480x1973} />
				<Image src={herbieByDyesa1480x2220} />
				<Image src={herbieByConner1480x1980} />
				<Image src={herbiebyAndy1480x971} />
				<Image src={brianaPhoto1480x2221} />
				<Image src={bethanyBaldwin2000x1333} />
				<Image src={bethanyBaldwin2000x3096} />
			</ContentShow>
		</Fragment>
	);
};

export default Modeling;
