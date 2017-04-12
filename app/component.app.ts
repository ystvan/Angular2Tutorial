import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './partials/app.html'
})

export class AppComponent {
    name: string;
    artists: any;

    onClick(myItem, myElement){
        this.name=myItem.name;
        myElement.style.backgroundColor="#FECE4E";

    }

    addArtist(value){
        if (value!==''){
            this.artists.push ({
                name: value,
                school: 'Hard Knocks'
            });
        }
    }

    constructor() {
        this.name = 'Xhou Ta';
        this.artists = [
            {
                name: 'Barot Bellingham',
                school: 'Penn State'
            }, {
                name: 'Jonathan Ferra',
                school: 'University of Illinois'
            }, {
                name: 'Hillary Post',
                school: 'University of Florida'
            }

        ]
    }

}