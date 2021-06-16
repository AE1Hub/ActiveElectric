import React from "react";
import "./Home.css";
import Main_Top_Pic from "../Images/Main_Top_Pic.png";

export default function Home() {
	return (
		<main className='home'>
			<div className='headImgContainer'>
				<img
					id='homeImg'
					src={Main_Top_Pic}
					alt='Employee lounge and kitchen'
				></img>
			</div>
			<div>
				<p id='headerSaying'>
					"We work as partners with our clients to accomplish their needs
					through our abilities."
				</p>
			</div>

		</main>
	);
}
