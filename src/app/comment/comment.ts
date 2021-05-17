export class Comment {

  id: number;
  description: string;
  rating: string;
  collector: Array<any>;

  constructor(
    id: number,
    description: string,
    rating: string,
    collector: Array<any>
  ){
    this.id = id;
    this.description = description;
    this.rating = rating;
    this.collector = collector;
  }
}
