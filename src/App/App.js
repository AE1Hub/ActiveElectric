import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "../ContactUs/Contact";
import Home from "../Home/Home";
import OurStory from "../OurStory/OurStory";
import Services from "../Services/Services";

export default function App() {
	const renderNavRoutes = () => {
		return (
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/contact' component={Contact} />
				<Route path='/ourStory' component={OurStory} />
				<Route path='/services' component={Services} />
			</Switch>
		);
	};
	return (
		<main className='app'>
			<nav className='appNav'>{renderNavRoutes()}</nav>
		</main>
	);
}
