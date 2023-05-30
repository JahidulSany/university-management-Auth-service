import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
const app: Application = express();

// Cors
app.use(cors());

// Body Parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Testing
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Working Successfully!!');
});

export default app;
