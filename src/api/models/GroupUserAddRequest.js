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
 * The GroupUserAddRequest model module.
 * @module model/GroupUserAddRequest
 * @version v1.0.0
 */
export default class GroupUserAddRequest {
    /**
     * Constructs a new <code>GroupUserAddRequest</code>.
     * @alias module:model/GroupUserAddRequest
     * @class
     */

    constructor() {


    }

    /**
     * Constructs a <code>GroupUserAddRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupUserAddRequest} obj Optional instance to populate.
     * @return {module:model/GroupUserAddRequest} The populated <code>GroupUserAddRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupUserAddRequest();


            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('permissionType')) {
                obj['permissionType'] = ApiClient.convertToType(data['permissionType'], 'String');
            }
        }
        return obj;
    }

    /**
     * @member {Number} groupId
     */
    groupId = undefined;
    /**
     * @member {String} email
     */
    email = undefined;
    /**
     * @member {module:model/GroupUserAddRequest.PermissionTypeEnum} permissionType
     */
    permissionType = undefined;


    /**
     * Allowed values for the <code>permissionType</code> property.
     * @enum {String}
     * @readonly
     */
    static PermissionTypeEnum = {
        /**
         * value: "OWNER"
         * @const
         */
        "OWNER": "OWNER",
        /**
         * value: "ADMIN"
         * @const
         */
        "ADMIN": "ADMIN",
        /**
         * value: "MODERATOR"
         * @const
         */
        "MODERATOR": "MODERATOR",
        /**
         * value: "WRITER"
         * @const
         */
        "WRITER": "WRITER",
        /**
         * value: "READER"
         * @const
         */
        "READER": "READER",
        /**
         * value: "NONE"
         * @const
         */
        "NONE": "NONE"
    };

}
