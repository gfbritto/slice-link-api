import { ShortLink } from '../../../domain/entities/short-link.entity';
import { FindShortLinkByTokenUseCase } from '../../../application/short-link/find-short-link-by-token.use-case';
describe('Find by token use case', () => {
    const shortLinkRepository = {
        findByToken: jest.fn(),
        insert: jest.fn(),
        getAll: jest.fn()
    };

    test('should return a short link', async () => {
        // Arrange
        const shortLinkProperties = {
            originalUrl: 'http://www.google.com',
            title: 'Google shorted url',
            token: 'randomTokenMock'
        };
        const mockShortLink: ShortLink = new ShortLink(shortLinkProperties);
        shortLinkRepository.findByToken.mockReturnValue(Promise.resolve(mockShortLink));
        const findByTokenUseCase = new FindShortLinkByTokenUseCase(shortLinkRepository);
        // Act
        const shortedLink = await findByTokenUseCase.execute('randomTokenMock');
        // Assert
        expect(shortedLink).toBeDefined();
    });
    
    test('should throw an error if the short link does not exist', async () => {
        // Arrange
        // Act
        // Assert
    });
});