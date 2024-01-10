import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { layoutBodyRef } from "../components/layout/Layout"

export function useIsAuthUser() {
  // 
  const location = useLocation()
  const auth = useSelector(state => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    console.log("Location", location)
    if (auth.authToken === null) {
      navigate(`/auth?next=${location.pathname}`)
    }
  }, [auth, location, navigate])
  // 
}


export function useCounter({max=10, ms=1000, incr=1, targetRef}) {
  useEffect(() => {
    let interval;
    let number = 0;
    let running = false
    layoutBodyRef.current.addEventListener('scroll', function () {
      var counter = targetRef.current;
      var top = counter.getBoundingClientRect().top;
      var height = layoutBodyRef.current.clientHeight;

      if (top <= height) {
        if (!running) {
          running = true
          interval = setInterval(function () {
            if (number <= max) {
              counter.textContent = number;
              number += incr;
            } else {
              clearInterval(interval);
            }
          }, ms);
        }
      } else {
        clearInterval(interval);
        running = false
        number = 0;
      }
    });
  }, [max, ms, incr, targetRef])
}