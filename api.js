import axios from "axios";

export const BASE_URL = "http://localhost:5000";

axios.defaults.baseURL = BASE_URL;
export default axios;
