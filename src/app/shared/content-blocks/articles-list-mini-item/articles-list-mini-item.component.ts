import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articles-list-mini-item',
  templateUrl: './articles-list-mini-item.component.html',
  styleUrls: ['./articles-list-mini-item.component.scss']
})
export class ArticlesListMiniItemComponent implements OnInit {

  @Input() image: string = "./assets/article-list-mini-item.png";
  @Input() tags = ["Voyage", "Espagne"];
  @Input() title: string = "A Barcelone, un concert devant 2292 plantes pour célébrer la réouverture de l'opéra";

  constructor() { }

  ngOnInit() {
  }

}
