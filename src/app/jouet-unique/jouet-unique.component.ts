import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jouet } from 'src/models/Jouet';
import { ServiceJouet } from '../services/serviceJouet';

@Component({
  selector: 'app-jouet-unique',
  templateUrl: './jouet-unique.component.html',
  styleUrls: ['./jouet-unique.component.scss']
})
export class JouetUniqueComponent implements OnInit {
  constructor(private serviceJouet: ServiceJouet, private route: ActivatedRoute){}
  textButton:string = "Like";
  propsJouet!:Jouet;
  ngOnInit(): void {
    const jouetId = +this.route.snapshot.params['id'];
    this.propsJouet = this.serviceJouet.getJouetById(jouetId);
  }
  
  onLike (): void {
    if(this.textButton === 'Like'){
      this.serviceJouet.onLikeJouetById(this.propsJouet.id, 'like')
      this.textButton = "Unlike"
    }else if (this.textButton === 'Unlike'){
      this.serviceJouet.onLikeJouetById(this.propsJouet.id, 'Unlike')
      this.textButton = "Like"
    }
  }
}
