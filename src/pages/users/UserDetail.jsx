import React, { useState } from "react";
import * as api from "../../api/usersAPI";
import { useQuery } from "@tanstack/react-query";
import EditUserForm from "./EditUserForm";

const UserDetail = ({ userId }) => {
	const [isEditing, setIsEditing] = useState(false);
	const {
		data: user,
		isLoading,
		error,
		isError,
	} = useQuery(
		{
			queryKey: ["user", userId],
			queryFn: () => api.getUser(userId),
		},
		{
			enabled: Boolean(userId),
		}
	);
	if (!userId) {
		return "Select a user";
	}
	if (isLoading) {
		return "Loading user details ...";
	}
	if (isError) {
		return ` Error : ${error.message}`;
	}
	return (
		<div>
			<button onClick={() => setIsEditing(!isEditing)}>
				{isEditing ? "Cancel" : "Edit"}
			</button>

			{isEditing ? (
				<EditUserForm user={user} setIsEditing={setIsEditing} />
			) : (
				<>
					<h3>UserDetail </h3>
					<br />
					<h4>{user.name}</h4>
					<h5>{user.username}</h5>
					<h5>{user.remark}</h5>
				</>
			)}
		</div>
	);
};

export default UserDetail;
