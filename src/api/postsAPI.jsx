// export async function fetchusers() {
// 	const response = await fetch("http://localhost:3002/users");
// 	return response.json;
// }

export const fetchPosts = async () => {
	const response = await fetch("http://localhost:3002/users");
	return response.json();
};

export const fetchPost = async (id) => {
	const response = await fetch(`http://localhost:3002/users/${id}`);
	return response.json();
};

export async function createPost(newPost) {
	const response = await fetch(`http://localhost:3002/users`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newPost),
	});
	return response.json();
}

export async function updatePost(updatedPost) {
	const response = await fetch(
		`http://localhost:3002/users/${updatedPost.id}`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedPost),
		}
	);
	return response.json();
}

export async function deletePost(id) {
	const response = await fetch(`http://localhost:3002/users/${id}`, {
		method: "delete",
	});
	return response.json();
}
