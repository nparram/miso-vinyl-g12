import { Prize } from './prize';
import { PerformerPrize } from '../performerPrize/performerPrize';

export class PrizeDetail extends Prize {

  performerPrizes: Array<PerformerPrize>;

}
