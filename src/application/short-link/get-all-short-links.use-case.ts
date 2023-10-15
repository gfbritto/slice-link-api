import { inject, injectable } from 'tsyringe';
import { ShortLink } from '../../domain/entities/short-link.entity';
import { ShortLinkRepositoryInterface } from '../../domain/repositories/short-link.repository';

@injectable()
export class GetAllShortLinksUseCase {
    constructor(
        @inject('ShortLinkRepository') private readonly shortLinkRepository: ShortLinkRepositoryInterface) { }

    async execute(): Promise<ShortLink[]> {
        return Promise.resolve(this.shortLinkRepository.getAll());
    }
}