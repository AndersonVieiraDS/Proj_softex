import db from '../db';

export interface Room {
    id?: number;
    numero: number;
    andar_id: number;
    criado_por: number;
    criado_em?: Date;
    atualizado_em?: Date;
    atualizado_por: number;
    excluido_em?: Date;
    excluido_por: number;
}


const createRoom = async (room: Room): Promise<number[]> => {
    return db('sala').insert(room).returning('id');
  };

const findAllRooms = async (): Promise<Room[]> => {
    return db('sala').select('*');
  }

const updateRoom = async (id: number, room: Partial<Room>) => {
    return db("sala").where({ id }).update(room).returning("*");
  };
  
const deleteRoom = async (id: number) => {
    return db("sala").where({ id }).del();
  }

  export default {
    createRoom,
    findAllRooms,
    updateRoom,
    deleteRoom
  }