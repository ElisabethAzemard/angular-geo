import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articles-list-mini-item-right',
  templateUrl: './articles-list-mini-item-right.component.html',
  styleUrls: ['./articles-list-mini-item-right.component.scss']
})
export class ArticlesListMiniItemRightComponent implements OnInit {

  @Input() image: string = "./assets/article-list-mini-item.png";
  @Input() tags = ["Voyage", "Espagne"];
  @Input() title: string = "A Barcelone, un concert devant 2292 plantes pour célébrer la réouverture de l'opéra";

  constructor() { }

  ngOnInit() {
  }

}
