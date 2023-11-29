import { Component, Input } from '@angular/core';
import { Jouet } from 'src/models/Jouet';
import { ServiceJouet } from '../services/serviceJouet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jouet',
  templateUrl: './jouet.component.html',
  styleUrls: ['./jouet.component.scss']
})
export class JouetComponent {
  constructor(private serviceJouet: ServiceJouet, private router: Router){}
  textButton:string = "Like";
  @Input() propsJouet!:Jouet;

  onLike (): void {
    if(this.textButton === 'Like'){
      this.serviceJouet.onLikeJouetById(this.propsJouet.id, 'like')
      this.textButton = "Unlike"
    }else if (this.textButton === 'Unlike'){
      this.serviceJouet.onLikeJouetById(this.propsJouet.id, 'Unlike')
      this.textButton = "Like"
    }
  }

  onView():void{
    this.router.navigateByUrl(`jouet/${this.propsJouet.id}`);
  }
}

