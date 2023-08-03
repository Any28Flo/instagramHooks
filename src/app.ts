import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, this is your Express app with TypeScript!');
});

export default app;
