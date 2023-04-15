import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route } from "react-router-dom";
import HomePage from "../pages/home_page/HomePage";
import { AuthPage, LoginPage, OTPPage, SignupPage } from "../pages/auth_page/AuthPage";
import Root from "../pages/root/Root";
import { PrintHomePage } from "../pages/print_home_page/PrintHomePage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path=""
            //  element={<HomePage />}
            element={<Navigate to={"print"} />}
               />
            <Route path="auth" element={<Outlet />}>
                <Route path="" element={<AuthPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="verify" element={<OTPPage />} />
                <Route path="login" element={<LoginPage />} />
            </Route>
            <Route path="print" element={<PrintHomePage />} />
        </Route>
    )
);