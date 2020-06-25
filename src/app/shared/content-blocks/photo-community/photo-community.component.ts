import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-photo-community',
  templateUrl: './photo-community.component.html',
  styleUrls: ['./photo-community.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhotoCommunityComponent implements OnInit {

  @Input() image: string = "./assets/community/moulinrouge.png";
  @Input() author: string = "MICHEL BASQUAISE";
  @Input() title: string = "LE MOULIN ROUGE - PARIS";
  @Input() likes: number = 1035;

  constructor() { }

  ngOnInit() {
  }

}
