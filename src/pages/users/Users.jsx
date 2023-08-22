import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as api from "../../api/usersAPI";
import AddUsersForm from "./AddUsersForm";
const Users = ({ setUserId }) => {
	const queryClient = useQueryClient();
	const { isLoading, isError, data, error } = useQuery(
		{
			queryKey: ["users"],
			queryFn: api.getUsers,
			cacheTime: 0,
			// staleTime: 0,
		} /*  */
		// { retry: false }
	);

	const deleteUserMutation = useMutation({
		mutationFn: api.deleteUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["delete"] });
			console.log("success");
		},
	});
	if (isLoading) {
		return "loading ...";
	}
	if (isError) {
		return ` Error : ${error.message}`;
	}
	const handleDelete = (id) => {
		deleteUserMutation.mutate(id);
	};
	return (
		<>
			{data?.map((user) => (
				<>
					<div style={{ display: "flex" }}>
						<div style={{ padding: 10 }}>Users</div>
					</div>

					<ul>
						<li key={user.id}>{user.name}</li>
						<li key={user.id}>{user.username}</li>
						<button onClick={() => setUserId(user.id)} style={{ margin: 20 }}>
							View
						</button>
						<button onClick={() => handleDelete(user.id)}>Delete</button>
					</ul>
				</>
			))}
		</>
	);
};

export default Users;
