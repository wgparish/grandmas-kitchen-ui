/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The RecipeIngredientResponse model module.
* @module model/RecipeIngredientResponse
* @version v0
*/
export default class RecipeIngredientResponse {
    /**
    * Constructs a new <code>RecipeIngredientResponse</code>.
    * @alias module:model/RecipeIngredientResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RecipeIngredientResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RecipeIngredientResponse} obj Optional instance to populate.
    * @return {module:model/RecipeIngredientResponse} The populated <code>RecipeIngredientResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecipeIngredientResponse();
                        
            
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




}
