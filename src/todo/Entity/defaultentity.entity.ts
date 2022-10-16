import { Entity, UpdateDateColumn,DeleteDateColumn,CreateDateColumn} from 'typeorm';


@Entity()
export default class defaultentity{
    @UpdateDateColumn()
    updatedAt:Date;
  
    @DeleteDateColumn()
    deletedAt:Date;

    @CreateDateColumn({update:false})
    createdAt: Date;


}