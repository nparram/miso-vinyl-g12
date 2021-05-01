import { Performer } from './performer';
import { PerformerPrize } from '../performerPrize/performerPrize';
import { Album } from '../album/album';
export class PerformerDetail extends Performer {
  performerPrizes: Array<PerformerPrize>;
  albums: Array<Album>;
}
