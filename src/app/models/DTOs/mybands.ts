import { Albums } from "./albums";
import { Members } from "./members";

export class Mybands {
  private name: string;
  private arrMembers: Members[] = [];
  private arrAlbums: Albums[] = [];

  constructor(name: string) {
    this.name    = name;

  }

  public get myName(){
    return this.name;
  }

  public set myName(name: string) {
    this.name = name;
  }

// methods
public addArrMembers(member: Members) {
  this.arrMembers.push(member)
}

public addArrAlbums(album: Albums) {
  this.arrAlbums.push(album);
}

public showArrays(arr: any[]) {
let showMe: any = arr.map((e: any) => e.name);
return showMe;
}

}

