import { NextFunction, Request, Response } from 'express';
import { CreateShortLinkInput, CreateShortLinkUseCase } from '../../../application/create-short-link.use-case';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class ShortLinkController {
    constructor(private readonly shortLinkService: CreateShortLinkUseCase) { }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const createShortLink: CreateShortLinkInput = req.body;
            const response = await this.shortLinkService.execute(createShortLink);
            return res.status(201).send(response);
        } catch (error) {
            next(error);
        }
    }
}
