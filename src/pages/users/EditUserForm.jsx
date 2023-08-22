import {
	QueryClient,
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import React, { useState } from "react";
import * as api from "../../api/usersAPI";

const EditUserForm = ({ user, setIsEditing }) => {
	const [fields, setFields] = useState({ ...user });
	// const queryClient = useQueryClient();

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false, // Disable automatic refetching on window focus
				refetchInterval: 0, // Disable automatic polling
			},
			mutations: {
				// Configure mutation options if needed
			},
		},
	});
	const updateUserMutation = useMutation({
		mutationFn: api.updateUser,
		onMutate: (updateUser) => {
			queryClient.setQueryData(["updateUser", user.id, updateUser]);
			setIsEditing(false);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["updateUser", user.id] });
			console.log("success");
			// setIsEditing(false);
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
		console.log(fields);
		updateUserMutation.mutate(fields);
	};
	console.log("user", fields);

	if (updateUserMutation.isLoading) {
		return "Saving Your changes ....";
	}
	return (
		<div style={{ paddingTop: 20 }}>
			UserForm Update
			<hr />
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
				<button type="submit">update</button>
			</form>
		</div>
	);
};

export default EditUserForm;
