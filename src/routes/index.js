import LoginPage from "../views/Generic/LoginPage/LoginPage";
import ContactUsPage from "../views/Generic/ContactUsPage/ContactUsPage";
import AboutUsPage from "../views/Generic/AboutUsPage/AboutUsPage";
import HomePage from "../views/Generic/HomePage/HomePage";
import LogoutPage from "../views/Generic/LogoutPage/LogoutPage";
import RegisterPage from "../views/Generic/RegisterPage/RegisterPage";
import ForgotPasswordPage from "../views/Generic/ForgotPasswordPage/ForgotPasswordPage";
import ProfilePage from "../views/Generic/ProfilePage/ProfilePage";
import GroupPage from "../views/Group/GroupPage/GroupPage";
import CreateGroupPage from "../views/Group/CreateGroupPage/CreateGroupPage";
import GroupViewPage from "../views/Group/GroupViewPage/GroupViewPage";
import CreateCookBookPage from "../views/CookBook/CreateCookbookPage/CreateCookBookPage";
import CookBookViewPage from "../views/CookBook/CookBookViewPage/CookBookViewPage";
import CreateRecipePage from "../views/Recipe/CreateRecipePage/CreateRecipePage";
import RecipePage from "../views/Recipe/RecipePage/RecipePage";

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
    path: "/:groupId/:cookBookId/:recipeId",
    name: "RecipeViewPage",
    component: RecipePage
  },
  {
    path: "/:groupId/:cookBookId",
    name: "CookBookViewPage",
    component: CookBookViewPage
  },
  { path: "/:groupId", name: "GroupViewPage", component: GroupViewPage }, //TODO: Add int checking, redirect to 404 if not a number

  { path: "/", name: "HomePage", component: HomePage }
];

export default indexRoutes;
