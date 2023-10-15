import { injectable } from 'tsyringe';
import { ShortLink } from '../../domain/entities/short-link.entity';
import { ShortLinkRepositoryInterface } from '../../domain/repositories/short-link.repository';

@injectable()
export class ShortLinkInMemoryRepository implements ShortLinkRepositoryInterface {
    public shortLinks: ShortLink[] = [];

    async insert(shortLink: ShortLink): Promise<ShortLink> {
        this.shortLinks.push(shortLink);
        return shortLink;
    }

    async getAll(): Promise<ShortLink[]> {
        return this.shortLinks;
    }

    async findByToken(token: string): Promise<ShortLink | undefined> {
        return this.shortLinks.find(shortLink => shortLink.token === token) || undefined;
    }
}