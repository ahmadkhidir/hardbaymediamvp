import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"

export function useIsAuthUser() {
    // 
    const location = useLocation()
    const auth = useSelector(state => state.auth)
    const navigate = useNavigate()
    useEffect(() => {
        console.log("Location",location)
      if (auth.authToken === null) {
        navigate(`/auth?next=${location.pathname}`)
      }
    }, [auth, location, navigate])
    // 
}