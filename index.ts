import express from 'express'
import router from './src/routes/userRouter'
import { Request, Response, NextFunction } from 'express'

const app = express()
app.use(express.json())
app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(err); // Log do erro no console (opcional)
  
    // Verifica se é uma exceção lançada pelo serviço
    if (err instanceof Error) {
      res.status(400).json({ error: err.message }); // Retorna uma resposta de erro formatada em JSON
    } else {
      // Se não for uma exceção conhecida, trata como um erro interno do servidor
      res.status(500).json({ error: 'Erro interno do servidor.' });
    }
  });

const PORT: number = 3333

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})