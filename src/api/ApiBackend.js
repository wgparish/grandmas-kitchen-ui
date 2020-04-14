import axios from "axios";
import apiBaseURL from "./BaseUrl";

const api = axios.create({
    baseURL: apiBaseURL,
    // timeout: 10000
});

export default (api);
