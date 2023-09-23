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
import { CategoryPage } from "../pages/category_page/CategoryPage";
import { ProductsPage } from "../pages/products_page/ProductsPage";
import { Aboutpage } from "../pages/about_page/AboutPage";
import { ProjectsPage } from "../pages/projects_page/ProjectsPage";
import ServicesPage from "../pages/services_page/ServicesPage";
import GlowupPage from "../pages/glowup_page/GlowupPage";
import ZirrPage from "../pages/zirr_page/ZirrPage";
import TiaPage from "../pages/tia_page/TiaPage";
import StartProject from "../pages/start_project/StartProject";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path=""
                 element={<HomePage />}
                // element={<Navigate to={"print"} />}
            />
            <Route path="about" element={<Aboutpage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/glowup" element={<GlowupPage />} />
            <Route path="projects/zirr" element={<ZirrPage />} />
            <Route path="projects/tia" element={<TiaPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="start-a-project" element={<StartProject />} />
            <Route path="auth" element={<AuthRoot />}>
                <Route path="" element={<AuthPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="verify" element={<OTPPage />} />
                <Route path="login" element={<LoginPage />} />
            </Route>

            <Route path="print">
                <Route path="" element={<PrintHomePage />} />
                <Route path="products" element={<Outlet />}>
                    <Route path="" element={<ProductsPage />} />
                    <Route path="search" element={<SearchResultPage />} />
                    <Route path=":id/details" element={<ProductDescriptionPage />} />
                    <Route path="category/:category" element={<CategoryPage />} />
                    <Route path=":id/order" element={<OrderPage />} />
                </Route>
                <Route path="account" element={<DashboardPage />} />
                <Route path="cart" element={<CartPage />} />
            </Route>
        </Route>
    )
);