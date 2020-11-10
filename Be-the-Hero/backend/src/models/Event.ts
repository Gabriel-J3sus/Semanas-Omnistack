import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import Ong from './Ong';

@Entity('events')
export default class Event {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @ManyToOne(() => Ong, ong => ong.events, {
        cascade: true
    })
    @JoinColumn({ name: 'ong' })
    ong: Ong;
}