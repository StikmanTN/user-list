import axios from "axios";
import { useEffect, useState } from "react";
import "./users.css";
import ListDisplay from "./ListDisplay";
const UserList = () => {
	const [filter ,setFilter ] =useState("");
	const [cart ,setCart ] =useState([]);
	const [listOfUSer, setListOfUSer] = useState([]);
	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
		console.log(response);
		setListOfUSer(response.data);

		});
	}, []);
	


	return (
		<>
		<ListDisplay listOfUSer={listOfUSer} />
		</>
	);
};

export default UserList;
