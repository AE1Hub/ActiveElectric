import React from "react";
import ImageButton from "../ImageButton/ImageButton";
import Our_Story from "../Images/Our_Story.png";
import Services from "../Images/Services.png";
import Main_Top_Pic from "../Images/Main_Top_Pic.png";

export default function Contact() {
	return (
		<main className='contact'>
			<div>
				<p> test contact</p>
			</div>
			<ImageButton
				location={"Home"}
				navImage={Main_Top_Pic}
				navLink={"/"}
				descript={"Beutiful employee lounge and kitchen"}
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
