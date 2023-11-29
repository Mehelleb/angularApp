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
            price: 9,
            color: "blanc/rose/bleu",
            likes: 250,
            imageUrl: "https://images.king-jouet.com/6/gu857365_6.jpg"
        },
        {
            id: 2,
            name: "Tortue",
            description: "Car elle est rigolote, seuls ces petits peuvent la courser !",
            category: 1,
            price: 10,
            color: "vert/orange/bleu",
            likes: 120,
            imageUrl: "https://www.king-jouet.com/fstrz/r/s/images.king-jouet.com/6/gu860464_6.jpg"
        },
        {
            id: 3,
            name: "Voiturette",
            description: "La friction est au point...",
            category: 1,
            price: 5,
            color: "vert/orange/bleu",
            likes: 150,
            imageUrl: "https://fr.shop-orchestra.com/on/demandware.static/-/Sites-orchestra-master/default/dw745ec78e/images/view/P/J/P/N/L/PJPNLT_NoColor_3_X.jpg"
        },
        {
            id: 4,
            name: "Cube d'activités",
            description: "On réfléchit en couleur.",
            category: 2,
            price: 7,
            color: "Plusieurs couleurs",
            likes: 200,
            imageUrl: "https://www.cdiscount.com/pdt2/4/9/7/1/700x700/gen4056233698497/rw/playtive-cube-d-activites-5-en-1-en-bois-veritab.jpg"
        },
        {
            id: 5,
            name: "Vélo smoby",
            description: "Très pratique en ayant le contrôle",
            category: 2,
            price: 15,
            color: "vert et bleu",
            likes: 210,
            imageUrl: "https://img.consobaby.com/v7/__consobaby__/media/image/cache/app_product_page/c2/a9/2281f83fc431fc459c74d8cc49cc.jpg"
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