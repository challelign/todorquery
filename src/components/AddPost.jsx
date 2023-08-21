import PostForm from "./PostForm";
import { createPost } from "../api/posts";
import { v4 as uuid4 } from "uuid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const AddPost = () => {
	const queryClient = useQueryClient();

	const createPostMutation = useMutation({
		mutationFn: createPost,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["createPost"] });
			console.log("success");
		},
	});
	const handleAddPost = (post) => {
		createPostMutation.mutate({
			id: uuid4(),
			...post,
		});
	};
	return (
		<div>
			<PostForm onSubmit={handleAddPost} initialValue={{}} />
		</div>
	);
};

export default AddPost;
