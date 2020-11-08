import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Event from '../models/Event';
import Ong from '../models/Ong';

export default {
    async index(request: Request, response: Response) {
        const eventsRepository = getRepository(Event);

        const events = await eventsRepository.find();

        return response.json(events);
    },

    async show(request: Request, response: Response) {
        const { id } = request.body;

        const ongsRepository = getRepository(Ong);

        const ong = await ongsRepository.findOneOrFail(id);

        if (!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID' })
        }

        return response.json(ong);
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const eventsRepository = getRepository(Event);

        await eventsRepository.delete(id);

        return response.status(204).send();
    },

    async create(request: Request, response: Response) {
        const { name, description, price, ong_id } = request.body;
        
        const eventsRepository = getRepository(Event);
        const ongsRepository = getRepository(Ong);

        const ong = await ongsRepository.findOneOrFail(ong_id);

        const data = {name, description, price, ong_id};

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            description: Yup.string().required().max(50),
            price: Yup.number().required(),
            ong_id: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        if (!ong) {
            return response.json({ message: 'This ID does not exists' })
        }
        
        const event = eventsRepository.create(data);
        
        await eventsRepository.save(event);
        
        return response.status(201).json(event);      
    }
};
