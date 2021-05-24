import { Members } from "./members";

export class Mybands {
  private id: string;
  private name: string;
  private arrMembers: string[] = [];
  private album: string;
  private yearAlbum: string;
  private photoAlbum: string;


  constructor(id: string, name: string, member: string[], album: string, year: string, photo: string) {
    this.id         = id;
    this.name       = name;
    this.album      = album;
    this.arrMembers = member;
    this.yearAlbum  = year;
    this.photoAlbum = photo;

  }

  public get myName(){
    return this.name;
  }
   public get myId(){
     return this.id;
   }

   public get myAlbum(){
     return this.album;
   }
   public get myYearAlbum() {
     return this.yearAlbum;
   }
   public get myPhotoAlbum () {
     return this.photoAlbum;
   }

  public set myName(name: string) {
    this.name = name;
  }
public  set myId(id: string) {
  this.id = id;
}
public set myAlbum(album: string){
   this.album = album;
}
public set myYearAlbum( year) {
   this.yearAlbum = year;
}
public set myPhotoAlbum (photo) {
   this.photoAlbum = photo;
}

// methods
public addArrMembers(member: string) {
  this.arrMembers.push(member)
}

public showArrays(arr: any[]) {
let showMe: any = arr.map((e: any) => e);
return showMe;
}

}

