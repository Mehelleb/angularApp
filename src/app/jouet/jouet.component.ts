import { Component, Input } from '@angular/core';
import { Jouet } from 'src/models/Jouet';

@Component({
  selector: 'app-jouet',
  templateUrl: './jouet.component.html',
  styleUrls: ['./jouet.component.scss']
})
export class JouetComponent {
  textButton:string = "Like";
  @Input() propsJouet!:Jouet;

  onLike (): void {
    if (this.textButton === "Like"){
      this.propsJouet.likes++;
      this.textButton = "Unlike"
    } else if(this.textButton === "Unlike"){
      this.propsJouet.likes--;
      this.textButton = "Like"
    }
  }
}

