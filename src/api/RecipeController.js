import api from "../api/ApiBackend";

class RecipeController {
    static recipeAdd = "/recipe/secure/add";
    static recipeUpdate = "/recipe/secure/update";
    static recipeDeactivate = "/recipe/secure/deactivate";
    static recipeView = "/recipe/secure/view";
    static recipeList = "/recipe/secure/list";
    static recipeFavoriteList = "/recipe/secure/list/favorite";

}

export default RecipeController;
