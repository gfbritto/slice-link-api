import { autoInjectable } from 'tsyringe';
import { ShortLink } from '../domain/entities/short-link.entity';
import { ShortLinkInMemoryRepository } from '../infraestructure/persistence/short-link-in-memory.repository';
import { NanoIdGeneratorService } from '../services/implementation/nano-id-generator.service';

@autoInjectable()
export class CreateShortLinkUseCase {

    constructor(
        private shortLinkRepository: ShortLinkInMemoryRepository,
        private generateSmallIdentifierService: NanoIdGeneratorService) {

    }

    async execute(input: CreateShortLinkInput): Promise<CreateShortLinkOutput> {
        const token = await this.generateSmallIdentifierService.generate();

        const link = new ShortLink({ ...input, token });

        const shortedLink = await this.shortLinkRepository.insert(link);
        return shortedLink.toJson();
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