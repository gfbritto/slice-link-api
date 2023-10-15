import { inject, injectable } from 'tsyringe';
import { ShortLinkRepositoryInterface } from '../../domain/repositories/short-link.repository';

@injectable()
export class GetAllShortLinksUseCase {
    constructor(
        @inject('ShortLinkRepository') private readonly shortLinkRepository: ShortLinkRepositoryInterface) { }

    async execute(): Promise<GetAllShortLinksOutput[]> {
        const shortLinks = await this.shortLinkRepository.getAll();
        if(!shortLinks) return [];
        return shortLinks.map(shortLink => shortLink.toJson());
    }
}

type GetAllShortLinksOutput = {
    id: string;
    originalUrl: string;
    token: string;
    clicksCount?: number;
    title: string;
}