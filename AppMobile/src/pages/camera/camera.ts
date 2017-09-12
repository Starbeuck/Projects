import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'page-camera',
    templateUrl: 'camera.html',
    styleUrls: ['/camera.css'],
})
export class CameraPage {
    cameraData: string;
    photoTaken: boolean;
    cameraUrl: string;
    photoSelected: boolean;

    constructor(private navCtrl: NavController, private _DomSanitizationService: DomSanitizer, private Camera: Camera) {
        this.photoTaken = false;
    }

    takePicture() {
        var options = {
            sourceType: this.Camera.PictureSourceType.CAMERA,
            destinationType: this.Camera.DestinationType.DATA_URL
        };
        this.Camera.getPicture(options).then((imageData) => {
            this.cameraData = 'data:image/jpeg;base64,' + imageData;
            this.photoTaken = true;
            this.photoSelected = false;
        }, (err) => {
            // Handle error
        });
    }

    get imgBase64() {
        return this._DomSanitizationService.bypassSecurityTrustUrl('data:image/png;base64,$SomeBase64StringFetchedSomehow');
    }
}