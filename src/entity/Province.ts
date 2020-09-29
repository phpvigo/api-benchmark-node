import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("provincia")
export class Province {
    @PrimaryGeneratedColumn({name: 'provinciaid'})
    id: number;

    @Column({type: 'varchar', name: 'provincia'})
    name: string;

    constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
    }
}