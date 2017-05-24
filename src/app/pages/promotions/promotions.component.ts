/**
 * Created by Vyndee on 24/05/2017.
 */
/**
 * Created by Vyndee on 08/03/2017.
 */
/**
 * Created by Vyndee on 08/03/2017.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {UploadFile} from "../../helpers/upload-file";
import {Config} from "../../config";
import {Uploader}      from 'angular2-http-file-upload';
import {Promotion} from "../../models/promotion";
import {NotificationService} from "../../services/notification.service";


@Component({
  selector: 'promotions-component',
  styleUrls: ['./promotions.component.css'],
  templateUrl: './promotions.component.html'
})
export class PromotionsComponent implements OnInit, OnDestroy {


  promotion: Promotion = new Promotion();
  fakeUrl: string = null;

  constructor(public uploaderService: Uploader, private toasterService: NotificationService) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }


  addPromotion() {
    console.log(this.promotion);
    let uploadFile = (<HTMLInputElement>window.document.getElementById('photoEvent')).files[0];
    if (uploadFile) {
      let url = Config.apiUrl + "/promotions/add";
      let myUploadItem = new UploadFile(uploadFile, url);
      //myUploadItem.formData = {eventImageURL: uploadFile};  // (optional) form data can be sent with file

      myUploadItem.formData = {
        title: this.promotion.title,
        description: this.promotion.description,
        rating: this.promotion.percentage
      };
      this.uploaderService.onSuccessUpload = (item, response, status, headers) => {
        // success callback
        console.log("Success");
        this.toasterService.success("Ajout d'une promotion avec succées");
        console.log(item, response, status, headers);
      };
      this.uploaderService.onErrorUpload = (item, response, status, headers) => {
        // error callback
        console.log("Error");
        this.toasterService.error("Erreur d'ajout");
        console.log(item, response, status, headers);
      };
      this.uploaderService.onCompleteUpload = (item, response, status, headers) => {
        // complete callback, called regardless of success or failure
        console.log("Complete");

        console.log(item, response, status, headers);
      };
      this.uploaderService.upload(myUploadItem);
    }
  }

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.fakeUrl = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }


}
