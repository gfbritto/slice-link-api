export type ShortLinkProperties = {
    originalUrl: string;
    token: string;
    clicksCount?: number;
    title: string;
}

export class ShortLink {
    public properties: Required<ShortLinkProperties>;
    constructor(properties: ShortLinkProperties) {
        this.properties = {
            ...properties,
            clicksCount: properties.clicksCount || 0
        };
    }

    get title(): string {
        return this.properties.title;
    }

    updateTitle(title: string) {
        this.title = title;
    }

    updateOriginalUrl(originalUrl: string) {
        if (!this.isValidUrl(originalUrl)) {
            throw new Error('Invalid url.');
        }
        this.originalUrl = originalUrl;

    }
    updateShortUrl(shortUrl: string) {
        this.shortUrl = shortUrl;
    }

    private set title(value: string) {
        this.properties.title = value;
    }

    get originalUrl(): string {
        return this.properties.originalUrl;
    }

    private set originalUrl(value: string) {

        this.properties.originalUrl = value;
    }

    private isValidUrl(url: string) {
        const pattern = new RegExp(
            '^([a-zA-Z]+:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', // fragment locator
            'i'
        );
        return pattern.test(url);
    }

    get shortUrl(): string {
        return this.properties.token;
    }


    private set shortUrl(value: string) {
        this.properties.token = value;
    }
    toJson(){
        return this.properties;
    }
}