import React from "react";
import "./Home.css";
import ImageButton from "../ImageButton/ImageButton";
import Contact_Us from "../Images/Contact_Us.png";
import Our_Story from "../Images/Our_Story.png";
import Services from "../Images/Services.png";
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
					We work as partners with our clients to accomplish their needs through
					our abilities.
				</p>
			</div>

			<ImageButton
				location={"Contact Us"}
				navImage={Contact_Us}
				navLink={"/contact"}
				descript={"Nicely Bent Conduit"}
			/>
			<ImageButton
				location={"Our Story"}
				navImage={Our_Story}
				navLink={"/ourStory"}
				descript={"Stylish warehouse lighting in locker room"}
			/>
			<ImageButton
				location={"Services"}
				navImage={Services}
				navLink={"/services"}
				descript={
					"Control center with perfectly bent conduit and nicely mounted junctions"
				}
			/>
		</main>
	);
}
