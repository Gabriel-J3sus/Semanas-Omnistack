import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('ongs')
export default class Ong {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    whatsapp: string;

    @Column()
    city: string;

    @Column()
    uf: string;
}