import axios from "axios";

const HTTPService = axios.create({ baseURL: "http://localhost:3000/api/" });

export default HTTPService;
