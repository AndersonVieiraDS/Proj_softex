// import db from '../db';

// export interface Person {
//     nome: string;
//     cpf: string;
//     email: string;
//     contato: string;
//     telefone: string;
//     status: string;
//     logo_path: string;
//     criado_por: number;
//     atualizado_por?: number;
//     atualizado_em: Date;
//     client_id: Number;
// }

// const findAllPerson = async (): Promise<any[]> => {
//     return await db('pessoa_fisica').select('*');
// };

// const updatePerson = async (id: number, data: Partial<Person>, userId: number | undefined): Promise<any[]> => {
//     data.atualizado_em = new Date();
//     data.atualizado_por = userId;
    
//     return await db('pessoa_fisica')
//         .where({ id })
//         .update(data)
//         .returning('*');
// };

// export default {
//     findAllPerson,
//     updatePerson
// };



import db from '../db';

export interface Person {
    nome: string;
    cpf: string;
    email: string;
    contato: string;
    telefone: string;
    status: string;
    logo_path: string;
    criado_por: number;
    atualizado_por?: number;
    atualizado_em: Date;
    client_id: number;
}

const findAllPerson = async (): Promise<Person[]> => {
    return await db('pessoa_fisica').select('*');
};

const updatePerson = async (id: number, data: Partial<Person>, userId: number | undefined): Promise<Person[]> => {
    data.atualizado_em = new Date();
    data.atualizado_por = userId;
    
    return await db('pessoa_fisica')
        .where({ id })
        .update(data)
        .returning('*');
};

export default {
    findAllPerson,
    updatePerson
};
