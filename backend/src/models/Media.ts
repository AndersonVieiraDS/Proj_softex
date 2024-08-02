import db from '../db';

export interface Media {
  id?: number;
  titulo: string;
  descricao: string;
  cliente_id: number;
  caminho: string;
  tipo: 'imagem' | 'video';
  status: 'ativo' | 'inativo';
  data_inicio: string;
  data_fim: string;
}

const createMedia = async (media: Media): Promise<number[]> => {
    return db('midia').insert(media).returning('id');
  }
  
const findAllMedia = async (): Promise<Media[]> => {
    return db('midia').select('*');
  }

  const findMediaById = async (id: number): Promise<Media | undefined> => {
    return db('midia').where({ id }).first();
  }

 const updateMedia = async (id: number, media: Partial<Media>) => {
    return db("midia").where({ id }).update(media).returning("*");
  }
  

const deleteMedia = async (id: number) => {
    return db("midia").where({ id }).del();
  }

  export default {
    createMedia,
    findAllMedia,
    findMediaById,
    updateMedia,
    deleteMedia
  }