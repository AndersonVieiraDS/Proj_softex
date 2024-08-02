// import db from '../db'

// export interface Company {
//     nome: string;
//     cnpj: string;
//     email: string;
//     contato: string;
//     telefone: string;
//     status: string;
//     logo_path: string;
//     atualizado_por?: number;
//     atualizado_em: Date;
//     criado_por: number;
// }

// const findAllCompany = async (): Promise<any[]> => {
//     return await db('pessoa_juridica').select('*');
// };

// const updateCompany = async (id: number, data: Partial<Company>, userId: number | undefined): Promise<any[]> => {
//     data.atualizado_em = new Date();
//     data.atualizado_por = userId;
    
//     return await db('pessoa_juridica')
//         .where({ id })
//         .update(data)
//         .returning('*');
// };

// export default {
//     findAllCompany,
//     updateCompany
// };



import db from '../db';

export interface Company {
    nome: string;
    cnpj: string;
    email: string;
    contato: string;
    telefone: string;
    status: string;
    logo_path: string;
    atualizado_por?: number;
    atualizado_em: Date;
    criado_por: number;
}

const findAllCompany = async (): Promise<Company[]> => {
    return await db('pessoa_juridica').select('*');
};

const updateCompany = async (id: number, data: Partial<Company>, userId: number | undefined): Promise<Company[]> => {
    data.atualizado_em = new Date();
    data.atualizado_por = userId;
    
    return await db('pessoa_juridica')
        .where({ id })
        .update(data)
        .returning('*');
};

export default {
    findAllCompany,
    updateCompany
};
