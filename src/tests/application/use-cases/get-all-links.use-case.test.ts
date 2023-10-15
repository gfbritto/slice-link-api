import { GetAllShortLinksUseCase } from './../../../application/short-link/get-all-short-links.use-case';
describe('Get all links usecase', () => {

    test('Get all links', async () => {
        //Arrange
        const shortLinkRepositoryMock = {
            getAll: jest.fn(),
            insert: jest.fn()
        };
        const getAllShortLinksUseCase = new GetAllShortLinksUseCase(shortLinkRepositoryMock);

        shortLinkRepositoryMock.getAll.mockReturnValue([
            {
                originalUrl: 'http://www.google.com',
                shortedUrl: 'http://localhost:3000/randomTokenMock',
                title: 'Google shorted url',
                token: 'randomTokenMock',
            }
        ]);
        //Act
        const itens = await getAllShortLinksUseCase.execute();
        
        //Assert
        expect(itens).toHaveLength(1);
    });
});