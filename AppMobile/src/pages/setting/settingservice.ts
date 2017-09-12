import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class SettingService {
    // typing our private Observable, which will store our chosen theme in-memory
    private theme: BehaviorSubject<String>;
    // as promised, I've moved the availableThemes here as well
    availableThemes: { className: string, prettyName: string }[];

    constructor() {
        // initializing the chosen theme with a default.
        // NOTE: once you've wired up your persistence layer,
        // you would pull the initial theme setting from there.
        this.theme = new BehaviorSubject('blue-theme');

        // again, hard-coding the values for possible selections,
        // but you would similarly pull this from your database as well
        this.availableThemes = [
            { className: 'blue-theme', prettyName: 'Blue' },
            { className: 'purple-theme', prettyName: 'Purple' },
            { className: 'red-theme', prettyName: 'White Red' },
            { className: 'reb-theme', prettyName: 'Dark Red' },
            { className: 'purple-theme', prettyName: 'Purple' },
            { className: 'orange-theme', prettyName: 'Orange' },
            { className: 'marron-theme', prettyName: 'Marron' },
            { className: 'yellow-theme', prettyName: 'Yellow' },
            { className: 'green-theme', prettyName: 'Green' },
            { className: 'grey-theme', prettyName: 'Grey' },
            { className: 'black-theme', prettyName: 'Black' },
            { className: 'orb-theme', prettyName: 'Black-Orange' },
            { className: 'blub-theme', prettyName: 'Black-Blue' },
            { className: 'redb-theme', prettyName: 'Black-Red' },
            { className: 'white-theme', prettyName: 'White' },

        ];
    }

    // exposing a public method to set the private theme property,
    // using the Observable.next() method, which BehaviorSubject inherits
    setTheme(val) {
        // When you've wired in your persistence layer,
        // you would send it an updated theme value here.
        // for now we're just doing things in-memory
        this.theme.next(val);
    }

    // exposing a method to subscribe to changes in the theme,
    // using the Observable.asObservable() method, which BehaviorSubject also inherits
    getTheme() {
        return this.theme.asObservable();
    }
}