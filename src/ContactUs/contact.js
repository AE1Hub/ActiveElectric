import React from "react";
import "./Contact.css";
import ImageButton from "../ImageButton/ImageButton";
import Our_Story from "../Images/Our_Story.png";
import Services from "../Images/Services.png";
import Main_Top_Pic from "../Images/Main_Top_Pic.png";

// https://mailtrap.io/blog/react-send-email/
// review npm https://www.npmjs.com/package/emailjs

export default function Contact() {
	return (
		<main className='contact'>
			<h1>Contact Us</h1>
			<div className='subContact'>
				<div>
					<h2>Email: </h2>
					<form>
						<div>
							<div>
								<label>Name:</label>
							</div>
							<div>
								<input type='text' maxLength='80'></input>
							</div>
						</div>
						<div>
							<div>
								<label>Email:</label>
							</div>
							<div>
								<input type='email' maxLength='80'></input>
							</div>
						</div>

						<div>
							<div>
								<label>Phone Number:</label>
							</div>
							<div>
								<input type='tel' maxLength='12'></input>
							</div>
						</div>

						<div>
							<div>
								<label>Message:</label>
							</div>
							<div>
								<textarea
									id='messageBox'
									type='text'
									wrap='soft'
									maxLength='500'
								></textarea>
							</div>
						</div>
						<button>Send Now</button>
					</form>
				</div>

				<div className='mail'>
					<h2>Mail: </h2>
					<p>Active Electric Co. </p>
					<p>
						21419 S. 154th St. <br /> Gilbert, AZ 85298
					</p>
					<p>Tel 602.549.5052 </p>
					<p>ROC 328575 </p>
				</div>
			</div>

			<div className='navDiv'>
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
			</div>
		</main>
	);
}
