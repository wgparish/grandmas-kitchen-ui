import LoginPage from "../views/LoginPage/LoginPage";
import ContactUsPage from "../views/ContactUsPage/ContactUsPage";
import AboutUsPage from "../views/AboutUsPage/AboutUsPage";
import HomePage from "../views/HomePage/HomePage";
import LogoutPage from "../views/LogoutPage/LogoutPage";
import RegisterPage from "../views/RegisterPage/RegisterPage";
import ForgotPasswordPage from "../views/ForgotPasswordPage/ForgotPasswordPage";

let indexRoutes = [
    {path: "/login", name: "LoginPage", component: LoginPage},
    {path: "/logout", name: "Logout", component: LogoutPage},
    {path: "/contact", name: "ContactUsPage", component: ContactUsPage},
    {path: "/about", name: "AboutUsPage", component: AboutUsPage},
    {path: "/register", name: "RegisterPage", component: RegisterPage},
    {path: "/forgot-password", name: "ForgotPasswordPage", component: ForgotPasswordPage},



    {path: "/", name: "HomePage", component: HomePage}

];

export default indexRoutes;
