type VotationOption = {
  numberOfVotes: number;
  options: string;
}

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(option: VotationOption): void {
    this._votationOptions.push(option);
  }

  vote(indexVotation: number): Error | void {
    if (!this._votationOptions[indexVotation]) {
      const error = new Error('Esta opção não está disponível');
      return error;
    }

    this._votationOptions[indexVotation].numberOfVotes += 1;
  }

  get votationOption(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);

      for (const votationOption of votation.votationOption) {
        console.log(votationOption.options, votationOption.numberOfVotes)
      }
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');

votation1.addVotationOption({
  options: 'Python',
  numberOfVotes: 0
})
votation1.addVotationOption({
  options: 'JavaScript',
  numberOfVotes: 0
})
votation1.addVotationOption({
  options: 'TypeScript',
  numberOfVotes: 0
})
votation1.addVotationOption({
  options: 'Java',
  numberOfVotes: 0
})

votation1.vote(3)

const votationApp = new VotationApp();

votationApp.addVotation(votation1);
votationApp.showVotations();