import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App.js";

/**
 * ***** Vercel Deploy *****
 * To deploy to Vercel use bash $ vercel or $ vercel --prod for prod and follow the prompts
 * https://vercel.com/docs/platform/deployments
 * 
 * ***** For GH pages deploy *****
 * $ npm run build
 * $ npm deploy
 * Will need to login to GH and update custom domain with correct domain on each deploy
 * https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
 */


ReactDOM.render(
	<React.StrictMode>
			<App />
	</React.StrictMode>,
	document.getElementById("root")
);
