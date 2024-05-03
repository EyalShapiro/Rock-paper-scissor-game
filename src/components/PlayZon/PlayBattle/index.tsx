import styled from "styled-components";
import { choiceType } from "../../../../Types";
import Result from "./Result";

interface PlayBattleProps {
	children?: React.ReactNode;
	userChoice: choiceType;
	bootChoice: choiceType;
	resultPlay: string;
	gameStarted: boolean;
}
export const PlayBattle: React.FC<PlayBattleProps> = ({
	userChoice,
	bootChoice,
	resultPlay,
	gameStarted,
	children,
}) => {
	return (
		<PlayBattleStyle $result={resultPlay} className="result_field">
			<div className="imag">
				<Result choice={bootChoice} isBootPlay={true} />
				<Result choice={userChoice} />
				{children}
			</div>
			<h2 className={`${gameStarted ? "start" : ""}`}>{resultPlay}</h2>
		</PlayBattleStyle>
	);
};

const PlayBattleStyle = styled.div<{ $result: string }>`
	width: 100%;
	height: 100%;
	padding-block: 10px 1px;
	h2 {
		text-align: center;
		font-size: 2rem;
		color: black;
		margin: 2rem;
		outline: 0.375rem gold outset;
		border: 0.375rem forestgreen solid;
		background: ${(props) =>
			props.$result.trim() === "boot Won!!"
				? "darkorange"
				: props.$result.trim() === "You Won!!"
				? "darkturquoise"
				: "tan"};
		margin-top: 1.5rem;
	}
	.imag {
		display: flex;
		justify-items: center;

		width: 100%;
		height: 100%;
		position: sticky;
	}
`;
