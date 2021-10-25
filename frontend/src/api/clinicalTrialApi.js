import axios from "axios";

const BASE_URL_CLINICAL_TRIALS = "https://clinicaltrials.gov/api/query"

class ClinicalTrialsApi {

    static async request(endpoint, data = {}, method = "get") {

        const url = `${BASE_URL_CLINICAL_TRIALS}/${endpoint}`;
        const headers = {};
        const params = method === "get" ? data : {};

        try {
            return (await axios({ url, method, data, params, headers}))
        } catch (err) {
            console.log("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async makeRequest(data) {
        let res = this.request(`full_studies?expr=cancer&fmt=JSON`);
        return res;
    };

}

export default ClinicalTrialsApi;