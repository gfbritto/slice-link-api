import { ShortLink } from '../../../domain/entities/short-link.entity';
import { GetAllShortLinksUseCase } from './../../../application/short-link/get-all-short-links.use-case';

describe('Get all links usecase', () => {

    test('Get all links', async () => {
        //Arrange
        const shortLinkRepositoryMock = {
            getAll: jest.fn(),
            insert: jest.fn()
        };
        const getAllShortLinksUseCase = new GetAllShortLinksUseCase(shortLinkRepositoryMock);

        const shortLinkProperties = {
            originalUrl: 'http://www.google.com',
            title: 'Google shorted url',
            token: 'randomTokenMock'
        };
        const mockShortLink: ShortLink = new ShortLink(shortLinkProperties);

        shortLinkRepositoryMock.getAll.mockReturnValue([mockShortLink]);
        //Act
        const itens = await getAllShortLinksUseCase.execute();

        //Assert
        expect(itens).toHaveLength(1);
    });

    test('Get all links empty', async () => {
        //Arrange
        const shortLinkRepositoryMock = {
            getAll: jest.fn(),
            insert: jest.fn()
        };
        const getAllShortLinksUseCase = new GetAllShortLinksUseCase(shortLinkRepositoryMock);

        shortLinkRepositoryMock.getAll.mockReturnValue([]);
        //Act
        const itens = await getAllShortLinksUseCase.execute();

        //Assert
        expect(itens).toHaveLength(0);
    });
});