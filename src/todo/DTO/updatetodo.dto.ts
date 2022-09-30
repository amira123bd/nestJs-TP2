import {  IsNotEmpty,  IsString } from 'class-validator';
import { todoStatusEnum } from "../todoStatusEnum.enum";

export class Updatetodo{
    @IsString()
    @IsNotEmpty()
    name:String;
    @IsString()
    @IsNotEmpty()
    description:string;
    
    status:todoStatusEnum;
}