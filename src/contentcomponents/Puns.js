/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { Paragraph } from "../ContentHelpers";
import Text from "../stylecomponents/Text";
// import Emoji from "a11y-react-emoji";
// import testVideoHorizontal from "../media/videos/videosOfme/404.mp4";
// const header = "Pun Generator";

const PunsPage = () => {
	const [puns, setPuns] = useState(randomPun);
	const generatePun = () =>
		setPuns(punArrayValues[Math.floor(Math.random() * punArrayValues.length)]);

	return (
		<div className='container'>
			{/* <Header>{header}</Header> */}
			<Paragraph>{puns}</Paragraph>
			<Text
				button
				onClick={generatePun}
				className='padding-left-right c-margin-bottom c-margin-top'>
				Generate Pun
			</Text>
		</div>
	);
};

export default PunsPage;

const punArrayValues = [
	`I got a new pair of gloves today, but they're both 'lefts' which, on the one hand, is great, but on the other, it's just not right.`,
	`The future, the present and the past walked into a bar. Things got a little tense. `,
	`What's the difference of deer nuts and beer nuts? Beer nuts are a $1.75, but deer nut are under a buck.`,
	`I'd tell you a chemistry joke but I know I wouldn't get a reaction.`,
	`My boss is going to fire the employee with the worst posture. I have a hunch, it might be me.`,
	`Don't spell part backwards. It's a trap.`,
	`I'm reading a book about anti-gravity. It's impossible to put down.`,
	`Thanks for explaining the word "many" to me, it means a lot.`,
	`Don't trust atoms, they make up everything.`,
	`Atheism is a non-prophet organization.`,
	`Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink.`,
	`Why was Cinderella thrown off the basketball team? She ran away from the ball.`,
	`To the mathematicians who thought of the idea of zero, thanks for nothing!`,
	`I saw an ad for burial plots, and thought to myself this is the last thing I need.`,
	`I have a few jokes about unemployed people but it doesn't matter none of them work.`,
	`Did you hear about the kidnapping at school? It's okay. He woke up?`,
	`My wife likes it when I blow air on her when she's hot, but honestly... I'm not a fan.`,
	`A cop just knocked on my door and told me that my dogs were chasing people on bikes. My dogs don't even own bikes...`,
	`When I lose the TV controller, it's always hidden in some remote destination.`,
	`If a child refuses to sleep during nap time, are they guilty of resisting a rest?`,
	`Oxygen is proven to be a toxic gas. Anyone who inhales oxygen will normally dies within 80 years.`,
	`A friend of mine tried to annoy me with bird puns, but I soon realized that toucan play at that game.`,
	`My first job was working in an orange juice factory, but I got canned: couldn't concentrate.`,
	`My math teacher called me average. How mean!`,
	`I don't engage in mental combat with the unarmed.`,
	`This morning some clown opened the door for me. I thought to myself that's a nice Jester.`,
	`I'm no photographer, but I can picture us together.`,
	`What was Forrest Gump's email password? "1forrest1"`,
	`Did you hear about the man who jumped off a bridge in France? He was in Sein.`,
	`What do you call a laughing motorcycle? A Yamahahaha.`,
	`Why couldn't the leopard play hide and seek? Because he was always spotted.`,
	`I used to be a banker, but then I lost interest.`,
	`Police have arrested the World tongue-twister Champion. I imagine he'll be given a tough sentence.`,
	`I wanna make a joke about sodium, but Na..`,
	`What do you call a cow with no legs? Ground beef.`,
	`Someone broke into my house last night and stole my Limbo stick. How low can you get?`,
	`Justice is a dish best served cold because if it were served warm, it would be justwater.`,
	`When I was young, I always felt like a male trapped in a females body. Then I was born`,
	`My doctors office has two doctors on call at all times. Is that considered a pair a docs.`,
	`Why couldn't the bike stand up on it's own? It was two tired.`,
	`Did you hear about the Italian chef with a terminal illness? He pastaway.`,
	`What did one eye say to the other eye? Between you and me something smells.`,
	`Did you hear about the monkeys who shared an Amazon account? They were prime mates.`,
	`Cleaning mirrors is a job I could really see myself doing.`,
	`The first time I got a universal remote control, I thought to myself "This changes everything".`,
	`I  hate insects puns, they really bug me.`,
	`I'm reading a horror story in Braille. Something bad is about to happen... I can feel it.`,
	`How do trees access the internet? They log in.`,
	`The best time to open a gift is the present.`,
	`What is the longest website domain name? smiles.com because there is a "mile" between the s's!`,
	`I  used to wonder why Frisbees looked bigger the closer it came... Then it hit me!`,
	`I'm taking part in a stair climbing competition. Guess I better step up my game.`,
	`Hung a picture up on the wall the other day. Nailed it.`,
	`Why did the picture end up in jail? It was framed!`
];
const randomPun =
	punArrayValues[Math.floor(Math.random() * punArrayValues.length)];
