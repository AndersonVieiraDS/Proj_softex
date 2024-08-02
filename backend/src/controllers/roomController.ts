import { Request, Response } from "express";
import roomModel from '../models/Room';

export const createRoom = async (req: Request, res: Response) => {
    try {
        const { numero, andar_id } = req.body;
        const id = await roomModel.createRoom({
            numero, andar_id,
            criado_por: 0,
            atualizado_por: 0,
            excluido_por: 0
        });
        res.status(201).json({ id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar sala' });
    }
};

export const findAllRoom = async (_req: Request, res: Response) => {
    try {
        const room = await roomModel.findAllRooms();
        if (room.length === 0) {
            return res.status(404).json({ message: 'Sala não encontrada' });
        }
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar sala' });
    }
};

export const updateRoom = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updated = await roomModel.updateRoom(Number(id), req.body);
        res.status(200).json(updated);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar ou inserir sala' });
    }
};

export const deleteRoom = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await roomModel.deleteRoom(Number(id));
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao deletar sala' });
    }
};