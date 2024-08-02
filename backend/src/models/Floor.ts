import db from '../db';

export interface Floor {
    id?: number;
    numero: number;
    criado_por: number;
    criado_em?: Date;
}

const createFloor = async (floor: Floor): Promise<number> => {
    const [id] = await db('andar').insert(floor).returning('id');
    return id;
};

const findAllFloor = async (): Promise<Floor[]> => {
    return await db('andar').select('*');
};

const updateFloor = async (id: number, floor: Partial<Floor>): Promise<Floor> => {
    const [updatedFloor] = await db('andar').where({ id }).update(floor).returning('*');
    return updatedFloor;
};

const deleteFloor = async (id: number): Promise<void> => {
    await db('andar').where({ id }).del();
};

export default {
    createFloor,
    findAllFloor,
    updateFloor,
    deleteFloor
};
