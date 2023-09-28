import { injectable } from 'tsyringe';
import { ShortLink } from '../../domain/entities/short-link.entity';
import { ShortLinkRepositoryInterface } from '../../domain/repositories/short-link.repository';

@injectable()
export class ShortLinkInMemoryRepository implements ShortLinkRepositoryInterface {

    public shortLinks: ShortLink[] = [];

    async insert(shortLink: ShortLink): Promise<void> {
        this.shortLinks.push(shortLink);
    }
}