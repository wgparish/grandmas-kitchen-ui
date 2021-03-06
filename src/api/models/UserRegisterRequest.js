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
 * The UserRegisterRequest model module.
 * @module model/UserRegisterRequest
 * @version v1.0.0
 */
export default class UserRegisterRequest {
  /**
   * @member {String} email
   */
  email = undefined;
  /**
   * @member {String} password
   */
  password = undefined;
  /**
   * @member {String} firstName
   */
  firstName = undefined;
  /**
   * @member {String} lastName
   */
  lastName = undefined;

  /**
   * Constructs a new <code>UserRegisterRequest</code>.
   * @alias module:model/UserRegisterRequest
   * @class
   */

  constructor() {


  }

  /**
   * Constructs a <code>UserRegisterRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserRegisterRequest} obj Optional instance to populate.
   * @return {module:model/UserRegisterRequest} The populated <code>UserRegisterRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserRegisterRequest();


      if (data.hasOwnProperty("email")) {
        obj["email"] = ApiClient.convertToType(data["email"], "String");
      }
      if (data.hasOwnProperty("password")) {
        obj["password"] = ApiClient.convertToType(data["password"], "String");
      }
      if (data.hasOwnProperty("firstName")) {
        obj["firstName"] = ApiClient.convertToType(data["firstName"], "String");
      }
      if (data.hasOwnProperty("lastName")) {
        obj["lastName"] = ApiClient.convertToType(data["lastName"], "String");
      }
    }
    return obj;
  }


}
