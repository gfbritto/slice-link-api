import { ShortLink, ShortLinkProperties } from '../../domain/entities/short-link.entity';

describe('Link tests', () => {
    test('constructor', () => {
        const linkProperties: ShortLinkProperties = {
            originalUrl: 'http://www.google.com',
            token: 'http://localhost:3000/1',
            title: 'Google shorted url'
        };

        const link = new ShortLink(linkProperties);
        expect(link.id).toBeDefined();
        expect(link.properties).toStrictEqual({
            ...linkProperties,
            clicksCount: 0
        });
    });

    test('update title', () => {
        const linkProperties: ShortLinkProperties = {
            originalUrl: 'http://www.google.com',
            token: 'http://localhost:3000/1',
            title: 'Google shorted url'
        };

        const link = new ShortLink(linkProperties);

        const newTitle = 'My new title';
        link.updateTitle(newTitle);

        expect(link.title).toBe(newTitle);
    });

    test('update url with a invalid value', () => {
        const linkProperties: ShortLinkProperties = {
            originalUrl: 'www.google.com',
            token: 'http://localhost:3000/1',
            title: 'Google shorted url'
        };

        const link = new ShortLink(linkProperties);
        expect(() => link.updateOriginalUrl('my invalid url')).toThrow();
    });

    test('update url with a valid value', () => {
        const linkProperties: ShortLinkProperties = {
            originalUrl: 'www.google.com',
            token: 'http://localhost:3000/1',
            title: ''
        };

        const link = new ShortLink(linkProperties);
        const newOriginalUrl = 'https://stackoverflow.com';
        link.updateOriginalUrl(newOriginalUrl);
        expect(link.originalUrl).toBe(newOriginalUrl);
    });
});