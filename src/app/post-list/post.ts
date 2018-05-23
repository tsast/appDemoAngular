export class Post {
  tilte: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor (pTitle: string, pContent: string, pLoveIts: number) {
    this.tilte = pTitle;
    this.content = pContent;
    this.loveIts = pLoveIts;
    this.created_at = new Date();
  }
}
