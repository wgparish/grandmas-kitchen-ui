import api from "../api/ApiBackend";

class CookbookController {
    static cookbookAddUrl = "/cookbook/secure/add";
    static cookbookUpdateUrl = "/cookbook/secure/update";
    static cookbookDeactivateUrl = "/cookbook/secure/deactivate";
    static cookbookViewUrl = "/cookbook/secure/view";
    static cookbookListUrl = "/cookbook/secure/list";
    static cookbookFavoriteListUrl = "/cookbook/secure/list/favorite";

    static cookbookAdd = async (cookbookAddRequest) => {
        return api.post(this.cookbookAddUrl, cookbookAddRequest, {withCredentials:true});
    }

    static cookbookUpdate = async (cookbookUpdateRequest) => {
        return api.put(this.cookbookUpdateUrl, cookbookUpdateRequest, {withCredentials:true});
    }

    static cookbookDeactivate = async (groupId, cookbookId) => {
        return api.delete(this.cookbookDeactivateUrl, {
            params: {
                groupId: groupId,
                cookbookId: cookbookId
            },
            withCredentials: true
        });
    }

    static cookbookView = async (groupId, cookbookId) => {
        return api.get(this.cookbookViewUrl, {
            params: {
                groupId: groupId,
                cookbookId: cookbookId
            },
            withCredentials: true
        });
    }

    static cookbookList = async (groupId) => {
        return api.get(this.cookbookListUrl, {
            params: {
                groupId: groupId
            },
            withCredentials: true
        });
    }

    static cookbookFavoriteList = async () => {
        return api.get(this.cookbookFavoriteListUrl, { withCredentials: true });
    }

}

export default CookbookController;
