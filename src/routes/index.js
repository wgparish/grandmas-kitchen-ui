import LoginPage from "../views/LoginPage/LoginPage";
import ContactUsPage from "../views/ContactUsPage/ContactUsPage";
import AboutUsPage from "../views/AboutUsPage/AboutUsPage";

let indexRoutes = [
    { path: "/login",                name: "LoginPage",             component: LoginPage },
    { path: "/contact",              name: "ContactUsPage",         component: ContactUsPage },
    { path: "/about",                name: "AboutUsPage",           component: AboutUsPage }

];

export default indexRoutes;
