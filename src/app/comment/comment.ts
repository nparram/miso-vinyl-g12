export class Comment {

  description: string;
  rating: string;
  collector: Array<any>;

  constructor(
    description: string,
    rating: string,
    collector: Array<any>
  ){
    this.description = description;
    this.rating = rating;
    this.collector = collector;
  }
}
