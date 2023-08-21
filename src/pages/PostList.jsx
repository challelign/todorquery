import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import AddPost from "../components/AddPost";
import { deletePost, fetchPosts } from "../api/posts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const PostList = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const {
		isLoading,
		isError,
		data: posts,
		error,
	} = useQuery({
		queryKey: ["postsBlog"],
		queryFn: fetchPosts,
	});

	const deletePostMutation = useMutation({
		mutationFn: deletePost,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["delete"] });
			console.log("success");
		},
	}); // console.log(fetchPostsQuery);
	if (isLoading) {
		return "Loading...";
	}
	if (isError) {
		return ` Error : ${error.message}`;
	}
	const handleDelete = (id) => {
		deletePostMutation.mutate(id);
	};
	return (
		<>
			<AddPost />
			<h1>Blog List</h1>
			{posts.map((post) => (
				<div key={post.id} style={{ padding: "10px" }}>
					<div style={{ border: "1px solid" }}>
						<h3
							style={{
								margin: "5px",
								cursor: "pointer",
								color: "blue",
								textDecoration: "underline",
							}}
							onClick={() => navigate(`/post/${post.id}`)}
						>
							{post.title}
						</h3>

						<h6 style={{ margin: "5px" }}>{post.body}</h6>
						<h6 style={{ margin: "5px" }}>{post.remark}</h6>
						<div style={{ paddingTop: "10px" }}>
							<button
								style={{ margin: "5px" }}
								onClick={() => navigate(`/post/${post.id}/edit`)}
							>
								Edit
							</button>
							<button
								style={{ margin: "5px" }}
								onClick={() => handleDelete(post.id)}
							>
								Delete
							</button>
							<button
								style={{ margin: "5px" }}
								onClick={() => navigate(`/post/${post.id}`)}
							>
								Detail
							</button>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default PostList;
