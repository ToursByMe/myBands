export class Albums {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  // getters and setters
  public get myName() {
    return this.name;
  }

  public set myName(name: string) {
    this.name = name;
  }
}

