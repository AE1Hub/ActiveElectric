import React from "react";
import "./Contact.css";

// https://mailtrap.io/blog/react-send-email/
// review npm https://www.npmjs.com/package/emailjs

export default function Contact() {
	return (
		<div className='contact'>
			<div className='subContact'>
				<div>
					<h2>Tell us about your project! </h2>
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
					<p>Active Electric Co. </p>
					<p>
						21419 S. 154th St. <br /> Gilbert, AZ 85298
					</p>
					<p>Tel 602.549.5052 </p>
					<p>ROC 328575 </p>
				</div>
			</div>
		</div>
	);
}
