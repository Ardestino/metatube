/**
 * Metatube API
 * Servicio interno de metatube que contiene herramientas de analisis de videos.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface User { 
    readonly url: string;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     */
    username: string;
    email?: string;
    /**
     * The groups this user belongs to. A user will get all permissions granted to each of their groups.
     */
    groups?: Array<string>;
}

