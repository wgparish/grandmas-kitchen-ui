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
 * The RecipeHardwareResponse model module.
 * @module model/RecipeHardwareResponse
 * @version v1.0.0
 */
export default class RecipeHardwareResponse {
  /**
   * @member {Number} id
   */
  id = undefined;
  /**
   * @member {String} hardwareName
   */
  hardwareName = undefined;
  /**
   * @member {Boolean} active
   */
  active = undefined;

  /**
   * Constructs a new <code>RecipeHardwareResponse</code>.
   * @alias module:model/RecipeHardwareResponse
   * @class
   */

  constructor() {


  }

  /**
   * Constructs a <code>RecipeHardwareResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipeHardwareResponse} obj Optional instance to populate.
   * @return {module:model/RecipeHardwareResponse} The populated <code>RecipeHardwareResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RecipeHardwareResponse();


      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("hardwareName")) {
        obj["hardwareName"] = ApiClient.convertToType(data["hardwareName"], "String");
      }
      if (data.hasOwnProperty("active")) {
        obj["active"] = ApiClient.convertToType(data["active"], "Boolean");
      }
    }
    return obj;
  }


}
