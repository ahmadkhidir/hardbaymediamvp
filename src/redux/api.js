import axios from "axios";

const BASE_URL = "http://138.68.131.197:8000/api/user/auth";

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        "X-Authorization": `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
    }
})


export function loginAPI(email, password) {
    return client.post("/login/", {"email": email, "password": password});
}

export async function verifyEmailAPI(email) {
    // try {
    const response = await client.post("/verify-email/");
    return response;
    //     switch (response.status) {
    //         case 200:
    //             return response.data
    //         default:
    //             throw ClientException(response.statusText);
    //     }
    // } catch (error) {

    // }
}
