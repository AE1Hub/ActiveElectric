import React from "react";
import Header from "../Header/Header";
import ImageButton from "../ImageButton/ImageButton";
import Contact_Us from "../Images/Contact_Us.png";
import Our_Story from "../Images/Our_Story.png";
import Services from "../Images/Services.png";

export default function Home() {
	return (
		<main className='home'>
			<Header />

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
