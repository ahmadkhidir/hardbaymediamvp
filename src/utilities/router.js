import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route } from "react-router-dom";
import HomePage from "../pages/home_page/HomePage";
import AuthRoot, { AuthPage, LoginPage, OTPPage, SignupPage } from "../pages/auth_page/AuthPage";
import Root from "../pages/root/Root";
import { PrintHomePage } from "../pages/print_home_page/PrintHomePage";
import SearchResultPage from "../pages/search_result_page/SearchResultPage";
import ProductDescriptionPage from "../pages/product_description_page/ProductDescriptionPage";
import { DashboardPage } from "../pages/dashboard_page/DashboardPage";
import { CartPage } from "../pages/cart_page/CartPage";
import OrderPage from "../pages/order_page/OrderPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path=""
                //  element={<HomePage />}
                element={<Navigate to={"print"} />}
            />
            <Route path="auth" element={<AuthRoot />}>
                <Route path="" element={<AuthPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="verify" element={<OTPPage />} />
                <Route path="login" element={<LoginPage />} />
            </Route>

            <Route path="dashboard" element={<DashboardPage />} />
            
            <Route path="print" element={<PrintHomePage />} />
            <Route path="search-result" element={<SearchResultPage />} />
            <Route path="description" element={<ProductDescriptionPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="order-details" element={<OrderPage />} />
        </Route>
    )
);