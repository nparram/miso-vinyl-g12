export class Album {

  id: number;
  name: string;
  cover: string;
  releaseDate: Date;
  description: string;
  genre: string;
  recordLabel: string;

  constructor(
    id?: number,
    name?: string,
    cover?: string,
    releaseDate?: Date,
    description?: string,
    genre?: string,
    recordLabel?: string
  ){
    this.id = id;
    this.name = name;
    this.cover = cover;
    this.releaseDate = releaseDate;
    this.description = description;
    this.genre = genre;
    this.recordLabel = recordLabel;
  }

}
