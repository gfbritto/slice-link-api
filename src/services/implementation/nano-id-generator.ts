import { IdGenerator } from '../interfaces/id-generator';

export class NanoIdGenerator implements IdGenerator {
    async generate() {
        return Promise.resolve('randomTokenMock');
    }
}