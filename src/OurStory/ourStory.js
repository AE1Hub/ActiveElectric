import React from "react";
import "./OurStory.css";
import ImageButton from "../ImageButton/ImageButton";
import Contact_Us from "../Images/Contact_Us.png";
import Services from "../Images/Services.png";
import Main_Top_Pic from "../Images/Main_Top_Pic.png";

export default function OurStory() {
	return (
		<main className='ourStory'>
			<div className='story'>
				<h1> Our Story </h1>
				<p>
					Active Electric Co. was formed in 2019 with a drive for customer
					satisfaction and building relationships through quality workmanship
					and competitive pricing. With over twenty-five years of skilled
					experience, we have a complete understanding of the importance of
					jobsite safety, continuing knowledge of our ever growing trade, and
					honoring our commitments to our clients and our clients’ clients.
				</p>
				<p>
					Our services include Residential, Commercial, and Industrial
					Electrical installations and services. Our wide range of training and
					knowledge allows us to complete many different size projects and
					tasks. We work as partners with our clients to accomplish their needs
					through our abilities.
				</p>
				<p>
					Contact us and lets discuss your project… With personal relationships
					with our vendors and a complete understanding of our industry, we will
					be able to provide very competitive pricing that will help us stand
					out against our competitors. Competitors who often times lose site of
					the fact in the electrical field, your safety is often in our hands.
				</p>
			</div>

			<div className='mission'>
				<h2>Our Mission</h2>
				<p>
					The most common complaints you hear when someone talks about any
					construction company is narrowed down to three things:
				</p>

				<p>A) Lack of communication.</p>

				<p>B) Quality of work.</p>

				<p>
					C) Not doing what they say they are going to do, in writing or verbal.
				</p>

				<p>
					Our company is based on honesty and integrity. With those two words,
					we aim to change the way people view the construction industry. We are
					set out to bring integrity back to the electrical construction trade
					by highlighting the three negatives listed above and focus on a
					customer satisfaction driven initiative.
				</p>
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
