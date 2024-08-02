import { Request } from 'express';

// Interface que estende a interface Request do Express
interface CustomRequest extends Request {
  user?: { id: number; login: string }; // Defina a estrutura do objeto 'user' aqui
}

// Agora você pode usar a interface CustomRequest em vez de Request nos seus controladores
export const updatePerson = async (req: CustomRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id; // Agora o TypeScript reconhece a propriedade 'user'

    // Restante do código...
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar dados da pessoa' });
  }
};