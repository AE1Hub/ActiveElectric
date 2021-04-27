import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App.js";
import { BrowserRouter } from "react-router-dom";

/**
 * To deploy to GH Pages run in bash/terminal $ npm run deploy
 * https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
 */

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
