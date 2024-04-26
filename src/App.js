import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import {axiosClient} from '../src/pages/axios/axiosClien'
function App() {
	const [user, setUser] = useState(null);

	
		const getUser = async () => {
			try {
				const url = `http://localhost:8080/auth/login/success`;
				const {data} = await axiosClient.get(url);
				
				setUser(data.user._json);
			} catch (err) {
				console.log(err);
			}
		};
	
		useEffect(() => {
			getUser();
		}, []);
		

	
	return (
		<div className="container">
			<Routes>
				<Route
					exact
					path="/"
					element={user ? <Home user={user} /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>
			</Routes>
		</div>
	);
}

export default App;
