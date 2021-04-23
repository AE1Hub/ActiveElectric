import React from "react";
import "./ImageButton.css";
import { Link } from "react-router-dom";

export default function ImageButton(props) {
	const { navImage, navLink, descript, location } = props;

	return (
		<div className='imageContainer'>
			<div className='pholder'>
				<p>{location}</p>
			</div>
			<div>
				<Link to={navLink}>
					<img src={navImage} id='imageButton' alt={descript}></img>
				</Link>
			</div>
		</div>
	);
}
