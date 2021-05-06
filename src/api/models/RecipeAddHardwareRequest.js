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
 * The RecipeAddHardwareRequest model module.
 * @module model/RecipeAddHardwareRequest
 * @version v1.0.0
 */
export default class RecipeAddHardwareRequest {
  /**
   * @member {String} hardwareName
   */
  hardwareName = undefined;

  /**
   * Constructs a new <code>RecipeAddHardwareRequest</code>.
   * @alias module:model/RecipeAddHardwareRequest
   * @class
   */

  constructor() {


  }

  /**
   * Constructs a <code>RecipeAddHardwareRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipeAddHardwareRequest} obj Optional instance to populate.
   * @return {module:model/RecipeAddHardwareRequest} The populated <code>RecipeAddHardwareRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RecipeAddHardwareRequest();


      if (data.hasOwnProperty("hardwareName")) {
        obj["hardwareName"] = ApiClient.convertToType(data["hardwareName"], "String");
      }
    }
    return obj;
  }


}
