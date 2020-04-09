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
import RecipeUpdateHardwareRequest from './RecipeUpdateHardwareRequest';
import RecipeUpdateIngredientCategoryRequest from './RecipeUpdateIngredientCategoryRequest';
import RecipeUpdateLabelRequest from './RecipeUpdateLabelRequest';
import RecipeUpdateStepRequest from './RecipeUpdateStepRequest';

/**
* The RecipeUpdateRequest model module.
* @module model/RecipeUpdateRequest
* @version v0
*/
export default class RecipeUpdateRequest {
    /**
    * Constructs a new <code>RecipeUpdateRequest</code>.
    * @alias module:model/RecipeUpdateRequest
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RecipeUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RecipeUpdateRequest} obj Optional instance to populate.
    * @return {module:model/RecipeUpdateRequest} The populated <code>RecipeUpdateRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecipeUpdateRequest();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('cookbookId')) {
                obj['cookbookId'] = ApiClient.convertToType(data['cookbookId'], 'Number');
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('recipeType')) {
                obj['recipeType'] = ApiClient.convertToType(data['recipeType'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('totalTime')) {
                obj['totalTime'] = ApiClient.convertToType(data['totalTime'], 'Number');
            }
            if (data.hasOwnProperty('prepTime')) {
                obj['prepTime'] = ApiClient.convertToType(data['prepTime'], 'Number');
            }
            if (data.hasOwnProperty('cookTime')) {
                obj['cookTime'] = ApiClient.convertToType(data['cookTime'], 'Number');
            }
            if (data.hasOwnProperty('serves')) {
                obj['serves'] = ApiClient.convertToType(data['serves'], 'String');
            }
            if (data.hasOwnProperty('labelList')) {
                obj['labelList'] = ApiClient.convertToType(data['labelList'], [RecipeUpdateLabelRequest]);
            }
            if (data.hasOwnProperty('hardwareList')) {
                obj['hardwareList'] = ApiClient.convertToType(data['hardwareList'], [RecipeUpdateHardwareRequest]);
            }
            if (data.hasOwnProperty('stepList')) {
                obj['stepList'] = ApiClient.convertToType(data['stepList'], [RecipeUpdateStepRequest]);
            }
            if (data.hasOwnProperty('ingredientCategoryList')) {
                obj['ingredientCategoryList'] = ApiClient.convertToType(data['ingredientCategoryList'], [RecipeUpdateIngredientCategoryRequest]);
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {Number} cookbookId
    */
    cookbookId = undefined;
    /**
    * @member {Number} groupId
    */
    groupId = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {module:model/RecipeUpdateRequest.RecipeTypeEnum} recipeType
    */
    recipeType = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {Number} totalTime
    */
    totalTime = undefined;
    /**
    * @member {Number} prepTime
    */
    prepTime = undefined;
    /**
    * @member {Number} cookTime
    */
    cookTime = undefined;
    /**
    * @member {String} serves
    */
    serves = undefined;
    /**
    * @member {Array.<module:model/RecipeUpdateLabelRequest>} labelList
    */
    labelList = undefined;
    /**
    * @member {Array.<module:model/RecipeUpdateHardwareRequest>} hardwareList
    */
    hardwareList = undefined;
    /**
    * @member {Array.<module:model/RecipeUpdateStepRequest>} stepList
    */
    stepList = undefined;
    /**
    * @member {Array.<module:model/RecipeUpdateIngredientCategoryRequest>} ingredientCategoryList
    */
    ingredientCategoryList = undefined;



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
        "PET(value&#x3D;Pet)": "RecipeType.PET(value=Pet)"    };

}
