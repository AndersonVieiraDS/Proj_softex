import db from '../db';

interface Client {
    cpf_cnpj: string;
    nome: string;
    email: string;
    telefone: string;
    contato: string;
    status: string;
    logo_path?: string;  // Arquivo opcional
    razao_social?: string; // Opcional, usado apenas para pessoa jurídica
    criado_em: Date;
    atualizado_em: Date;
    excluido_em?: Date | null;
}

const createClient = async (data: Client): Promise<number> => {
    const trx = await db.transaction();
    try {
        // Inserir na tabela clientes
        const [client] = await trx('cliente')
            .insert({
                cpf_cnpj: data.cpf_cnpj,
                nome: data.nome,
                email: data.email,
                telefone: data.telefone,
                contato: data.contato,
                status: data.status,
                logo_path: data.logo_path,
                razao_social: data.razao_social || null, // Caso não seja PJ, permanece null
                criado_em: data.criado_em,
                atualizado_em: data.atualizado_em
            })
            .returning(['id']);

        const clientId = client.id;

        await trx.commit();
        return clientId;
    } catch (error) {
        await trx.rollback();
        throw error;
    }
};

const findAllClients = async (): Promise<Client[]> => {
    return await db('cliente').select('*');
};

const updateClient = async (id: number, client: Partial<Client>) => {
    return db("cliente").where({ id }).update(client).returning("*");
  };

const deleteClient = async (id: number): Promise<void> => {
    await db('cliente')
        .where({ id })
        .del();
};

export default {
    createClient,
    findAllClients,
    updateClient,
    deleteClient
};