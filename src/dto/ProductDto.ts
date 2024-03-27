export default class ProductDto {
    public id!: number;
    public bookName!: string;
    public authorLast!: string;
    public imgUrl!: string;
    public description!: string;
    public isbn!: number;
    public genre!: string;
    public priceInCents!: number;
    public modifiedAt?: Date | null;

    constructor(id: number, bookName: string, imgUrl: string, description: string, isbn: number, genre: string, priceInCents: number, modifiedAt: Date | null) {
       this.id = id;
       this.bookName = bookName;
       this.imgUrl = imgUrl;
       this.description = description;
       this.isbn = isbn;
       this.genre = genre;
       this.priceInCents = priceInCents;
       this. modifiedAt = modifiedAt;
    }
}