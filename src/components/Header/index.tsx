import { RulesIcon } from "../../Icon/logo";

export default function Header() {
	return (
		<span style={{ display: "flex", justifyContent: "flex-end" }}>
			<h1>
				<RulesIcon />
				<b>{`Rock-paper-scissor-game`}</b>
			</h1>
		</span>
	);
}
