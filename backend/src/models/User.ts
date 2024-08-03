import db from '../db';

export interface User {
  id?: number;
  status: string;
  tipo_usuario: string;
  nome_completo: string;
  cpf: string;
  email: string;
  login: string;
  senha: string;
  criado_em?: Date;
  atualizado_em?: Date;
}

const createUser = async (user: User): Promise<number[]> => {
  return db('usuarios').insert(user).returning('id');
};

const findAllUsers = async (): Promise<User[]> => {
  return db('usuarios').select('*');
}

const updateUser = async (id: number, user: Partial<User>) => {
  return db("usuarios").where({ id }).update(user).returning("*");
};

const deleteUser = async (id: number) => {
  return db("usuarios").where({ id }).del();
}

export default {
  createUser,
  findAllUsers, updateUser,
  deleteUser
}