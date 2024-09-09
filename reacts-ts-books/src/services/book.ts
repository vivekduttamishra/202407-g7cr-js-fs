import {Review} from './review';

export interface Author{
    id: string;
    title:string;
    cover:string;
    description: string,
    tags?: string[];
    reviews?: Review[]; 
    series?:string;
    seriesIndex: string|number;
    price:number;
    authorId:string;
    author?:string;
    pages:string|number;
    votes:string|number;
    rating:string|number;
    isbn?:string;
    
    
    //never need them
    _id?: { "$oid": string};
    __v?: number

}