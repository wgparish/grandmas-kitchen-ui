import api from "../api/ApiBackend";

class UserController {

    /**
     * This is to log a user in and create a session on the server side.
     * @param loginRequest Should conform to LoginRequest.js
     * @returns {Promise<AxiosResponse<any>>} a promise to handle with a then, catch, finally.
     */
    static login = async (loginRequest) => {
        return api.post("/user/login", loginRequest, {withCredentials: true});
    }

    static getAccount = async () => {
        return api.get("/user/secure/account", {withCredentials: true});
    }

    static logout = async () => {
        return api.get("/user/logout", {withCredentials: true});
    }
}

export default UserController;
