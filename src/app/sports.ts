export class Sports {

    public author: string;
    public title: string;
    public description: string;
    public url: string;
    public urlToImage: string;

    constructor(author: string, title: string, description:string, url: string, urlToImage: string){
        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
    }
}
