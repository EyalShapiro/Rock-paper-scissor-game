import { Option } from "./Option";
import styled from "styled-components";
import { Container } from "../../../style/Container";
import { choiceType, GetOptionsType, OptionType } from "../../../../Types";

interface SelectOptionsProps {
  children?: React.ReactNode;
  gameStarted: boolean;
  arrOptions: GetOptionsType;
  choice: choiceType;
  handleOptionClick: (option: OptionType) => void;
}
export const SelectOptions: React.FC<SelectOptionsProps> = ({
  gameStarted,
  arrOptions,
  choice,
  handleOptionClick,
}) => {
  return (
    <SelectOptionsStyle className={`${gameStarted ? "start" : ""}`}>
      {arrOptions.map((option: OptionType) => (
        <Option
          key={option.id} /**key is out  of the comport for this task */
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
