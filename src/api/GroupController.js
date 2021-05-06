import api from "../api/ApiBackend";

class GroupController {
  static groupAddUrl = "/group/secure/add";
  static groupViewUrl = "/group/secure/view";
  static groupAdminUpdateUrl = "/group/secure/admin/update";
  static groupAdminDeactivateUrl = "/group/secure/admin/deactivate";
  static groupListUrl = "/group/secure/list";
  static groupPublicListUrl = "/group/secure/public/list";
  static groupFavoriteListUrl = "/group/secure/list/favorite";
  static groupUserJoinUrl = "/group/secure/user/join";
  static groupUserLeaveUrl = "/group/secure/user/leave";
  static groupUserUpdateUrl = "/group/secure/user/update";
  static groupUserListUrl = "/group/secure/user/list";
  static groupAdminUserAddUrl = "/group/secure/admin/user/add";
  static groupAdminUserDeactivateUrl = "/group/secure/admin/user/deactivate";
  static groupAdminUserUpdateUrl = "/group/secure/admin/user/update";
  static groupAdminUserListUrl = "/group/secure/admin/user/list";
  static groupAdminUserListPendingUrl = "/group/secure/admin/user/list/pending";

  static groupAdd = async groupAddRequest => {
    return api.post(this.groupAddUrl, groupAddRequest, {
      withCredentials: true
    });
  };

  static groupView = async groupId => {
    return api.get(this.groupViewUrl, {
      params: {
        groupId: groupId
      },
      withCredentials: true
    });
  };

  static groupAdminUpdate = async groupUpdateRequest => {
    return api.put(this.groupAdminUpdateUrl, groupUpdateRequest, {
      withCredentials: true
    });
  };

  static groupAdminDeactivate = async groupId => {
    return api.delete(this.groupAdminDeactivateUrl, {
      params: {
        groupId: groupId
      },
      withCredentials: true
    });
  };

  static groupList = async () => {
    return api.get(this.groupListUrl, { withCredentials: true });
  };

  static groupPublicList = async () => {
    return api.get(this.groupPublicListUrl, { withCredentials: true });
  };

  static groupFavoriteList = async () => {
    return api.get(this.groupFavoriteListUrl, { withCredentials: true });
  };

  static groupUserJoin = async groupJoinRequest => {
    return api.post(this.groupUserJoinUrl, groupJoinRequest, {
      withCredentials: true
    });
  };

  static groupUserLeave = async groupId => {
    return api.delete(this.groupUserLeaveUrl, {
      params: {
        groupId: groupId
      },
      withCredentials: true
    });
  };

  static groupUserUpdate = async groupUserUpdateRequest => {
    return api.put(this.groupUserUpdateUrl, groupUserUpdateRequest, {
      withCredentials: true
    });
  };

  static groupUserList = async groupId => {
    return api.get(this.groupUserListUrl, {
      params: {
        groupId: groupId
      },
      withCredentials: true
    });
  };

  static groupAdminUserAdd = async groupAdminUserAddRequest => {
    return api.post(this.groupAdminUserAddUrl, groupAdminUserAddRequest, {
      withCredentials: true
    });
  };

  static groupAdminUserDeactivate = async (groupId, userId) => {
    return api.delete(this.groupAdminUserDeactivateUrl, {
      params: {
        groupId: groupId,
        userId: userId
      },
      withCredentials: true
    });
  };

  static groupAdminUserUpdate = async groupUserUpdateRequest => {
    return api.put(this.groupAdminUserUpdateUrl, groupUserUpdateRequest, {
      withCredentials: true
    });
  };

  static groupAdminUserList = async groupId => {
    return api.get(this.groupAdminUserListUrl, {
      params: {
        groupId: groupId
      },
      withCredentials: true
    });
  };

  static groupAdminUserListPending = async groupId => {
    return api.get(this.groupAdminUserListPendingUrl, {
      params: {
        groupId: groupId
      },
      withCredentials: true
    });
  };
}

export default GroupController;
