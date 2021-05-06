/**
 * Grandmas Kitchen API
 * An API for a recipe sharing website
 *
 * OpenAPI spec version: v1.0.0
 * Contact: William.G.Parish@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";

/**
 * The GroupUserRequestUpdateRequest model module.
 * @module model/GroupUserRequestUpdateRequest
 * @version v1.0.0
 */
export default class GroupUserRequestUpdateRequest {
  /**
   * Allowed values for the <code>requestingPermission</code> property.
   * @enum {String}
   * @readonly
   */
  static RequestingPermissionEnum = {
    /**
     * value: "OWNER"
     * @const
     */
    "OWNER": "OWNER",
    /**
     * value: "ADMIN"
     * @const
     */
    "ADMIN": "ADMIN",
    /**
     * value: "MODERATOR"
     * @const
     */
    "MODERATOR": "MODERATOR",
    /**
     * value: "WRITER"
     * @const
     */
    "WRITER": "WRITER",
    /**
     * value: "READER"
     * @const
     */
    "READER": "READER",
    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE"
  };
  /**
   * @member {Number} groupId
   */
  groupId = undefined;
  /**
   * @member {module:model/GroupUserRequestUpdateRequest.RequestingPermissionEnum} requestingPermission
   */
  requestingPermission = undefined;

  /**
   * Constructs a new <code>GroupUserRequestUpdateRequest</code>.
   * @alias module:model/GroupUserRequestUpdateRequest
   * @class
   */

  constructor() {


  }

  /**
   * Constructs a <code>GroupUserRequestUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupUserRequestUpdateRequest} obj Optional instance to populate.
   * @return {module:model/GroupUserRequestUpdateRequest} The populated <code>GroupUserRequestUpdateRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GroupUserRequestUpdateRequest();


      if (data.hasOwnProperty("groupId")) {
        obj["groupId"] = ApiClient.convertToType(data["groupId"], "Number");
      }
      if (data.hasOwnProperty("requestingPermission")) {
        obj["requestingPermission"] = ApiClient.convertToType(data["requestingPermission"], "String");
      }
    }
    return obj;
  }

}
