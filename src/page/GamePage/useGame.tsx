import { useState } from "react";
import { choiceType, OptionType } from "../../../Types";
import { getOutcome } from "../../components/PlayZon/getOutcome";
import { GET_Options } from "../../data";

export default function useGame() {
  const [userChoice, setUserChoice] = useState<choiceType>(null);
  const [bootChoice, setBootChoice] = useState<choiceType>(null);
  const [resultPlay, setResultPlay] = useState<string>("Let's Play!!");
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  function handleOptionClick(option: OptionType) {
    setUserChoice(option);
    setGameStarted(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 3);
      const bootOption = GET_Options[randomIndex];
      setBootChoice(bootOption);
      const outcome = getOutcome(option.id, bootOption.id);
      setResultPlay(outcome);
      setGameStarted(false);
    }, 2500); //2.5s
  }

  return {
    userChoice,
    setUserChoice,
    bootChoice,
    setBootChoice,
    resultPlay,
    gameStarted,
    setGameStarted,
    handleOptionClick,
  };
}
