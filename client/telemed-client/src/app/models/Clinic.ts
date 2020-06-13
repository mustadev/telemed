import { ClinicLocation } from './ClinicLocation';
export class Clinic{
    name:string;
    description:string;
    services:Array<string>;
    specialities:Array<string>;
    city:string;
    country:string;
    address:string;
    minPrice:number;
    maxPrice:number;
    consultPrice:number;
    location:ClinicLocation;

    static empty():Clinic{
        return {
            name:"",
            description:"",
            services:[],
            specialities:[],
            city:"",
            country:"",
            address:"",
            minPrice:0,
            maxPrice:0,
            consultPrice:0,
            location:new ClinicLocation(0, 0, 2)
        };
    }
}