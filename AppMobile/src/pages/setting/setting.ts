import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingService } from './settingservice';

@Component({
    selector: 'page-home',
    templateUrl: 'setting.html'
})
export class SettingPage {
    selected: String;
    availableThemes: { className: string, prettyName: string }[];

    constructor(private _settings: SettingService) {
        // now we're setting the selected property asynchronously, based
        // on the behavior of our observable theme in SettingsService
        this._settings.getTheme().subscribe(val => this.selected = val);
        // similarly, as promised, we've moved availableThemes to SettingsService,
        // and therefore need to call that property here
        this.availableThemes = this._settings.availableThemes;
    }

    // We're finally wiring in some change communication, which will allow us to
    // interact with our form, and see some changes in the theme.
    public setTheme(e) {
        this._settings.setTheme(e);
    }
}
