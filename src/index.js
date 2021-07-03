import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App.js";

/**
 * To deploy to Vercel use bash $ vercel and follow the prompts
 * https://vercel.com/docs/platform/deployments
 */

ReactDOM.render(
	<React.StrictMode>
			<App />
	</React.StrictMode>,
	document.getElementById("root")
);
