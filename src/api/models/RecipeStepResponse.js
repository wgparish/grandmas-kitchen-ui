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
 * The RecipeStepResponse model module.
 * @module model/RecipeStepResponse
 * @version v1.0.0
 */
export default class RecipeStepResponse {
  /**
   * @member {Number} id
   */
  id = undefined;
  /**
   * @member {Number} sequenceNumber
   */
  sequenceNumber = undefined;
  /**
   * @member {String} description
   */
  description = undefined;
  /**
   * @member {String} title
   */
  title = undefined;
  /**
   * @member {Boolean} active
   */
  active = undefined;

  /**
   * Constructs a new <code>RecipeStepResponse</code>.
   * @alias module:model/RecipeStepResponse
   * @class
   */

  constructor() {


  }

  /**
   * Constructs a <code>RecipeStepResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipeStepResponse} obj Optional instance to populate.
   * @return {module:model/RecipeStepResponse} The populated <code>RecipeStepResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RecipeStepResponse();


      if (data.hasOwnProperty("id")) {
        obj["id"] = ApiClient.convertToType(data["id"], "Number");
      }
      if (data.hasOwnProperty("sequenceNumber")) {
        obj["sequenceNumber"] = ApiClient.convertToType(data["sequenceNumber"], "Number");
      }
      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(data["description"], "String");
      }
      if (data.hasOwnProperty("title")) {
        obj["title"] = ApiClient.convertToType(data["title"], "String");
      }
      if (data.hasOwnProperty("active")) {
        obj["active"] = ApiClient.convertToType(data["active"], "Boolean");
      }
    }
    return obj;
  }


}
