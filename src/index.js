import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App.js";
import { BrowserRouter } from "react-router-dom";

/**
 * To deploy to Vercel use bash $ vercel and follow the prompts
 * https://vercel.com/docs/platform/deployments
 */

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
