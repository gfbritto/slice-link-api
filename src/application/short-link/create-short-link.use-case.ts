import { autoInjectable, inject } from 'tsyringe';
import { ShortLink } from '../../domain/entities/short-link.entity';
import { NanoIdGeneratorService } from '../../services/implementation/nano-id-generator.service';
import { ShortLinkRepositoryInterface } from '../../domain/repositories/short-link.repository';

@autoInjectable()
export class CreateShortLinkUseCase {

    constructor(
        @inject('ShortLinkRepository') private shortLinkRepository: ShortLinkRepositoryInterface,
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
    id: string;
    originalUrl: string;
    token: string;
    clicksCount?: number;
    title: string;
}