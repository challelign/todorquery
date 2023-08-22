import { Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";
import PostForm from "./components/PostForm";

import Nav from "./pages/Nav";
import Users from "./pages/users/Users";
import { useState } from "react";
import UserDetail from "./pages/users/UserDetail";
import AddUsersForm from "./pages/users/AddUsersForm";

function App() {
	const [userId, setUserId] = useState(); //selected user
	const [addUser, setAddUser] = useState(false);

	const handleToggle = () => {
		setAddUser(!addUser);
	};
	return (
		<div className="App">
			<Nav />
			<h1>Awesome Blog</h1>
			<button onClick={handleToggle} style={{ padding: 10 }}>
				Add User
			</button>

			<div style={{ display: "flex" }}>
				<div
					style={{ padding: 20, width: "25%", borderRadius: "2px solid white" }}
				>
					<Users setUserId={setUserId} />
				</div>

				{addUser ? <AddUsersForm /> : ""}
				{userId && addUser == false ? (
					<div style={{ padding: 20, width: "70%" }}>
						{userId}
						<UserDetail userId={userId} />
					</div>
				) : (
					""
				)}

				<br />
			</div>
			<Routes>
				<Route path="/" element={<PostList />} />
				<Route path="/post/:id" element={<Post />} />
				<Route path="/post/:id/edit" element={<EditPost />} />
				<Route path="/post-form" element={<PostForm />} />
			</Routes>
		</div>
	);
}

export default App;
