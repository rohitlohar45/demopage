import axios from "axios";

function getAccessToken() {
	const token = localStorage.getItem("access_token") || "";
	return token === "" ? null : `Bearer ${token}`;
}

const api = axios.create({
	baseURL: "http://localhost:5000/api",
});

export default api;
export { getAccessToken };
