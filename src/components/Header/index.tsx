import styled from "styled-components";
import { RulesIcon } from "../../Icon/logo";

export default function Header() {
	return (
		<HeaderStyle>
			<RulesIcon width='10rem' height='10rem' />
			<h1>{`Rock-paper-scissor-game`}</h1>
		</HeaderStyle>
	);
}
const HeaderStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	height: 100%;
	width: 100%;
`;
