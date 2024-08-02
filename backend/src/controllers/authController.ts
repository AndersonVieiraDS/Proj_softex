import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import db from '../db'; // Certifique-se de que o caminho para o arquivo de banco de dados está correto.

const secretKey = process.env.JWT_SECRET || 'yourSecretKey';

interface JwtPayload {
  id: number;
  nome: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

// Função de login
export const login = async (req: Request, res: Response) => {
  const { login, senha } = req.body;
  
  try {
    const user = await db('usuarios').where({ login, senha }).first();
    
    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gera o token JWT com os dados do usuário
    const token = jwt.sign({ id: user.id, nome: user.nome }, secretKey, { expiresIn: '1h' });
    console.log('Token gerado:', token); // Log para depuração
    
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Error in /login route:', error);
    return res.status(500).json({ message: 'Error logging in' });
  }
};

// Middleware de autenticação
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, secretKey) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
};
