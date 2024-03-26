import { Option } from "./Option";
import styled from "styled-components";
import { Container } from "../../../style/Container";
import { choiceType, GetOptionsType, OptionType } from "../../../../Types";

interface SelectOptionsProps {
	children?: React.ReactNode;

	isGameStarted: boolean;
	arrOptions: GetOptionsType;
	choice: choiceType;
	handleOptionClick: (option: OptionType) => void;
}

export const SelectOptions: React.FC<SelectOptionsProps> = ({
	isGameStarted,
	arrOptions,
	choice,
	handleOptionClick,
}) => {
	return (
		<SelectOptionsStyle className={`${isGameStarted ? "start" : ""}`}>
			{arrOptions.map((option: OptionType) => (
				<Option
					choice={choice}
					handleOptionClick={handleOptionClick}
					option={option}
				/>
			))}
		</SelectOptionsStyle>
	);
};

const SelectOptionsStyle = styled.div`
	display: flex;
	align-items: center;
	margin-top: 2.5rem;
	justify-content: space-between;

	${Container}.start & {
		pointer-events: none;
	}
`;