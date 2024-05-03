import styled from "styled-components";
import { choiceType, OptionType } from "../../../../../Types";

interface props {
	choice?: choiceType;
	handleOptionClick: (option: OptionType) => void;
	option: OptionType;
}
export function Option({ choice, handleOptionClick, option }: props) {
	return (
		<OptionImage className={`${choice?.id === option.id ? "active" : ""}`} onClick={() => handleOptionClick(option)}>
			{option.image && <img src={String(option.image)} alt={option.name} />}
			<h3>
				<p>{option.name}</p>
			</h3>
		</OptionImage>
	);
}
const OptionImage = styled.span`
	display: flex;
	flex-direction: column;
	align-items: center;
	opacity: 0.5;
	cursor: pointer;
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 1;
	}

	&.active {
		opacity: 2;
		border-color: green;
	}

	img {
		background: tan;
		outline: outset teal 0.375rem;
		padding: 0.8rem;
		width: 50px;
		pointer-events: none;
	}

	h3 {
		color: snow;
		font-size: 1.235rem;
		margin-top: 1rem;
		pointer-events: none;
	}
`;
