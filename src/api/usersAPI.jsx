import axios from "axios";

const api = axios.create({
	// baseURL: `http://localhost:3000/`,
	baseURL: `http://localhost:3002/`,
});

// export const getUsers = () => {
// 	api.get("/users").then((res) => res.data);
// };

// export const getUser = (id) => {
// 	api.get(`/users/${id}`).then((res) => res.data);
// };

// export const updateUser = ({ id, ...updateUser }) => {
// 	api.put(`/users/${id}`, updateUser).then((res) => res.data);
// };

export const getUsers = async () => {
	const response = await api.get("/users");
	return response.data;
};

export const getUser = async (id) => {
	const response = await api.get(`/users/${id}`);
	return response.data;
};

export const updateUser = async ({ id, ...updateUser }) => {
	const response = await api.put(`/users/${id}`, updateUser);
	return response.data;
};

export const deleteUser = async (id) => {
	const response = await api.delete(`/users/${id}`, deleteUser);

	return response.data;
};

export const createUser = async (newUser) => {
	const response = await api.post(`/users/`, newUser);

	return response.data;
};
