import { ItemType } from './itemType.enum';

export interface Item {
    type: ItemType;

    title: string;
    poster: string;
    publishDate: Date;
    description: string;

    //Videogames
    platforms?: string[];
    developer?: string;

    //Films and TV Shows
    director?: string;

    //Films
    duration?: number;

    //TV Shows
    seasons?: number;
    episodes?: number;

    //Books
    author?: string;
    pages?: number;
}