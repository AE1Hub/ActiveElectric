import React from "react";
import "./App.css";
import Contact from "../ContactUs/Contact";
import Home from "../Home/Home";
import OurStory from "../OurStory/OurStory";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import Contact_Us from "../Images/Contact_Us.png";
import Our_Story from "../Images/Our_Story.png";
import Services_Pic from "../Images/Services_Pic.png";
import Hand_Wash from "../Images/Hand_Wash.jpg";

export default function App() {
	return (
		<main className='app'>
			<Home />
			<OurStory />
			<div className='beforeServiceContainer'>
				<img
					id='Our_Story'
					src={Our_Story}
					alt={"Stylish warehouse lighting in locker room"}
				></img>
				<img
					id='Services_Pic'
					src={Services_Pic}
					alt={"Beutiful employee lounge and kitchen"}
				></img>
			</div>
			<Services />
			<Contact />
			<div className='afterServiceContainer'>
				<img
					id='Hand_Wash'
					src={Hand_Wash}
					alt={"Cleanly bent conduit near hand wash station"}
				></img>
				<img id='Contact_Us' src={Contact_Us} alt={"Nicely Bent Conduit"}></img>
			</div>
			<Footer />
		</main>
	);
}
