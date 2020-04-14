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
 * The UserResetPasswordRequest model module.
 * @module model/UserResetPasswordRequest
 * @version v1.0.0
 */
export default class UserResetPasswordRequest {
    /**
     * Constructs a new <code>UserResetPasswordRequest</code>.
     * @alias module:model/UserResetPasswordRequest
     * @class
     */

    constructor() {


    }

    /**
     * Constructs a <code>UserResetPasswordRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserResetPasswordRequest} obj Optional instance to populate.
     * @return {module:model/UserResetPasswordRequest} The populated <code>UserResetPasswordRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserResetPasswordRequest();


            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
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
     * @member {Number} userId
     */
    userId = undefined;
    /**
     * @member {String} email
     */
    email = undefined;
    /**
     * @member {String} password
     */
    password = undefined;


}
