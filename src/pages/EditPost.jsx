import React from "react";
import PostForm from "../components/PostForm";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost, updatePost } from "../api/posts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const EditPost = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const {
		isLoading,
		isError,
		data: post,
		error,
	} = useQuery({
		queryKey: ["postSingle", id],
		queryFn: () => fetchPost(id),
	});
	console.log("post form edit", post);

	const updatePostMutation = useMutation({
		mutationFn: updatePost,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["updatePost"] });
			console.log("success");
		},
	});
	// updatePost
	if (isLoading) {
		return "Loading...";
	}
	if (isError) {
		return ` Error : ${error.message}`;
	}
	const handleSubmit = (updatePost) => {
		console.log(updatePost);
		updatePostMutation.mutate({ id, ...updatePost });
		navigate("/");
	};
	return (
		<div>
			EditPost
			<PostForm onSubmit={handleSubmit} initialValue={post} />
		</div>
	);
};

export default EditPost;
