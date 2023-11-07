
export class Pokemon {
    id:number;
    name:string;
    types:string[] = [];
    main_type:string;
    photo:string;

    constructor(id:number, name:string, types:string[], photo:string) {
        this.id = id;
        this.name = name;
        this.types = types;
        this.photo = photo;
        this.main_type = types[0];
    }

}
