import { ShortLinkInMemoryRepository } from '../../infraestructure/persistence/short-link-in-memory.repository';
import { CreateShortLinkInput, CreateShortLinkUseCase } from '../../application/create-short-link.use-case';

describe('Create shorted link usecase', () => {

    const shortLinkInMemoryRepository = new ShortLinkInMemoryRepository();
    const generateSmallIdentifier = { generate: jest.fn() };

    const createShortLinkUseCase = new CreateShortLinkUseCase(shortLinkInMemoryRepository, generateSmallIdentifier);
    test('Create shorted link', async () => {
        //Arrange
        generateSmallIdentifier.generate.mockReturnValue('randomTokenMock');

        const createShortLinkInput: CreateShortLinkInput = {
            originalUrl: 'http://www.google.com',
            token: 'http://localhost:3000/1',
            title: 'Google shorted url'
        };
        //Act
        await createShortLinkUseCase.execute(createShortLinkInput);

        //Assert
        const createdShortLink = shortLinkInMemoryRepository.shortLinks[0];
        expect(createdShortLink.originalUrl).toBe(createShortLinkInput.originalUrl);
        expect(createdShortLink.title).toBe(createShortLinkInput.title);
        expect(shortLinkInMemoryRepository.shortLinks).toHaveLength(1);
    });
});