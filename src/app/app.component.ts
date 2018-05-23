import { Component, Input } from '@angular/core';
import { Post } from './post-list/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //Tableau de post
  postArray: Post[]= [
   new Post('Mon premier post','Bonjour, ceci est mon premier post.',0),
   new Post('Mon deuxième post', 'Re bonjour c\'est encore moi. Ceci est mon deuxieme post.', 0) ,
   new Post('Mon troisième post', 'Enfin mon dernier post.', 0)
]
  constructor () {
  }
}
