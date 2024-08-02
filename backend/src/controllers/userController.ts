import { Request, Response } from "express";
import userModel from '../models/User';

// Função para criar usuário
export const createUser = async (req: Request, res: Response) => {
    const { nome_completo, cpf, email, login, senha, status, tipo_usuario } = req.body;

    try {
        const id = await userModel.createUser({
            nome_completo,
            cpf,
            email,
            login,
            senha,
            status,
            tipo_usuario,
            criado_por: 0
        });

        res.status(201).json({ id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar usuário' });
    }
};

// Função para buscar usuário por ID
export const findAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await userModel.findAllUsers();
        if (users.length === 0) {
            return res.status(404).json({ message: 'Usuario não encontrado' });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
};

// Função para atualizar usuário
export const updateUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const updated = await userModel.updateUser(Number(id), req.body);
        res.status(200).json(updated);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
};

// Função para deletar usuário
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await userModel.deleteUser(Number(id));
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao deletar usuário' });
    }
};