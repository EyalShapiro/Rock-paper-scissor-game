import { useState } from "react";
import Header from "./components/Header";
import usePreventDevTools from "./hook/usePreventDevTools";
import InputUser from "./components/UserNameInput";
import styled from "styled-components";
import Game from "./page/Game";
function App() {
	const [pageStart, setPageStart] = useState<boolean>(false);
	usePreventDevTools();
	return (
		<AppStyle>
			<Header />
			{!pageStart && <InputUser onClick={() => setPageStart(true)} />}
			{pageStart && <Game />}
		</AppStyle>
	);
}

export default App;
const AppStyle = styled.div`
	width: 100%;
	height: 100%;
`;
