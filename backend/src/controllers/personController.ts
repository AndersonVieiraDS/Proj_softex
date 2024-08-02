import { Request, Response } from "express";
import personModel from '../models/Person';

export const findAllPerson = async (_req: Request, res: Response) => {
    try {
        const person = await personModel.findAllPerson();
        if (person.length === 0) {
            return res.status(404).json({ message: 'Pessoa fisica não encontrada' });
        }
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar pessoa fisica' });
    }
};