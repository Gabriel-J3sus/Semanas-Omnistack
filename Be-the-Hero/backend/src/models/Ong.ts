import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';

import Event from './Event';

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

    @OneToMany(() => Event, event => event.ong, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'events' })
    events: Event[];
}