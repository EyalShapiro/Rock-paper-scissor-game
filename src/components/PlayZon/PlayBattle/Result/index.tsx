import styled, { keyframes } from "styled-components";
import { Container } from "../../../../style";
import { choiceType } from "../../../../../Types";
import { spockImage } from "../../../../assets";

interface ResultProps {
	choice: choiceType;
	isBootPlay?: boolean;
}
function Result({ choice, isBootPlay = false }: ResultProps) {
	return (
		<ResultImage $isBootPlay={isBootPlay}>
			<h3>{isBootPlay ? "boot" : "user"}</h3>
			<img src={choice?.image || spockImage} alt={choice?.name || "spock"} />
		</ResultImage>
	);
}

export default Result;
const shakeAnimation = keyframes<{ $isBootPlay: boolean }>`
  50% {
    transform: rotate(
    ${(props) => (props.$isBootPlay ? "10deg" : "-10deg")});
  }
`;
const ResultImage = styled.span<{ $isBootPlay: boolean }>`
	width: 100%;
	height: 100%;
	margin: 2rem;
	padding: 0.1%;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${(Props) => (Props.$isBootPlay ? "darkorange" : "darkturquoise")};
	outline: outset teal 0.875rem;
	img {
		display: flex;
		justify-items: center;
		position: relative;
		width: 100px;
		margin: 1px;
		transform: rotate(${(props) => (props.$isBootPlay ? "90deg" : "-90deg")})
			rotateY(${(props) => (props.$isBootPlay ? "0deg" : "180deg")});
	}

	${Container}.start & {
		transform-origin: ${(props) => (props.$isBootPlay ? "left" : "right")};
		animation: ${shakeAnimation} 0.7s ease infinite;
	}
	h3 {
		font-size: xx-large;
		margin-top: 1rem;
		pointer-events: none;
		color: aliceblue;
		border-radius: 1rem;
		background-color: rgba(132, 120, 120, 0.1);
		text-decoration-line: underline;
		text-decoration-color: silver;
	}
`;
