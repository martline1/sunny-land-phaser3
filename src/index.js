import React    from "react";
import ReactDOM from "react-dom";

// Import Own Components
import App                            from "./App.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals                from "./reportWebVitals";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

if (process.env.NODE_ENV === "production") {
	// If you want to start measuring performance in your app, pass a function
	// to log results (for example: reportWebVitals(console.log))
	// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
	reportWebVitals();

	serviceWorkerRegistration.register();	
} else {
	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: https://cra.link/PWA
	serviceWorkerRegistration.unregister();
}
