import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MainHomePage from "./component/view/MainHome";
import "./bootstrap.min.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<body>
			<MainHomePage />
		</body>
	);
}

export default App;
