import { Request, Response } from "express";
import clientModel from '../models/Client';

export const createClient = async (req: Request, res: Response, next: unknown) => {
    try {

        console.log(req.body); // Adicione isso para verificar o que está sendo recebido
        const { cpf_cnpj, nome, email, telefone, contato, status, logo_path, razao_social } = req.body;
        const currentDate = new Date();

        if (!cpf_cnpj) {
            return res.status(400).json({ message: 'CPF/CNPJ é obrigatório' });
        }

        // Cria o cliente utilizando o modelo ajustado
        const clientId = await clientModel.createClient({
            cpf_cnpj,
            nome,
            email,
            telefone,
            contato,
            status,
            logo_path,
            razao_social,
            criado_em: currentDate,
            atualizado_em: currentDate
        });

        res.status(201).json({ clientId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar cliente' });
    }
};

export const findAllClients = async (_req: Request, res: Response) => {
    try {
        const clients = await clientModel.findAllClients();
        if (clients.length === 0) {
            return res.status(404).json({ message: 'Nenhum cliente encontrado' });
        }

        // Retorna todos os clientes encontrados
        res.status(200).json(clients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar clientes' });
    }
};

export const updateClient = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const updated = await clientModel.updateClient(Number(id), req.body);
        res.status(200).json(updated);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar um cliente' });
    }
};

export const deleteClient = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await clientModel.deleteClient(Number(id));
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: 'Erro ao deletar cliente' });
    }
};