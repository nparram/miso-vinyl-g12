import { Album }  from './album';
import { Performer } from '../performer/performer';

export class AlbumDetail extends Album {

  tracks: Array<any>;
  performers: Array<Performer>;
  comments: Array<any>;

  constructor(
    tracks?: Array<any>,
    performers?: Array<any>,
    comments?: Array<any>
  ){
    super();
    this.tracks = tracks;
    this.performers = performers;
    this.comments = comments;
  }
}
