import styled from "styled-components";
import { OptionIcon } from "../../assets";

export default function Header() {
	return (
		<HeaderContainer>
			<HeaderStyle>
				<h1>{`Rock-paper-scissor-game`}</h1>
				<OptionIcon width="60%" height="50%" />
			</HeaderStyle>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	margin: 0%;
	position: sticky;
	top: 0;
	z-index: 1;
	background-color: #333; /* Add a background color for better visibility */
`;

const HeaderStyle = styled.div`
	display: flex;
	margin-top: 4%;
	margin-bottom: 4%;
	margin-left: 1%;
	margin-right: 1%;
	padding: 2%;
	height: 100%;
	width: 100%;
	padding: 1%;
	align-items: center;
	justify-content: space-between;

	h1 {
		text-decoration-line: underline;
		color: aliceblue;
		filter: drop-shadow(0 1px 2em gold);
	}
`;
