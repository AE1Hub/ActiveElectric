import React from "react";
import "./Header.css";
import logo from "../Images/logo.png";
import logo_words from "../Images/logo_words.png";

export default function Header() {
	return (
		<header className='header'>
			<div className='logoContainer'>
				<img id='logo' src={logo} alt='Company logo AE'></img>
				<img id='companyName' src={logo_words} alt='Company Name'></img>
			</div>
		</header>
	);
}
