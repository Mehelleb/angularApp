import { Injectable } from '@angular/core'
import { Jouet } from 'src/models/Jouet';
@Injectable({
    providedIn: "root"
})
export class ServiceJouet {
    jouets: Jouet[] = [
        {
            id: 1,
            name: "Licorne",
            description: "Très prisée par la petite enfance et spécialement par Alinou.",
            category: 2,
            price: 24,
            color: "blanc/rose/bleu",
            likes: 250,
            imageUrl: "https://images.king-jouet.com/6/gu857365_6.jpg"
        },
        {
            id: 2,
            name: "Tortue",
            description: "Car elle est rigolote, seuls ces petits peuvent la courser !.",
            category: 1,
            price: 60,
            color: "vert/orange/bleu",
            likes: 120,
            imageUrl: "https://www.king-jouet.com/fstrz/r/s/images.king-jouet.com/6/gu860464_6.jpg"
        }
    ];
    getAllJouet(): Jouet[] {
        return this.jouets;
    }

    getJouetById(jouetId: number): Jouet {
        const jouet = this.jouets.find(jouet => jouet.id === jouetId)
        if (jouet) {
            return jouet;
        } else {
            throw new Error('erreur');
        }
    }

    onLikeJouetById(jouetId: number, typeLike: 'like' | 'Unlike'):void{
        const jouet = this.getJouetById(jouetId)
        typeLike ==='like'? jouet.likes++ : jouet.likes--;
    }
}