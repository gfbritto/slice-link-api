import { inject, injectable } from 'tsyringe';
import { ShortLinkRepositoryInterface } from '../../domain/repositories/short-link.repository';

@injectable()
export class FindShortLinkByTokenUseCase {

    constructor(
        @inject('ShortLinkRepository') private readonly shortLinkRepository: ShortLinkRepositoryInterface) { }

    async execute(token: string) {
        const shortLink = await this.shortLinkRepository.findByToken(token);
        if(!shortLink) return null;
        return shortLink.toJson();
    }
}