import api from "../api/ApiBackend";

class UserController {
    static loginUrl = "/user/login";
    static logoutUrl = "/user/logout";
    static accountUrl = "/user/secure/account";
    static accountUpdateUrl = "/user/secure/account/update";
    static forgotPasswordUrl = "/user/password/forgot";
    static pinCheckUrl = "/user/password/pin-check";
    static resetPasswordUrl = "/user/password/reset";
    static registerUrl = "/user/register";
    static groupFavoriteAddUrl = "/user/secure/group/favorite/add";
    static cookbookFavoriteAddUrl = "/user/secure/cookbook/favorite/add";
    static recipeFavoriteAddUrl = "/user/secure/recipe/favorite/add";
    static groupFavoriteRemoveUrl = "/user/secure/group/favorite/remove";
    static cookbookFavoriteRemoveUrl = "/user/secure/cookbook/favorite/remove";
    static recipeFavoriteRemoveUrl = "/user/secure/recipe/favorite/remove";


    /**
     * This is to log a user in and create a session on the server side.
     * @param loginRequest Should conform to LoginRequest.js
     * @returns {Promise<AxiosResponse<any>>} a promise to handle with a then, catch, finally.
     */
    static login = async (loginRequest) => {
        return api.post(this.loginUrl, loginRequest, {withCredentials: true});
    }

    static logout = async () => {
        return api.get(this.logoutUrl, {withCredentials: true});
    }

    static getAccount = async () => {
        return api.get(this.accountUrl, {withCredentials: true});
    }

    static updateAccount = async (userUpdateRequest) => {
        return api.put(this.accountUpdateUrl, userUpdateRequest, {withCredentials: true});
    }

    static forgotPassword = async (email) => {
        return api.get(this.forgotPasswordUrl,
            {
                params: {email: email},
                withCredentials: true
            });
    }

    static pinCheck = async (email, pin) => {
        return api.post(this.pinCheckUrl,
            {
                email: email,
                pin: pin
            }, {withCredentials: true});
    }

    static resetPassword = async (userResetPasswordRequest) => {
        return api.post(this.resetPasswordUrl, userResetPasswordRequest, {withCredentials: true});
    }

    static register = async (userRegisterRequest) => {
        return api.post(this.registerUrl, userRegisterRequest, {withCredentials: true});
    }

    static groupFavoriteAdd = async (groupId) => {
        return api.post(this.groupFavoriteAddUrl,
            {
                groupId: groupId
            },
            {
                withCredentials: true
            });
    }

    static cookbookFavoriteAdd = async (groupId, cookbookId) => {
        return api.post(this.cookbookFavoriteAddUrl,
            {
                groupId: groupId,
                cookbookId: cookbookId
            },
            {
                withCredentials: true
            });
    }

    static recipeFavoriteAdd = async (recipeId) => {
        return api.post(this.recipeFavoriteAddUrl,
            {
                recipeId: recipeId
            },
            {
                withCredentials: true
            });
    }

    static groupFavoriteRemove = async (groupId) => {
        return api.post(this.groupFavoriteRemoveUrl,
            {
                groupId: groupId
            },
            {
                withCredentials: true
            });
    }

    static cookbookFavoriteRemove = async (groupId, cookbookId) => {
        return api.post(this.cookbookFavoriteRemoveUrl,
            {
                groupId: groupId,
                cookbookId: cookbookId
            },
            {
                withCredentials: true
            });
    }

    static recipeFavoriteRemove = async (recipeId) => {
        return api.post(this.recipeFavoriteRemoveUrl,
            {
                recipeId: recipeId
            },
            {
                withCredentials: true
            });
    }
}

export default UserController;
