import React, { useState } from "react";

const PostForm = ({ onSubmit, initialValue }) => {
	const [post, setPost] = useState({
		title: initialValue.title || "",
		body: initialValue.body || "",
		remark: initialValue.remark || "",
	});
	const handleChangeInput = (e) => {
		setPost({
			...post,
			[e.target.name]: e.target.value,
		});
	};

	// console.log("post", post);
	const renderForm = (label) => (
		<div>
			<label> {label}</label>
			<input
				type="text"
				name={label.toLowerCase()}
				value={post[label.toLowerCase()]}
				onChange={handleChangeInput}
			/>
		</div>
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(post);
		onSubmit(post);
		// after submit set empty
		setPost({
			title: "",
			body: "",
			remark: "",
		});
	};
	return (
		<form onSubmit={handleSubmit}>
			<h2>Add new Post</h2>

			{renderForm("Title")}
			{renderForm("Body")}
			{renderForm("Remark")}
			<button type="submit">register</button>
		</form>
	);
};

export default PostForm;
