import { IdGenerator } from '../services/interfaces/id-generator.service';
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

        const link = new ShortLink({...input, token});

        await this.shortLinkRepository.insert(link);
        return link.toJson();
    }
}

export type CreateShortLinkInput = {
    title: string;
    originalUrl: string;
}

export type CreateShortLinkOutput = {
    originalUrl: string;
    token: string;
    clicksCount?: number;
    title: string;
}