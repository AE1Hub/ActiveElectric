import React from "react";
import "./services.css";

export default function Services() {
	return (
		<div className='services'>
			<div className='textContainer'>
				<p id='servicesText'>
					We offer a wide range of services in Residential, Commercial, and
					Industrial fields with the abilities to assist in small service issues
					to full ground up facilities. We work with clients to fulfill their
					needs while maintaining their budget forecasts and eliminating
					inefficiencies.
				</p>
				<div id='points'>
					<ul>
						<li>Troubleshooting</li>
						<li>Panel Upgrades and Services</li>
						<li>Fire Alarm and Fire Alarm Pathways</li>
						<li>Voice, Data, Video</li>
						<li>Building Automation</li>
						<li>Energy Management</li>
						<li>Building Facility Maintenance</li>
						<li>Repairs</li>
					</ul>
					<ul>
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
			</div>
		</div>
	);
}
