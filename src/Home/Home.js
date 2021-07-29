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
			<div className='blockQ'>
				<blockquote className='mainQoute'>
					<h4>We assist you to accomplish your needs through our abilities </h4>
					{/* <p id='qouteHead'>to accomplish your needs through our abilities</p> */}
				</blockquote>
			</div>
		</div>
	);
}
