import styled, { keyframes } from "styled-components";
import { Container } from "../../../../style";
import { choiceType } from "../../../../../Types";
import { spockImage } from "../../../../Icon";

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
	margin: 1rem;
	padding: 0%;
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
		transform: rotate(${(props) => (props.$isBootPlay ? "90deg" : "-90deg")})
			rotateY(${(props) => (props.$isBootPlay ? "0deg" : "180deg")});
	}

	${Container}.start & {
		transform-origin: ${(props) => (props.$isBootPlay ? "left" : "right")};
		animation: ${shakeAnimation} 0.7s ease infinite;
	}
`;
