import "./App.scss";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

export function App() {
	return (
		<div className="App">
			<Header />
			<Main />
		</div>
	);
}
