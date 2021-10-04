import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080"

class HomesApi {
    static token;

    //General request Method
    static async request(endpoint, data = {}, method = "get") {
        // console.log("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${HomesApi.token}`};
        const params = (method === "get") ? data : {};

        try {
            return (await axios({url, method, data, params, headers})).data;
        } catch(err) {
            console.log("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // ROUTES:

    /**  Get all of the homes from server */

    static async getAllHomes() {
        let res = await this.request(`api/homes`);
        return res;
    }

    /** Post a new home */

    static async postAHome(data) {
        let res = await this.request(`api/homes`, data, "post");
        return res;
    }

    /** Get the current user */

    static async getCurrentUser(username) {
        let res = await this.request(`api/users/${username}`);
        return res;
    }

    /** Get the token for login from username and password */

    static async login(data) {
        let res = await this.request(`api/auth/token`, data, "post");
        return res.token;
    }

    /** Signup for the site */

    static async signup(data) {
        let res = await this.request(`api/auth/register`, data, "post");
        return res.token;
    }


}

export default HomesApi;