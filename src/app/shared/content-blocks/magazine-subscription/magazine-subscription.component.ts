import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-magazine-subscription',
  templateUrl: './magazine-subscription.component.html',
  styleUrls: ['./magazine-subscription.component.scss']
})
export class MagazineSubscriptionComponent implements OnInit {

  @Input() image: string = "./assets/featured-article.png";
  @Input() title: string = "En couverture : les seychelles";
  @Input() description: string = "Chaque semaine, GEO Magazine réalise des photoreportages à travers le monde dans le but de vous faire découvrir des clichés incroyables de notre magnifique planète Terre.";
  @Input() buttonName: string = "Abonnement geo magazine";

  constructor() { }

  ngOnInit() {
  }

}
