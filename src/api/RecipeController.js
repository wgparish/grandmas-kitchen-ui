import api from "../api/ApiBackend";

class RecipeController {
  static recipeAddUrl = "/recipe/secure/add";
  static recipeUpdateUrl = "/recipe/secure/update";
  static recipeDeactivateUrl = "/recipe/secure/deactivate";
  static recipeViewUrl = "/recipe/secure/view";
  static recipeListUrl = "/recipe/secure/list";
  static recipeFavoriteListUrl = "/recipe/secure/list/favorite";

  static recipeAdd = async (recipeAddRequest) => {
    return api.post(this.recipeAddUrl, recipeAddRequest, { withCredentials: true });
  };

  static recipeUpdate = async (recipeUpdateRequest) => {
    return api.put(this.recipeUpdateUrl, recipeUpdateRequest, { withCredentials: true });
  };

  static recipeDeactivate = async (recipeId) => {
    return api.delete(this.recipeDeactivateUrl, {
      params: {
        recipeId: recipeId
      },
      withCredentials: true
    });
  };

  static recipeView = async (groupId, cookbookId, recipeId) => {
    return api.get(this.recipeViewUrl, {
      params: {
        groupId: groupId,
        cookbookId: cookbookId,
        recipeId: recipeId
      },
      withCredentials: true
    });
  };

  static recipeList = async (groupId, cookbookId) => {
    return api.get(this.recipeListUrl, {
      params: {
        groupId: groupId,
        cookbookId: cookbookId
      },
      withCredentials: true
    });
  };

  static recipeFavoriteList = async () => {
    return api.get(this.recipeFavoriteListUrl, { withCredentials: true });
  };

}

export default RecipeController;
