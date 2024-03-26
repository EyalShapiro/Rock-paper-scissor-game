import { useState } from "react";
import { choiceType, OptionType } from "../../Types";
import { getOutcome, PlayBattle, SelectOptions } from "../components/PlayZon";
import { GET_Options } from "../data";
import { Container } from "../style";

export default function PlayZon() {
	const [userChoice, setUserChoice] = useState<choiceType>(null);
	const [bootChoice, setBootChoice] = useState<choiceType>(null);
	const [resultPlay, setResultPlay] = useState<string>("Let's Play!!");
	const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

	function handleOptionClick(option: OptionType) {
		setUserChoice(option);
		setIsGameStarted(true);

		setTimeout(() => {
			const randomIndex = Math.floor(Math.random() * 3);
			const bootOption = GET_Options[randomIndex];
			setBootChoice(bootOption);

			const outcome = getOutcome(option.id, bootOption.id);
			setResultPlay(outcome);
			setIsGameStarted(false);
		}, 2500); //2.5s
	}

	return (
		<Container>
			<PlayBattle
				userChoice={userChoice}
				bootChoice={bootChoice}
				resultPlay={resultPlay}
				isGameStarted={isGameStarted}
			/>
			<SelectOptions
				isGameStarted={isGameStarted}
				arrOptions={GET_Options}
				choice={userChoice}
				handleOptionClick={handleOptionClick}
			/>
		</Container>
	);
}
