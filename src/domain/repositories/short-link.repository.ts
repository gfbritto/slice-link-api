import { ShortLink } from '../entities/short-link.entity';

export interface ShortLinkRepositoryInterface {
    insert(shortLink: ShortLink): Promise<ShortLink>;
    getAll(): Promise<ShortLink[]>;
}