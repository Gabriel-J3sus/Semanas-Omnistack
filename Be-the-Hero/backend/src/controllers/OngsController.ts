
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

const crypto = require('crypto');

import Ong from '../models/Ong';

export default {
    async index(request: Request, response: Response) {
        const ongsRepository = getRepository(Ong);

        const ongs = await ongsRepository.find();

        return response.json(ongs);
    },

    async show(request: Request, response: Response) {
        const { id } = request.body;

        const ongsRepository = getRepository(Ong);

        const ong = await ongsRepository.findOneOrFail(id);

        return response.json(ong);
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