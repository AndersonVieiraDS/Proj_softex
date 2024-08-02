import { Request, Response } from "express";
import floorModel from '../models/Floor';

export const createFloor = async (req: Request, res: Response) => {
    try {
        const { numero, criado_por } = req.body;
        const id = await floorModel.createFloor({ numero, criado_por });
        res.status(201).json({ id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar andar' });
    }
};

export const findAllFloor = async (_req: Request, res: Response) => {
    try {
        const floor = await floorModel.findAllFloor();
        if (floor.length === 0) {
            return res.status(404).json({ message: 'Andar não encontrado' });
        }
        res.status(200).json(floor);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar andar' });
    }
};

export const updateFloor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updated = await floorModel.updateFloor(Number(id), req.body);
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const deleteFloor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await floorModel.deleteFloor(Number(id));
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};