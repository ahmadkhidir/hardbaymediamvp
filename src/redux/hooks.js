import { useEffect, useState } from "react";
import { getProducts } from "./api";
import { Status } from "../utilities/helper";

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