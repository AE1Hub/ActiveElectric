import React from "react";
import "./Home.css";
import Main_Top_Pic from "../Images/Main_Top_Pic.png";
import Header from "../Header/Header";

export default function Home() {
	return (
		<div className='home'>
			<Header />
			<div className='headImgContainer'>
				<img
					id='homeImg'
					src={Main_Top_Pic}
					alt='Employee lounge and kitchen'
				></img>
			</div>
			<div>
				<blockquote className='mainQoute'>
					<h2>We Assist You</h2>
					<p id='qouteHead'>to accomplish your needs through our abilities</p>
				</blockquote>
			</div>
		</div>
	);
}
