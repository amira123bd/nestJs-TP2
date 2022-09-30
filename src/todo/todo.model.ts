import { v4 as uuidv4 } from 'uuid';
import {todoStatusEnum} from './todoStatusEnum.enum'



export class todoModel{
    constructor(
        public id=uuidv4(),
        public name:string ='',
        public description :string ='',
        public creationDate=new Date(),
        public status :todoStatusEnum=todoStatusEnum.waiting,
    ){
    
    }
}