import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost } from "../api/postsAPI";

const Post = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		isLoading,
		isError,
		data: post,
		error,
	} = useQuery({
		queryKey: ["postSingle", id],
		queryFn: () => fetchPost(id),
	});
	if (isLoading) {
		return "Loading...";
	}
	if (isError) {
		return ` Error : ${error.message}`;
	}
	return (
		<div>
			<button onClick={() => navigate("/")}>Back to post</button>
			<h2>{post.title} Detail</h2>
			<hr />
			<h3>{post.title}</h3>
			<h5>{post.body}</h5>
			<h6>{post.remark}</h6>
		</div>
	);
};

export default Post;
