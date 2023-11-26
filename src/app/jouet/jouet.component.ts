import { Component, Input} from '@angular/core';
import { Jouet } from 'src/models/Jouet';

@Component({
  selector: 'app-jouet',
  templateUrl: './jouet.component.html',
  styleUrls: ['./jouet.component.scss']
})
export class JouetComponent {
  @Input() propsJouet!:Jouet;
}

