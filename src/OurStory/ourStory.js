import React from "react";
import ImageButton from "../ImageButton/ImageButton";
import Contact_Us from "../Images/Contact_Us.png";
import Services from "../Images/Services.png";
import Main_Top_Pic from "../Images/Main_Top_Pic.png";

export default function OurStory() {
	return (
		<main className='ourStory'>
			<div>
				<p> test story </p>
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
