import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import * as api from "../../api/usersAPI";
import { v4 as uuid4 } from "uuid";

const AddUsersForm = () => {
	// const [isAddUser, setIsAddUser] = useState(false);

	const [fields, setFields] = useState({
		name: "",
		username: "",
		remark: "",
	});

	const queryClient = useQueryClient();

	const createUserMutation = useMutation({
		mutationFn: api.createUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["createUser"] });
			console.log("success");
		},
	});

	const handleChange = (e) => {
		setFields({
			...fields,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		createUserMutation.mutate({
			id: uuid4(),
			...fields,
		});
		setFields({
			name: "",
			username: "",
			remark: "",
		});
	};
	return (
		<div style={{ paddingTop: 20 }}>
			AddUsersForm <hr />
			<br />
			<form onSubmit={handleSubmit}>
				<label>
					First name
					<input
						label="First name"
						name="name"
						type="text"
						onChange={handleChange}
						value={fields.name}
						placeholder="First Name"
						style={{ width: "100%", marginBottom: 20 }}
					/>
				</label>
				<label>
					Username
					<input
						type="text"
						name="username"
						label="remark"
						onChange={handleChange}
						value={fields.username}
						placeholder="Username"
						style={{ width: "100%", marginBottom: 20 }}
					/>
				</label>

				<label>
					Remark :{""}
					<textarea
						label="remark"
						value={fields.remark}
						type="text"
						name="remark"
						onChange={handleChange}
						placeholder="Remark"
						style={{ width: "100%", height: 100 }}
					/>
				</label>
				<button type="submit">Save</button>
			</form>
		</div>
	);
};

export default AddUsersForm;
