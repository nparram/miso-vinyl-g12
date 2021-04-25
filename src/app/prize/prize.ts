export class Prize {
  id: number;
  organization: string;
  name: string;
  description: string;
  performerPrizes: any;

  constructor(
    id: number,
    organization: string,
    name: string,
    description: string,
    performerPrizes: any
  ) {
    this.id = id;
    this.organization = organization;
    this.name = name;
    this.description = description;
    this.performerPrizes = performerPrizes;

  }

}


