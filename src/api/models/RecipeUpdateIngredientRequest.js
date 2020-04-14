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

import ApiClient from '../ApiClient';

/**
 * The RecipeUpdateIngredientRequest model module.
 * @module model/RecipeUpdateIngredientRequest
 * @version v1.0.0
 */
export default class RecipeUpdateIngredientRequest {
    /**
     * Constructs a new <code>RecipeUpdateIngredientRequest</code>.
     * @alias module:model/RecipeUpdateIngredientRequest
     * @class
     */

    constructor() {


    }

    /**
     * Constructs a <code>RecipeUpdateIngredientRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecipeUpdateIngredientRequest} obj Optional instance to populate.
     * @return {module:model/RecipeUpdateIngredientRequest} The populated <code>RecipeUpdateIngredientRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecipeUpdateIngredientRequest();


            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('sequenceNumber')) {
                obj['sequenceNumber'] = ApiClient.convertToType(data['sequenceNumber'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('optional')) {
                obj['optional'] = ApiClient.convertToType(data['optional'], 'Boolean');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * @member {Number} id
     */
    id = undefined;
    /**
     * @member {Number} sequenceNumber
     */
    sequenceNumber = undefined;
    /**
     * @member {String} quantity
     */
    quantity = undefined;
    /**
     * @member {String} unit
     */
    unit = undefined;
    /**
     * @member {String} name
     */
    name = undefined;
    /**
     * @member {Boolean} optional
     */
    optional = undefined;
    /**
     * @member {Boolean} new
     */
    new = undefined;


}
