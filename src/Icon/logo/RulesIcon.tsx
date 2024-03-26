import React from "react";
import LogoPag from "./image-rules.svg";
interface style extends React.CSSProperties {}
interface props {
	style?: style;
}
export function RulesIcon({ style }: props) {
	return (
		<img
			style={{
				...style,
				height: "10vh",
				justifyContent: "",
			}}
			src={LogoPag}
			alt={"logo"}
		/>
	);
}
