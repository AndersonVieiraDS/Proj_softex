import { Request, Response } from "express";
import companyModel from '../models/Company';

export const findAllCompany = async (_req: Request, res: Response) => {
    try {
        const company = await companyModel.findAllCompany();
        if (company.length === 0) {
            return res.status(404).json({ message: 'Pessoa juridica não encontrada' });
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar pessoa jurídica' });
    }
};