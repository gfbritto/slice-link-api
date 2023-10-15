import { NextFunction, Request, Response } from 'express';
import { CreateShortLinkInput, CreateShortLinkUseCase } from '../../../application/short-link/create-short-link.use-case';
import { autoInjectable } from 'tsyringe';
import { GetAllShortLinksUseCase } from '../../../application/short-link/get-all-short-links.use-case';

@autoInjectable()
export class ShortLinkController {
    constructor(
        private readonly createShortLinkUseCase: CreateShortLinkUseCase,
        private readonly getAllShortLinksUseCase: GetAllShortLinksUseCase
    ) { }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const createShortLink: CreateShortLinkInput = req.body;
            const response = await this.createShortLinkUseCase.execute(createShortLink);
            return res.status(201).send(response);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await this.getAllShortLinksUseCase.execute();
            return res.status(200).send(response);
        } catch (error) {
            next(error);
        }
    }
}
