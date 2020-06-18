import axios from "axios";
const apiUrl = "https://movie-ticket-app.herokuapp.com";

const api = axios.create({
    baseURL: `${apiUrl}/api`,
    "Content-Type": "application/json",
});

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    config.headers.token = token ? token : "";
    return config;
});

const BaseApi = () => {
    return {
        async get(endpoint) {
            try {
                const res = await api.get(endpoint);
                return res.data;
            } catch (error) {
                return error.response;
            }
        },

        async post(endpoint, body, contentType) {
            try {
                const res = await api.post(endpoint, body, contentType === "formData" && { headers: { "content-type": "multipart/form-data" } });
                return res.data;
            } catch (error) {
                return error.response;
            }
        },

        async delete(endpoint) {
            try {
                const res = await api.delete(endpoint);
                return res.data;
            } catch (error) {
                return error.response;
            }
        },
    };
};

export default BaseApi;
