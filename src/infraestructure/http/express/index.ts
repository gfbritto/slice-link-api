import express, { Request, Response } from 'express';
import { CreateShortLinkInput, CreateShortLinkUseCase } from '../../../application/short-link/create-short-link.use-case';
import { container } from 'tsyringe';

const app = express();
const port = process.env.PORT || 3000;

app.post('/shortLink', async (req: Request, res: Response) => {
    if (!req.body) {
        res.status(400).send('Bad request');
    }
    const createUseCase = container.resolve(CreateShortLinkUseCase);
    const input: CreateShortLinkInput = req.body;
    const output = await createUseCase.execute(input);
    res.status(201).send(output);
});

app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});