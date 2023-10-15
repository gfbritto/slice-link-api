import { nanoid } from 'nanoid';
import { IdGenerator } from '../interfaces/id-generator.service';
import { injectable } from 'tsyringe';

@injectable()
export class NanoIdGeneratorService implements IdGenerator {
    generate() : string {
        return nanoid();
    }
}