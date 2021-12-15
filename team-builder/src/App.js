// Dependencies
import React, { useEffect, useState } from "react";

// Components
import TeamList from "./components/TeamList/TeamList";
import Form from "./components/Form/Form";

import { data } from "./Constants";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const [teamMembers, setTeamMembers] = useState([]);

	useEffect(() => {
		// console.log(data);
		setTeamMembers(data);
	}, []);

	return (
		<div>
			<h1>Team Builder App</h1>
			<Form team={teamMembers} setTeam={setTeamMembers} />
			<TeamList team={teamMembers} />
		</div>
	);
}

export default App;
