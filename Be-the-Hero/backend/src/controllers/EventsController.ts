import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Event from '../models/Event';
import Ong from '../models/Ong';

export default {
    async index(request: Request, response: Response) {
        const eventsRepository = getRepository(Event);

        const events = await eventsRepository.find({
            relations: ["ong"]
        });
        
        return response.json(events);
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const eventsRepository = getRepository(Event);

        const event = await eventsRepository.findOneOrFail(id);

        return response.json(event);
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const eventsRepository = getRepository(Event);

        await eventsRepository.delete(id);

        return response.status(204).json({ message: 'Deleted' });
    },

    async create(request: Request, response: Response) {
        const { name, description, price, ong } = request.body;
        
        const eventsRepository = getRepository(Event);
        const ongsRepository = getRepository(Ong);

        const ongs = await ongsRepository.findOneOrFail(ong);

        const data = {name, description, price, ong};

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            description: Yup.string().required().max(50),
            price: Yup.number().required(),
            ong: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        if (!ongs) {
            return response.json({ message: 'This ID does not exists' })
        }
        
        const event = eventsRepository.create(data);
        
        await eventsRepository.save(event);
        
        return response.status(201).json(event);      
    }
};
