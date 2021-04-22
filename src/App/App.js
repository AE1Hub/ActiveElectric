import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Contact from "../ContactUs/contact";
import OurStory from "../OurStory/ourStory";
import Services from "../Services/services";

export default function App() {
	const renderNavRoutes = () => {
		return (
				<Switch>
					<Route exact path='/' />
					<Route path='/contact' component={Contact} />
					<Route path='/ourStory' component={OurStory} />
					<Route path='/services' component={Services} />
				</Switch>
		);
	};

	return (
			<main className='app'>
				<nav className='appNav'>{renderNavRoutes()}</nav>
				<div>
					<p>test</p>
				</div>
			</main>
	);
}
