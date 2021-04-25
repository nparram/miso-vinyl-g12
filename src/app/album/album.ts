export class Album {

  id: number;
  name: string;
  cover: string;
  releaseDate: Date;
  description: string;
  genre: string;
  recordLabel: string;
  tracks: any[];
  performers: any[];
  comments: any[];

  constructor(
    id: number,
    name: string,
    cover: string,
    releaseDate: Date,
    description: string,
    genre: string,
    recordLabel: string,
    tracks: any[],
    performers: any[],
    comments: any[]
  ){
    this.id = id;
    this.name = name;
    this.cover = cover;
    this.releaseDate = releaseDate;
    this.description = description;
    this.genre = genre;
    this.recordLabel = recordLabel;
    this.tracks = tracks;
    this.performers = performers;
    this.comments = comments;
  }

}
