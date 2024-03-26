import React from "react";
import LogoSvg from "./logo.svg";
interface style extends React.CSSProperties {}
interface props {
	style: style;
}
export function LogoIcon({ style }: props) {
	return <img style={style} src={LogoSvg} alt={"logo"} />;
}
