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
 * The GroupPublicResponse model module.
 * @module model/GroupPublicResponse
 * @version v1.0.0
 */
export default class GroupPublicResponse {
  /**
   * @member {Number} id
   */
  id = undefined;
  /**
   * @member {String} name
   */
  name = undefined;
  /**
   * @member {String} description
   */
  description = undefined;

  /**
   * Constructs a new <code>GroupPublicResponse</code>.
   * @alias module:model/GroupPublicResponse
   * @class
   */

  constructor() {


  }

  /**
   * Constructs a <code>GroupPublicResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupPublicResponse} obj Optional instance to populate.
   * @return {module:model/GroupPublicResponse} The populated <code>GroupPublicResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GroupPublicResponse();


      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(data["description"], "String");
      }
    }
    return obj;
  }


}
