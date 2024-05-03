import styled from "styled-components";
import React from "react";
import LogoPag from "./image-rules.svg";

// Interface for props
interface Props {
  style?: React.CSSProperties;
  width: string;
  height: string;
}

// RulesIcon component
export function RulesIcon({ style, width, height }: Props) {
  return (
    <RulesIconStyle style={{ ...style }}>
      <img
        className="Logo"
        width={width}
        height={height}
        src={LogoPag}
        alt="logo"
      />
    </RulesIconStyle>
  );
}

// Styled component for styling
const RulesIconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center horizontally by default */
  flex-direction: column;
  cursor: pointer;
  :hover {
    filter: drop-shadow(0 0 2em #61a9fbaa);
  }
  /* Optional props for customization */
  width: fit-content;
  height: fit-content;
`;
