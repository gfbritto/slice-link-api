import { FindShortLinkByTokenUseCase } from '../../../application/short-link/find-short-link-by-token.use-case';
import { NextFunction, Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class RedirectLinkController {
    constructor(private readonly FindShortLinkByTokenUseCase: FindShortLinkByTokenUseCase) { }
    async redirect(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.params.token;
            const shortLink = await this.FindShortLinkByTokenUseCase.execute(token);
            if (!shortLink) return res.status(404).send('Not found');

            res.redirect(shortLink.originalUrl);
        } catch (error) {
            next(error);
        }
    }
}