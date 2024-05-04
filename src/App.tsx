import "./App.css";
import Header from "./components/Header";
import usePreventDevTools from "./hook/usePreventDevTools";
import styled from "styled-components";
import Game from "./page/GamePage/Game";

function App() {
	usePreventDevTools();

	return (
		<AppContainer>
			<Header />
			<ContentContainer>
				<Game />
			</ContentContainer>
		</AppContainer>
	);
}

export default App;

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const ContentContainer = styled.div`
	overflow-y: auto;
	background: "#213547";
`;
