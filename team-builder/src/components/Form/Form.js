import React, { useState } from "react";

const initialFormValues = {
	name: "",
	email: "",
	role: "",
};

const Form = ({ team, setTeam }) => {
	const [formData, setFormData] = useState(initialFormValues);

	const [error, setError] = useState("");

	// Updates the state
	const updateForm = (inputName, inputValue) => {
		setFormData({ ...formData, [inputName]: inputValue });
	};

	// Onchange Function
	const change = (e) => {
		const { name, value } = e.target;
		updateForm(name, value);
	};

	// Submit function
	const submit = (e) => {
		e.preventDefault();

		const newTeamMember = {
			name: formData.name,
			email: formData.email,
			role: formData.role,
		};

		if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
			setError("All Fields Are Required!");
		} else {
			setTeam(team.concat(newTeamMember));
			setError("");
		}
	};

	return (
		<div>
			<h2>{error}</h2>
			<form onSubmit={submit}>
				<label>
					Name:
					<input
						type="text"
						placeholder="Enter Name"
						name="name"
						value={formData.name}
						onChange={change}
					/>
				</label>
				<label>
					Email:
					<input
						type="email"
						placeholder="Enter Email"
						name="email"
						value={formData.email}
						onChange={change}
					/>
				</label>
				<label>
					Role:
					<select value={formData.role} name="role" onChange={change}>
						<option value="">--Select Option--</option>
						<option value="Junior Engineer">Junior Engineer</option>
						<option value="Senior Engineer">Senior Engineer</option>
						<option value="CEO">CEO</option>
						<option value="CTO">CTO</option>
						<option value="Founder">Founder</option>
						<option value="CEO & Founder">CEO & Founder</option>
						<option value="CTO & Founder">CTO & Founder</option>
					</select>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Form;
