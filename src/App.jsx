import { Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";
import PostForm from "./components/PostForm";

import Nav from "./pages/Nav";

function App() {
	return (
		<div>
			<Nav />

			<h1>Awesome Blog</h1>
			<Routes>
				<Route path="/" element={<PostList />} />
				<Route path="/post/:id" element={<Post />} />
				<Route path="/post/:id/edit" element={<EditPost />} />
				<Route path="/post-form" element={<PostForm />} />
			</Routes>
			{/* <Router>
				<div className="App">
					<Nav />
					<Switch>
						<Route path="/" exact component={<PostList />} />
						<Route path="/post/:id" component={<Post />} />
						<Route path="/post/:id/edit" component={<EditPost />} />
						<Route path="/post-form" component={<PostForm />} />
					</Switch>
				</div>
			</Router> */}
		</div>
	);
}

export default App;
