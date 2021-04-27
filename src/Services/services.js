import React from "react";
import "./Services.css";
import ImageButton from "../ImageButton/ImageButton";
import Contact_Us from "../Images/Contact_Us.png";
import Our_Story from "../Images/Our_Story.png";
import Main_Top_Pic from "../Images/Main_Top_Pic.png";

export default function Services() {
	return (
		<main className='services'>
			<h1> Services </h1>
			<div>
				<p id='servicesText'>
					We offer a wide range of services in Residential, Commercial, and
					Industrial fields with the abilities to assist in small service issues
					to full ground up facilities. We work with clients to fulfill their
					needs while maintaining their budget forecasts and eliminating
					inefficiencies.
				</p>
				<ul>
					<li>Troubleshooting</li>
					<li>Panel Upgrades and Services</li>
					<li>Fire Alarm and Fire Alarm Pathways</li>
					<li>Voice, Data, Video</li>
					<li>Building Automation</li>
					<li>Energy Management</li>
					<li>Building Facility Maintenance</li>
					<li>Repairs</li>
					<li>Testing</li>
					<li>Lighting</li>
					<li>Unground Utilities</li>
					<li>Controls and Controls Pathways</li>
					<li>Distribution Installations</li>
					<li>Improvements to Existing Buildings and Facilities</li>
					<li>Tenant Improvements</li>
					<li>HVAC Controls and Control Pathways</li>
				</ul>
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
