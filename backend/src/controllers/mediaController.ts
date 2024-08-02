import { Request, Response } from "express";
import mediaModel from '../models/Media';

export const createMedia = async (req: Request, res: Response): Promise<void> => {
    try {
      const newMidia = req.body;
      const ids = await mediaModel.createMedia(newMidia);
      res.status(201).json({ id: ids[0], ...newMidia });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar mídia' });
      console.log(error);
    }
  };

export const findAllMedia = async (_req: Request, res: Response) => {
    try {
      const midias = await mediaModel.findAllMedia();
      res.status(200).json(midias);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar mídias' });
    }
  };

  export const findMediaById = async (req: Request, res: Response) => {
    try {
      const midia = await mediaModel.findMediaById(Number(req.params.id));
      if (midia) {
        res.status(200).json(midia);
      } else {
        res.status(404).json({ message: 'Mídia não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar mídia' });
    }
  };

export const updateMedia = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updated = await mediaModel.updateMedia(Number(id), req.body);
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};

export const deleteMedia = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await mediaModel.deleteMedia(Number(id));
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: "error.message" });
    }
};