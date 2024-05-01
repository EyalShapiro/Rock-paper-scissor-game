import styled from "styled-components";

import React from "react";
import LogoPag from "./image-rules.svg";
interface style extends React.CSSProperties {}
interface props {
	style?: style;
	width: string;
	height: string;
}
export function RulesIcon({ width, height }: props) {
	return (
		<RulesIconStyle height={height} width={width}>
			<img
				style={{ height: "10rem", widows: "10rem" }}
				src={LogoPag}
				alt={"logo"}
			/>
		</RulesIconStyle>
	);
}

const RulesIconStyle = styled.div<{ width: string; height: string }>`
	height: 100%; /* Inherits height from its container */
	width: 100%; /* Inherits width from its container */
	display: inline-block;
	align-items: center;
	justify-content: center; /* Center horizontally by default */
	flex-direction: column;
	align-items: stretch;

	/* Optional props for customization */
	width: ${({ width }) => width || "auto"}; /* Allow overriding width */
	height: ${({ height }) => height || "auto"}; /* Allow overriding height */
`;
