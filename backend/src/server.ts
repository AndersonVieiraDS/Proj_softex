import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';
import userRoutes from './routes/userRoutes';
import roomRoutes from './routes/roomRoutes';
import floorRoutes from './routes/floorRoutes';
import personRoutes from './routes/personRoutes';
import mediaRoutes from './routes/mediaRoutes';
import clientRoutes from './routes/clientRoutes';
import companyRoutes from './routes/companyRoutes';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "example.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],
      fontSrc: ["'self'", "fonts.gstatic.com"], // Permite carregamento de fontes de URLs especificadas
      imgSrc: ["'self'", "data:"], // Permite carregamento de imagens
      connectSrc: ["'self'", "example.com"],
    },
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Se você estiver carregando arquivos de mídia, por exemplo, para upload, use este middleware
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rotas para a API
app.use('/usuarios', userRoutes);
app.use('/salas', roomRoutes);
app.use('/andares', floorRoutes);
app.use('/pessoa_fisica', personRoutes);
app.use('/pessoa_juridica', companyRoutes);
app.use('/midias', mediaRoutes);
app.use('/clientes', clientRoutes);

// Se você quiser servir o frontend a partir do backend (opcional)
// Descomente as linhas abaixo se você precisar servir o frontend a partir do backend
// app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.get('*', (_req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
