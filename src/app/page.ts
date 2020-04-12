export class Page {
  public number: number;
  public narrative: string;
  public choices: Choice[];
}

export class Choice {
  public narrative: String;
  public nextPage: number;
}
