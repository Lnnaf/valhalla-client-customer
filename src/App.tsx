import { useEffect, useState } from "react";
import "./App.css";
import MainHomePage from "./component/view/MainHome";
import "./bootstrap.min.css";

function App() {
	const [count, setCount] = useState(0);
	useEffect(() => {
    document.title = 'Valhallagames.shop';
  }, [])
	return (
		<body>
			<MainHomePage />
		</body>
	);
}

export default App;
