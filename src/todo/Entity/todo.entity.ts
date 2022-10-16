import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { todoStatusEnum } from "../todoStatusEnum.enum";
import defaultentity from './defaultentity.entity';

@Entity('todo')
export class Todo extends defaultentity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

 
  @Column()
  status:todoStatusEnum;
 


}