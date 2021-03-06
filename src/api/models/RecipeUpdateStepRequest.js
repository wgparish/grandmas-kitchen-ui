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
 * The RecipeUpdateStepRequest model module.
 * @module model/RecipeUpdateStepRequest
 * @version v1.0.0
 */
export default class RecipeUpdateStepRequest {
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
   * @member {Boolean} new
   */
  new = undefined;

  /**
   * Constructs a new <code>RecipeUpdateStepRequest</code>.
   * @alias module:model/RecipeUpdateStepRequest
   * @class
   */

  constructor() {


  }

  /**
   * Constructs a <code>RecipeUpdateStepRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipeUpdateStepRequest} obj Optional instance to populate.
   * @return {module:model/RecipeUpdateStepRequest} The populated <code>RecipeUpdateStepRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RecipeUpdateStepRequest();


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
      if (data.hasOwnProperty("new")) {
        obj["new"] = ApiClient.convertToType(data["new"], "Boolean");
      }
    }
    return obj;
  }


}
