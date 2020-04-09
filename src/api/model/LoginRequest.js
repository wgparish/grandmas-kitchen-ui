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
* The LoginRequest model module.
* @module model/LoginRequest
* @version v0
*/
export default class LoginRequest {
    /**
    * Constructs a new <code>LoginRequest</code>.
    * @alias module:model/LoginRequest
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>LoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoginRequest} obj Optional instance to populate.
    * @return {module:model/LoginRequest} The populated <code>LoginRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginRequest();
                        
            
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {String} password
    */
    password = undefined;




}
