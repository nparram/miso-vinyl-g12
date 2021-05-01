import { Performer } from './performer';
import { PerformerPrize } from '../performerprize/performerprize';
import { Album } from '../album/album';
export class PerformerDetail extends Performer {
  performerPrizes: Array<PerformerPrize>;
  albums: Array<Album>;
}
