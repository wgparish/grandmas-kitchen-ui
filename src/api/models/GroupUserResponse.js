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
 * The GroupUserResponse model module.
 * @module model/GroupUserResponse
 * @version v1.0.0
 */
export default class GroupUserResponse {
  /**
   * Allowed values for the <code>permissionType</code> property.
   * @enum {String}
   * @readonly
   */
  static PermissionTypeEnum = {
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
   * @member {Number} userId
   */
  userId = undefined;
  /**
   * @member {String} firstName
   */
  firstName = undefined;
  /**
   * @member {String} lastName
   */
  lastName = undefined;
  /**
   * @member {String} email
   */
  email = undefined;
  /**
   * @member {module:model/GroupUserResponse.PermissionTypeEnum} permissionType
   */
  permissionType = undefined;

  /**
   * Constructs a new <code>GroupUserResponse</code>.
   * @alias module:model/GroupUserResponse
   * @class
   */

  constructor() {


  }

  /**
   * Constructs a <code>GroupUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupUserResponse} obj Optional instance to populate.
   * @return {module:model/GroupUserResponse} The populated <code>GroupUserResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GroupUserResponse();


      if (data.hasOwnProperty("userId")) {
        obj["userId"] = ApiClient.convertToType(data["userId"], "Number");
      }
      if (data.hasOwnProperty("firstName")) {
        obj["firstName"] = ApiClient.convertToType(data["firstName"], "String");
      }
      if (data.hasOwnProperty("lastName")) {
        obj["lastName"] = ApiClient.convertToType(data["lastName"], "String");
      }
      if (data.hasOwnProperty("email")) {
        obj["email"] = ApiClient.convertToType(data["email"], "String");
      }
      if (data.hasOwnProperty("permissionType")) {
        obj["permissionType"] = ApiClient.convertToType(data["permissionType"], "String");
      }
    }
    return obj;
  }

}
