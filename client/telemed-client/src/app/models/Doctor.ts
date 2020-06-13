import { Review } from './Review';
import { Clinic } from './Clinic';

export class Doctor {
    id:string;
    firstname:string;
    lastname:string;
    username:string;
    email:string;
    avatar:string;
    speciality:string;
    clinic:Clinic;
    reviews:Array<Review>;
    rating:number;
    averageRating:number;
    aboutMe:string;
}