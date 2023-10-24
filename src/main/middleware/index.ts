import 'reflect-metadata';
import { server } from '../server';
import { container } from 'tsyringe';
import { ShortLinkInMemoryRepository } from '../../infraestructure/persistence/short-link-in-memory.repository';
import { NanoIdGeneratorService } from '../../services/implementation/nano-id-generator.service';
import { ShortLinkRepositoryInterface } from '../../domain/repositories/short-link.repository';

const port = process.env.PORT || 3000;
console.log('process.env.PORT', process.env.PORT);

container.registerSingleton<ShortLinkRepositoryInterface>('ShortLinkRepository', ShortLinkInMemoryRepository);
container.registerSingleton(NanoIdGeneratorService);

server.listen(port, () => console.log(`App rodando: http://localhost:${port}`));