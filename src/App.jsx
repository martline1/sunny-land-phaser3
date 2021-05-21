import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		const onClick = () => {
			alert("You've clicked!");
		};

		window.addEventListener("click", onClick);

		return () => {
			// This is going to be called whenever we clase the app
			window.removeEventListener("click", onClick);
		};
	}, []);

	return (
		<h1>Hello world from react!</h1>
	);
};

export default App;
