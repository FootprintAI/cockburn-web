/**
 * Grandturk/cockburn API Documentations
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UserstoreApplicationID } from './userstoreApplicationID';


export interface UserstoreUserInfo { 
    appId?: UserstoreApplicationID;
    userId?: string;
    userName?: string;
    userEmail?: string;
    groups?: Array<string>;
    disabled?: boolean;
    externalIds?: { [key: string]: string; };
}
export namespace UserstoreUserInfo {
}


