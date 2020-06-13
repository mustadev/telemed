export class ClinicLocation {
    latitude:number;
    longitude:number;
    zoom:number;

    constructor(latitude:number, longitude:number, zoom:number){
        this.latitude = latitude;
        this.longitude = longitude;
        this.zoom = zoom;
    }
}