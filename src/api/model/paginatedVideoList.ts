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
import { Video } from './video';


export interface PaginatedVideoList { 
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Video>;
}
