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
import { KeyWord } from './keyWord';
import { TopicCategory } from './topicCategory';
import { Topic } from './topic';


export interface PatchedChannel { 
    id?: string;
    title?: string;
    description?: string;
    publishedAt?: string;
    defaultLanguage?: string;
    country?: string;
    thumbnail_default_url?: string;
    thumbnail_high_url?: string;
    viewCount?: number;
    subscriberCount?: number;
    hiddenSubscriberCount?: boolean;
    videoCount?: number;
    topics?: Array<Topic>;
    topicCategories?: Array<TopicCategory>;
    keywords?: Array<KeyWord>;
    playlistId?: string;
}
