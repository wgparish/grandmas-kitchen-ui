import LoginPage from "../views/LoginPage/LoginPage";
import ContactUsPage from "../views/ContactUsPage/ContactUsPage";
import AboutUsPage from "../views/AboutUsPage/AboutUsPage";
import HomePage from "../views/HomePage/HomePage";
import LogoutPage from "../views/LogoutPage/LogoutPage";
import RegisterPage from "../views/RegisterPage/RegisterPage";
import ForgotPasswordPage from "../views/ForgotPasswordPage/ForgotPasswordPage";
import ProfilePage from "../views/ProfilePage/ProfilePage";
import GroupPage from "../views/GroupPage/GroupPage";
import CreateGroupPage from "../views/CreateGroupPage/CreateGroupPage";
import GroupViewPage from "../views/GroupViewPage/GroupViewPage";
import CreateCookBookPage from "../views/CreateCookbookPage/CreateCookBookPage";
import CookBookViewPage from "../views/CookBookViewPage/CookBookViewPage";
import CreateRecipePage from "../views/CreateRecipePage/CreateRecipePage";

let indexRoutes = [
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/logout", name: "Logout", component: LogoutPage },
  { path: "/contact", name: "ContactUsPage", component: ContactUsPage },
  { path: "/about", name: "AboutUsPage", component: AboutUsPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
  {
    path: "/forgot-password",
    name: "ForgotPasswordPage",
    component: ForgotPasswordPage
  },
  { path: "/account", name: "ProfilePage", component: ProfilePage },
  { path: "/group", name: "GroupPage", component: GroupPage },
  {
    path: "/create-group",
    name: "CreateGroupPage",
    component: CreateGroupPage
  },
  {
    path: "/create-cookbook/:groupId",
    name: "CreateCookBookPage",
    component: CreateCookBookPage
  },
  {
    path: "/create-recipe/:groupId/:cookBookId",
    name: "CreateRecipePage",
    component: CreateRecipePage
  },
  {
    path: "/:groupId/:cookBookId",
    name: "CookBookViewPage",
    component: CookBookViewPage
  },
  { path: "/:groupId", name: "GroupViewPage", component: GroupViewPage },

  { path: "/", name: "HomePage", component: HomePage }
];

export default indexRoutes;
