import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory, getProductsBySearchName, getUser } from "./api";
import { Status } from "../utilities/helper";
import { useSelector } from "react-redux";

export function useProducts() {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [status, setStatus] = useState(Status.idle)
    const [reload, setReload] = useState()
    useEffect(() => {
        setStatus(Status.pending);
        getProducts()
            .then((value) => {
                setData(value)
                setStatus(Status.success);
            })
            .catch((e) => {
                setError(e)
                setStatus(Status.failed);
            });
    }, [reload])
    return [status, data, error, setReload];
}

export function useProductsByCategory(category) {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [status, setStatus] = useState(Status.idle)
    const [reload, setReload] = useState()
    useEffect(() => {
        setStatus(Status.pending);
        getProductsByCategory(category)
            .then((value) => {
                setData(value)
                setStatus(Status.success);
            })
            .catch((e) => {
                setError(e)
                setStatus(Status.failed);
            });
    }, [category, reload])
    return [status, data, error, setReload];
}

export function useProductsBySearchName(name) {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [status, setStatus] = useState(Status.idle)
    const [reload, setReload] = useState()
    useEffect(() => {
        setStatus(Status.pending);
        getProductsBySearchName(name)
            .then((value) => {
                setData(value)
                setStatus(Status.success);
            })
            .catch((e) => {
                setError(e)
                setStatus(Status.failed);
            });
    }, [name, reload])
    return [status, data, error, setReload];
}

export function useUser() {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [status, setStatus] = useState(Status.idle)
    const [reload, setReload] = useState()
    const authToken = useSelector(state => state.auth.authToken)
    useEffect(() => {
        // console.log("AuthToken", authToken)
        setStatus(Status.pending);
        getUser(authToken)
            .then((value) => {
                setData(value)
                setStatus(Status.success);
            })
            .catch((e) => {
                setError(e)
                setStatus(Status.failed);
            });
    }, [reload, authToken])
    return [status, data, error, setReload];
}