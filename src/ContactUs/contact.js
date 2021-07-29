import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import config from "../config.js";

export default function Contact() {
	let [alertMessage, setAlertMessage] = useState("");
	/**
	 * using email.js
	 * https://www.emailjs.com/docs/examples/reactjs/
	 */
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				`${config.SERVICE_KEY}`,
				`${config.TEMPLATE_KEY}`,
				e.target,
				`${config.USER_KEY}`
			)
			.then(
				(result) => {
					if (result.status === 200) {
						setAlertMessage("Email Sent");
					}
				},
				(error) => {
					if (error.status !== 200) {
						setAlertMessage("Oops looks like we're having trouble");
					}
				}
			);
		e.target.reset();
	};

	return (
		<div className='contact'>
			<div className='subContact'>
				<div>
					<h2>Tell us about your project! </h2>
					<form onSubmit={sendEmail}>
						<div>
							<div>
								<label>Name:</label>
							</div>
							<div>
								<input type='text' maxLength='80' name='name'></input>
							</div>
						</div>
						<div>
							<div>
								<label>Email:</label>
							</div>
							<div>
								<input type='email' maxLength='80' name='email'></input>
							</div>
						</div>

						<div>
							<div>
								<label>Phone Number:</label>
							</div>
							<div>
								<input type='tel' maxLength='12' name='phone'></input>
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
									name='message'
								></textarea>
							</div>
						</div>
						<button>Send Now</button>
					</form>
					<p>{alertMessage}</p>
				</div>
			</div>
		</div>
	);
}
