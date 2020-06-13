export class User {
    id:string;
    username:string;
    email:string;
    userType:string;
    roles:Array<string>;
    accessToken:string;
    constructor(
        id:string,
        username:string, 
        email:string, 
        userType:string, 
        roles:Array<string>,
        accessToken:string){
            this.id= id;
            this.username= username;
            this.email = email;
            this.userType = userType;
            this.roles = roles;
            this.accessToken = accessToken;
        };
}