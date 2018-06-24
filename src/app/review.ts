export class Review {

    public title: string;
    public summary: string;
    public rating: number;

    constructor(title: string, summary: string, rating: number){
        this.rating = rating;
        this.summary = summary;
        this.title = title;    
    }
    
}
