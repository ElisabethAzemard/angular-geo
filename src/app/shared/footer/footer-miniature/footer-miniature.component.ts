import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-miniature',
  templateUrl: './footer-miniature.component.html',
  styleUrls: ['./footer-miniature.component.scss']
})
export class FooterMiniatureComponent implements OnInit {

  @Input() image: string = "./assets/footer/foot1.png";
  @Input() title: string = "Geo en version papier.";
  @Input() description: string = "Chaque semaine, recevez l'édition papier de Geo, livrée directement chez vous.";
  @Input() buttonName: string = "Je découvre";

  constructor() { }

  ngOnInit() {
  }

}
