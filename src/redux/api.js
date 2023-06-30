import axios from "axios";

const BASE_URL = "https://backend.hardbaymedia.net/api";

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        "X-Authorization": process.env.REACT_APP_AUTH_TOKEN,
    }
})


export async function loginAPI(credentials) {
    try {
        const response = await client.post("/user/auth/login/", credentials);
        return response.data
    } catch (error) {
        console.error("Error oooo", error.message)
        throw error.message;
    }
}

export async function verifyEmailAPI(email) {
    try {
        const response = await client.post("/user/auth/verify-email/", {"email": email});
        return response.data
    } catch (error) {
        console.error(error);
        console.error("Error oooo", error.message)
        throw error.message;
    }
}

export async function registerUserAPI(credentials) {
    try {
        const response = await client.post("/user/auth/signup/", credentials);
        return response.data
    } catch (error) {
        console.error("Error oooo", error.message)
        throw error.message;
    }
}

export async function getProducts() {
    try {
        const response = await client.get("/commerce/products/");
        return response.data
    } catch (error) {
        console.error("Error oooo", error.message)
        throw error.message;
    }
}

export async function getProductsByCategory(category) {
    try {
        const response = await client.get(`/commerce/products/category/${category}/`);
        console.log("Response", response);
        if (response.data.status === false) {
            throw {"message":response.data.message}
        }
        return response.data
    } catch (error) {
        console.error("Error oooo", error.message)
        throw error.message;
    }
}

export async function getProductsBySearchName(name) {
    try {
        const response = await client.get(`/commerce/products/search/${name}/`);
        console.log("Response", response);
        if (response.data.status === false) {
            throw {"message":response.data.message}
        }
        return response.data
    } catch (error) {
        console.error("Error oooo", error.message)
        throw error.message;
    }
}

export async function getUser(authToken) {
    try {
        const response = await client.get("/user/auth/profile/", {headers: {"X-FORWARDED-USER": `Bearer ${authToken}`}});
        return response.data
    } catch (error) {
        console.error("Error oooo", error)
        throw error.message;
    }
}