import { Category } from "@/DataTypes/Category";

export interface IProject{
    id:number,
    name:string,
    description:string,
    image_path:string,
    deployed_url:string,
    github_url:string,
    category:Category[],
    key_techs:string[]
}