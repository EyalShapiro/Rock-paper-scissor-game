import PlayZon from "./page/PlayZon";
import usePreventDevTools from "./hook/usePreventDevTools";
import Header from "./components/Header";

function App() {
	usePreventDevTools();
	return (
		<div>
			<Header />
			<PlayZon />
		</div>
	);
}

export default App;
