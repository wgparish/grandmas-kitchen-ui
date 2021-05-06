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
 * The RecipeAddLabelRequest model module.
 * @module model/RecipeAddLabelRequest
 * @version v1.0.0
 */
export default class RecipeAddLabelRequest {
  /**
   * Allowed values for the <code>recipeType</code> property.
   * @enum {String}
   * @readonly
   */
  static RecipeTypeEnum = {
    /**
     * value: "RecipeType.FOOD(value=Food)"
     * @const
     */
    "FOOD(value&#x3D;Food)": "RecipeType.FOOD(value=Food)",
    /**
     * value: "RecipeType.DRINK(value=Drink)"
     * @const
     */
    "DRINK(value&#x3D;Drink)": "RecipeType.DRINK(value=Drink)",
    /**
     * value: "RecipeType.PET(value=Pet)"
     * @const
     */
    "PET(value&#x3D;Pet)": "RecipeType.PET(value=Pet)"
  };
  /**
   * @member {String} labelText
   */
  labelText = undefined;
  /**
   * @member {module:model/RecipeAddLabelRequest.RecipeTypeEnum} recipeType
   */
  recipeType = undefined;

  /**
   * Constructs a new <code>RecipeAddLabelRequest</code>.
   * @alias module:model/RecipeAddLabelRequest
   * @class
   */

  constructor() {


  }

  /**
   * Constructs a <code>RecipeAddLabelRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecipeAddLabelRequest} obj Optional instance to populate.
   * @return {module:model/RecipeAddLabelRequest} The populated <code>RecipeAddLabelRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RecipeAddLabelRequest();


      if (data.hasOwnProperty("labelText")) {
        obj["labelText"] = ApiClient.convertToType(data["labelText"], "String");
      }
      if (data.hasOwnProperty("recipeType")) {
        obj["recipeType"] = ApiClient.convertToType(data["recipeType"], "String");
      }
    }
    return obj;
  }

}
