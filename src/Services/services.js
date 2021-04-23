import React from "react";
import ImageButton from "../ImageButton/ImageButton";
import Contact_Us from "../Images/Contact_Us.png";
import Our_Story from "../Images/Our_Story.png";
import Main_Top_Pic from "../Images/Main_Top_Pic.png";

export default function Services() {
	return (
		<main className='services'>
			<div>
				<p> test services</p>
			</div>

			<ImageButton
				location={"Home"}
				navImage={Main_Top_Pic}
				navLink={"/"}
				descript={"Beutiful employee lounge and kitchen"}
			/>

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
		</main>
	);
}
