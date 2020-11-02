import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Event from '../models/Event';

export default {
    async index(request: Request, response: Response) {
        const eventsRepository = getRepository(Event);

        const events = await eventsRepository.find();

        return response.json(events);
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const eventsRepository = getRepository(Event);

        const event = await eventsRepository.findOneOrFail(id);

        return response.json(event);
    },

    async create(request: Request, response: Response) {
        const { name, description, price } = request.body;
        
        const eventsRepository = getRepository(Event);
        
        const data = {name, description, price};

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            description: Yup.string().required().max(50),
            price: Yup.number().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const event = eventsRepository.create(data);
        
        await eventsRepository.save(event);
        
        return response.status(201).json(event);      
    }
};