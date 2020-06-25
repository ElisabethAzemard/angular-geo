import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-article',
  templateUrl: './featured-article.component.html',
  styleUrls: ['./featured-article.component.scss']
})
export class FeaturedArticleComponent implements OnInit {


  @Input() image: string = "./assets/featured-article.png";
  @Input() contentType: string = "Diaporama";
  @Input() tags = ["Voyage", "Espagne"];
  @Input() title: string = "A Barcelone, un concert devant 2292 plantes pour célébrer la réouverture de l'opéra.";
  @Input() description: string = "Lundi 22 juin, l'opéra de Barcelone accueillera son premier concert post-confinement, diffusé en direct sur son site. En guise de public: pas de mélomanes humains, mais...";

  constructor() { }

  ngOnInit() {
  }

}
