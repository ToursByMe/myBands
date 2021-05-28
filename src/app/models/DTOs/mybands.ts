
export class Mybands {
  public id: string;
  public name: string;
  public arrMembers: string[] = [];
  public album: string;
  public yearAlbum: string;
  public photoAlbum: string;
  public info: string;


  constructor(id: string, name: string, member: string[], album: string, yearAlbum: string, photoAlbum: string, info: string) {
    this.id = id;
    this.name = name;
    this.album = album;
    this.arrMembers = member;
    this.yearAlbum = yearAlbum;
    this.photoAlbum = photoAlbum;
    this.info = info;

  }

}

/*********************************Fake list**********************************/
export const fakeBands: Mybands[] = [
  {
    "id": "1",
    "name": "Queen",
    "arrMembers": ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    "album": "Queen",
    "yearAlbum": "1973",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": "Banda inglesa"
  },
  {
    "id": "2",
    "name": "Queen",
    "arrMembers": ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    "album": "Queen II",
    "yearAlbum": "1974",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "3",
    "name": "Queen",
    "arrMembers": ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    "album": "A Night At the Opera",
    "yearAlbum": "1975",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "4",
    "name": "Queen",
    "arrMembers": ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    "album": "A Day at the Races",
    "yearAlbum": "1976",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "5",
    "name": "Queen",
    "arrMembers": ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    "album": "News of the World",
    "yearAlbum": "1977",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "6",
    "name": "The Rolling Stones",
    "arrMembers": ["Brian Jones", "Mick Jagger", "Keith Richards", "Bill Wyman", "Charlie Watts", " Ian Steward"],
    "album": "The Rolling Stones",
    "yearAlbum": "1964",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "7",
    "name": "The Rolling Stones",
    "arrMembers": ["Mick Taylor", "Mick Jagger", "Keith Richards", "Bill Wyman", "Charlie Watts", " Ian Steward"],
    "album": "Let it Bleed",
    "yearAlbum": "1969",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "8",
    "name": "The Rolling Stones",
    "arrMembers": ["Mick Jagger", "Keith Richards", "Charlie Watts", "Bill Wyman", "Ian Steward", "Ronnie Woods"],
    "album": "Black And Blue",
    "yearAlbum": "1976",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "9",
    "name": "The Rolling Stones",
    "arrMembers": ["Mick Jagger", "Keith Richards", "Bill Wyman", "Charlie Watts", "Ronnie Wood"],
    "album": "Dirty Work",
    "yearAlbum": "1986",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "10",
    "name": "The Rolling Stones",
    "arrMembers": ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"],
    "album": "Bridges to Babylon",
    "yearAlbum": "1997",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "11",
    "name": "Led Zeppellin",
    "arrMembers": ["Jimmy Page", "John Paul Jones", "Robert Plan", "John Bonham"],
    "album": "Led Zeppellin",
    "yearAlbum": "1969",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "12",
    "name": "Led Zeppellin",
    "arrMembers": ["Jimmy Page", "John Paul Jones", "Robert Plan", "John Bonham"],
    "album": "Led Zeppellin II",
    "yearAlbum": "1969",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "13",
    "name": "Led Zeppellin",
    "arrMembers": ["Jimmy Page", "John Paul Jones", "Robert Plan", "John Bonham"],
    "album": "Led Zeppellin III",
    "yearAlbum": "1970",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "14",
    "name": "Led Zeppellin",
    "arrMembers": ["Jimmy Page", "John Paul Jones", "Robert Plan", "John Bonham"],
    "album": "Led Zeppellin IV",
    "yearAlbum": "1971",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "15",
    "name": "Led Zeppellin",
    "arrMembers": ["Jimmy Page", "John Paul Jones", "Robert Plan", "John Bonham"],
    "album": "Houses of the Holy",
    "yearAlbum": "1973",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "16",
    "name": "Pink Floyd",
    "arrMembers": ["Syd Barret", "Nick Mason", "Roger Waters", "Richard Wright", "Bob Klose"],
    "album": "The Piper at the Gates of Dawn",
    "yearAlbum": "1967",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "17",
    "name": "Pink Floyd",
    "arrMembers": ["Roger Waters", "Nick Mason", "David Gilmour", "Richard Wright", "Bob Klose"],
    "album": "A Sauceful of Secrets",
    "yearAlbum": "1968",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "18",
    "name": "Pink Floyd",
    "arrMembers": ["Roger Waters", "Nick Mason", "David Gilmour", "Richard Wright", "Bob Klose"],
    "album": "The Dark Side of the Moon",
    "yearAlbum": "1973",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "19",
    "name": "Pink Floyd",
    "arrMembers": ["Roger Waters", "Nick Mason", "David Gilmour", "Richard Wright", "Bob Klose"],
    "album": "Animals",
    "yearAlbum": "1977",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "20",
    "name": "Pink Floyd",
    "arrMembers": ["Roger Waters", "Nick Mason", "David Gilmour", "Richard Wright", "Bob Klose"],
    "album": "The Wall",
    "yearAlbum": "1979",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "21",
    "name": "Deep Purple",
    "arrMembers": ["Chris Curtis", "Ritchie Blackmore", "Rod Evans", "Jon Lord", "Nick Simper", "Ian Paice"],
    "album": "Shades of Deep Purple",
    "yearAlbum": "1968",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "22",
    "name": "Deep Purple",
    "arrMembers": ["Ian Gillan", "Ritchie Blackmore", "Rod Evans", "Jon Lord", "Nick Simper", "Ian Paice"],
    "album": "Deep Purple",
    "yearAlbum": "1969",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "23",
    "name": "Deep Purple",
    "arrMembers": ["Ian Gillan", "Ritchie Blackmore", "Roger Glover", "Jon Lord", "Ian Paice"],
    "album": "Deep Purple in Rock",
    "yearAlbum": "1970",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "24",
    "name": "Deep Purple",
    "arrMembers": ["David Coverdale", "Ritchie Blackmore", "Glen Hughes", "Jon Lord", "Ian Paice"],
    "album": "Burn",
    "yearAlbum": "1973",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "25",
    "name": "Deep Purple",
    "arrMembers": ["Ian Gillan", "Ritchie Blackmore", "Roger Glover", "Jon Lord", "Ian Paice"],
    "album": "The House of Blue Light",
    "yearAlbum": "1987",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "26",
    "name": "AC/DC",
    "arrMembers": ["Malcon Young", "Angus Young", "Bon Scott", "George Young", "Rob Bailey", "Peter Clack", "Tony Currenti", "John Proud", "Harry Vanda", "Richard Ford"],
    "album": "High Voltage",
    "yearAlbum": "1975",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "27",
    "name": "AC/DC",
    "arrMembers": ["Malcon Young", "Angus Young", "Bon Scott", "Phil Rudd", "Cliff Williams"],
    "album": "Highway to Hell",
    "yearAlbum": "1979",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "28",
    "name": "AC/DC",
    "arrMembers": ["Malcon Young", "Angus Young", "Bon Scott", "Phil Rudd", "Cliff Williams"],
    "album": "Back in Black",
    "yearAlbum": "1980",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "30",
    "name": "AC/DC",
    "arrMembers": ["Malcon Young", "Angus Young", "Brian Johnson", "Phil Rudd", "Cliff Williams"],
    "album": "Black Ice",
    "yearAlbum": "2008",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "31",
    "name": "Ramones",
    "arrMembers": ["Joey Ramone", "Johny Ramone", "Dee Dee Ramone", "Tommy Ramone"],
    "album": "Ramones",
    "yearAlbum": "1976",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "32",
    "name": "Ramones",
    "arrMembers": ["Joey Ramone", "Johny Ramone", "Dee Dee Ramone", "Tommy Ramone"],
    "album": "Leave Home",
    "yearAlbum": "1977",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "33",
    "name": "Ramones",
    "arrMembers": ["Joey Ramone", "Johny Ramone", "Dee Dee Ramone", "Tommy Ramone"],
    "album": "Rocket to Russia",
    "yearAlbum": "1977",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "34",
    "name": "Ramones",
    "arrMembers": ["Joey Ramone", "Johny Ramone", "Dee Dee Ramone", "Marky Ramone"],
    "album": "Road to Ruin",
    "yearAlbum": "1978",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "35",
    "name": "Ramones",
    "arrMembers": ["Joey Ramone", "Johny Ramone", "Dee Dee Ramone", "Tommy Ramone"],
    "album": "End of the Century",
    "yearAlbum": "1980",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "36",
    "name": "Kiss",
    "arrMembers": ["Paul Stanley", "Gene Simmons", "Ace Frehley", "Peter Criss"],
    "album": "Kiss",
    "yearAlbum": "1974",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "37",
    "name": "Kiss",
    "arrMembers": ["Paul Stanley", "Gene Simmons", "Ace Frehley", "Peter Criss"],
    "album": "Dressed to Kill",
    "yearAlbum": "1975",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "38",
    "name": "Kiss",
    "arrMembers": ["Paul Stanley", "Gene Simmons", "Ace Frehley", "Peter Criss"],
    "album": "Rock and Roll Over",
    "yearAlbum": "1976",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "39",
    "name": "Kiss",
    "arrMembers": ["Paul Stanley", "Gene Simmons", "Ace Frehley", "Peter Criss"],
    "album": "Love Gun",
    "yearAlbum": "1977",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  },
  {
    "id": "40",
    "name": "Kiss",
    "arrMembers": ["Paul Stanley", "Gene Simmons", "Ace Frehley", "Peter Criss"],
    "album": "Dinasty",
    "yearAlbum": "1979",
    "photoAlbum": "https://picsum.photos/500/400/?blur=1",
    "info": ""
  }
]
