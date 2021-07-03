import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../Images/logo.png";
import logo_words from "../Images/logo_words.png";

export default function Header() {
	return (
		<header className='header'>
			<Link to='/'>
				<div className='logoContainer'>
					<img id='logo' src={logo} alt='Company logo AE'></img>
					<img id='companyName' src={logo_words} alt='Company Name'></img>
				</div>
			</Link>
			<div className='phoneHeader'>
				<p id='phonePF'>Call (602)549-5052</p>
			</div>
		</header>
	);
}
