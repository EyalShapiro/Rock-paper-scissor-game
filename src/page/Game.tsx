import { GET_Options } from "../data";
import { Container } from "../style";
import { PlayBattle, SelectOptions } from "../components/PlayZon";
import useGame from "./useGame";

export default function Game() {
	const {
		userChoice,
		bootChoice,
		resultPlay,
		isGameStarted,
		handleOptionClick,
	} = useGame();
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
