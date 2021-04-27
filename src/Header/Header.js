import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../Images/logo.png";
import logo_words from "../Images/logo_words.png";

export default function Header() {
	return (
		<header className='header'>
				<Link to='/'>
					<img id='logo' src={logo} alt='Company logo AE'></img>
				</Link>
				<img id='companyName' src={logo_words} alt='Company Name'></img>
		</header>
	);
}
