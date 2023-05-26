import axios from "axios";

const BASE_URL = "http://138.68.131.197:8000/api/user/auth";

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        "X-Authorization": process.env.REACT_APP_AUTH_TOKEN,
    }
})


export async function loginAPI(credentials) {
    try {
        const response = await client.post("/login/", credentials);
        return response.data
    } catch (error) {
        console.error("Error oooo", error.message)
        throw error.message;
    }
}

export async function verifyEmailAPI(email) {
    try {
        const response = await client.post("/verify-email/", {"email": email});
        return response.data
    } catch (error) {
        console.error(error);
        console.error("Error oooo", error.message)
        throw error.message;
    }
}

export async function registerUserAPI(credentials) {
    try {
        const response = await client.post("/signup/", credentials);
        return response.data
    } catch (error) {
        console.error("Error oooo", error.message)
        throw error.message;
    }
}
