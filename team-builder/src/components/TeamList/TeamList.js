import React from "react";
import "./index.css";
import img from "./userIcon_small.png";

const TeamList = (props) => {
	const { team } = props;

	return (
		<div className="team-list">
			{team.map((el, idx) => {
				return (
					<div className="card" key={idx}>
						<img src={img} alt="User Icon" />
						<h3>{el.name}</h3>
						<p>Email: {el.email}</p>
						<p>Role: {el.role}</p>
					</div>
				);
			})}
		</div>
	);
};

export default TeamList;
