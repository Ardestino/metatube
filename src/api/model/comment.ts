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


export interface Comment { 
    id: string;
    videoId: string;
    textOriginal: string;
    authorChannelId: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelUrl: string;
    canRate?: boolean;
    viewerRating: string;
    likeCount?: number;
    publishedAt: string;
    updatedAt: string;
    canReply?: boolean;
    totalReplyCount?: number;
    isPublic?: boolean;
}

