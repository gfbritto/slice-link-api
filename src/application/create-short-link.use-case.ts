import { IdGenerator } from '../services/interfaces/id-generator';
import { ShortLinkRepositoryInterface } from '../domain/repositories/short-link.repository';
import { ShortLink } from '../domain/entities/short-link.entity';
import { injectable } from 'tsyringe';

@injectable()
export class CreateShortLinkUseCase {

    constructor(
        private shortLinkRepository : ShortLinkRepositoryInterface, 
        private generateSmallIdentifier : IdGenerator){
        
    }

    async execute(input : CreateShortLinkInput): Promise<CreateShortLinkOutput>{
        const token = await this.generateSmallIdentifier.generate();
        input.token = token;

        const link = new ShortLink(input);
        await this.shortLinkRepository.insert(link);
        return link.toJson();
    }
}

export type CreateShortLinkInput = {
    token: string;
    title: string;
    originalUrl: string;
}

type CreateShortLinkOutput = {
    originalUrl: string;
    token: string;
    clicksCount?: number;
    title: string;
}