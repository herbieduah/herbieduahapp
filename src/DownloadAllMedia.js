import React, { Fragment, useContext } from "react";
import { DownloadAll } from "./stylecomponents/Base";
import { globalState } from "./State";
// import Img from "react-image";
// ./media/images/bedzin/bedziniPhoneNavNormal.jpg
// ./media/images/modeling/robcaliwide.JPG
// import
import robcaliwide from "./media/images/modeling/robcaliwide.JPG";
import herbieUmberto from "./media/images/modeling/photography-herbieUmberto-2220.jpg";
import herbieUmberto2 from "./media/images/modeling/photography-herbieUmberto2-2220.jpg";
import herbieUmberto3 from "./media/images/modeling/photography-herbieUmberto3-1850.jpg";
import herbieVictoriaNabours from "./media/images/modeling/photography-herbieVictoriaNabours-2219.jpg";
import herbieVictoriaNaboursJacket from "./media/images/modeling/photography-herbieVictoriaNaboursJacket-2219.jpg";
import herbieVictoriaNaboursScratch from "./media/images/modeling/photography-herbieVictoriaNaboursScratch-2639.jpg";
import herbieByDyesa from "./media/images/modeling/photography-herbieByDyesa-2220.jpg";
import herbieByNae from "./media/images/modeling/photography-herbieByNae-1973.jpg";
import herbieCali from "./media/images/modeling/photography-herbieCali-1973.jpg";
import herbieConner2 from "./media/images/modeling/photography-herbieConner2-1851.jpg";
import herbieConner from "./media/images/modeling/photography-herbieConner3-986.jpg";
import herbieJacketNabours from "./media/images/modeling/photography-herbieJacketNabours-2219.jpg";
import herbiebyAnd from "./media/images/modeling/photography-herbiebyAndy-971.jpg";
import herbieByConne from "./media/images/modeling/photography-herbieByConner-986.jpg";
import brianaPhoto from "./media/images/modeling/photography-brianaPhoto-2221.jpg";
import ByBethanyBaldwin2 from "./media/images/modeling/ByBethanyBaldwin2.jpg";
import ByBethanyBaldwin from "./media/images/modeling/ByBethanyBaldwin.jpg";

export const AllMedia = () => {
	return (
		<DownloadAll aria-hidden='true'>
			<img alt='downloaded' src={robcaliwide} />
			<img alt='downloaded' src={herbieUmberto} />
			<img alt='downloaded' src={herbieUmberto2} />
			<img alt='downloaded' src={herbieUmberto3} />
			<img alt='downloaded' src={herbieVictoriaNabours} />
			<img alt='downloaded' src={herbieVictoriaNaboursJacket} />
			<img alt='downloaded' src={herbieVictoriaNaboursScratch} />
			<img alt='downloaded' src={herbieByDyesa} />
			<img alt='downloaded' src={herbieByNae} />
			<img alt='downloaded' src={herbieCali} />
			<img alt='downloaded' src={herbieConner2} />
			<img alt='downloaded' src={herbieConner} />
			<img alt='downloaded' src={herbieJacketNabours} />
			<img alt='downloaded' src={herbiebyAnd} />
			<img alt='downloaded' src={herbieByConne} />
			<img alt='downloaded' src={brianaPhoto} />
			<img alt='downloaded' src={ByBethanyBaldwin2} />
			<img alt='downloaded' src={ByBethanyBaldwin} />
		</DownloadAll>
	);
};

export const DownloadAllMedia = () => {
	const { lazyLoading } = useContext(globalState);
	return <Fragment>{lazyLoading ? null : <AllMedia />}</Fragment>;
};

export default DownloadAllMedia;
