import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

const crypto = require('crypto');

import Ong from '../models/Ong';
import ongView from '../views/ong_view';

export default {
    async index(request: Request, response: Response) {
        const ongsRepository = getRepository(Ong);

        const ongs = await ongsRepository.find({
            relations: ["events"]
        });
        
        return response.json(ongView.renderMany(ongs));
    },

    async show(request: Request, response: Response) {
        const { id } = request.body;

        const ongsRepository = getRepository(Ong);

        const ong = await ongsRepository.findOneOrFail(id, {
            relations: ["events"]
        });

        if (!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID' })
        }

        return response.json(ongView.render(ong));
    },

    async create(request: Request, response: Response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const ongsRepository = getRepository(Ong);
        
        const id = crypto.randomBytes(4).toString('HEX');

        const data =  {id, name, email, whatsapp, city, uf};
        
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            whatsapp: Yup.string().required(),
            city: Yup.string().required(),
            uf: Yup.string().max(2).required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const ong = ongsRepository.create(data);

        await ongsRepository.save(ong);

        return response.status(201).json(ong);
    }

}