export class Apibands {
   // properties
   public track: string;
   public artist: string;
   public link: string;
   public thumbnail: string;
   public artistId: string;
   public previewUrl: string;

   constructor(track: string, artist: string, link: string, thumbnail: string, artistId: string, previewUrl: string) {
     this.track = track;
     this.artist = artist;
     this.link = link;
     this.thumbnail = thumbnail;
     this.artistId = artistId;
     this.previewUrl = previewUrl;
   }
}
