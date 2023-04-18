export interface Treatment {
    id?:string;
    name:string;
    image:string;
    description:string;
    allergens:string;
    usedProducts:string[];
    duration:number;
    sesion:number;
}
