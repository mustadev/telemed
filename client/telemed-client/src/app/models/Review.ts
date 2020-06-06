import { Like } from './Like';

export class Review {
    id:string;
    content:string;
    rating:number;
    patientId:string;
    likes:Like[];
    
    constructor(content:string, likes:Like[], rating:number, authorId:string){
        this.content = content;
        this.likes = likes;
        this.rating = rating;
        this.patientId = authorId;
    };
}