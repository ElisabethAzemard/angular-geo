import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articles-list-item',
  templateUrl: './articles-list-item.component.html',
  styleUrls: ['./articles-list-item.component.scss']
})
export class ArticlesListItemComponent implements OnInit {

  @Input() image: string = "./assets/article-list-item.png";
  @Input() contentType: string = "Article";
  @Input() tags = ["Voyage", "Espagne"];
  @Input() title: string = "A Barcelone, un concert devant 2292 plantes pour célébrer la réouverture de l'opéra.";
  @Input() description: string = "Lundi 22 juin, l'opéra de Barcelone accueillera son premier concert post-confinement, diffusé en direct sur son site. En guise de public : pas de mélomanes humains, mais...";

  constructor() { }

  ngOnInit() {
  }

}
