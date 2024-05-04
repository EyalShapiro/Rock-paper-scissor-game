import { GET_Options } from "../../data";
import { Container } from "../../style";
import { PlayBattle, SelectOptions } from "../../components/PlayZon";
import useGame from "./useGame";

export default function Game() {
  const { userChoice, bootChoice, resultPlay, gameStarted, handleOptionClick } =
    useGame();
  return (
    <Container>
      <PlayBattle
        userChoice={userChoice}
        bootChoice={bootChoice}
        resultPlay={resultPlay}
        gameStarted={gameStarted}
      />
      <SelectOptions
        gameStarted={gameStarted}
        arrOptions={GET_Options}
        choice={userChoice}
        handleOptionClick={handleOptionClick}
      />
    </Container>
  );
}
