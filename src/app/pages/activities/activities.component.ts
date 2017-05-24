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
import {Activity} from "../../models/Activities";
import {ToasterService} from "angular2-toaster";
import {NotificationService} from "../../services/notification.service";


@Component({
  selector: 'activities-component',
  styleUrls: ['./activities.component.css'],
  templateUrl: './activities.component.html'
})
export class ActivitiesComponent implements OnInit, OnDestroy {


  activity: Activity = new Activity();
  fakeUrl: string = null;

  constructor(public uploaderService: Uploader, private toasterService: NotificationService) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }


  addActivity() {
    console.log(this.activity);
    let uploadFile = (<HTMLInputElement>window.document.getElementById('photoEvent')).files[0];
    if (uploadFile) {
      let url = Config.apiUrl + "/activities/add";
      let myUploadItem = new UploadFile(uploadFile, url);
      //myUploadItem.formData = {eventImageURL: uploadFile};  // (optional) form data can be sent with file

      myUploadItem.formData = {
        title: this.activity.title,
        summary: this.activity.summary
      };
      this.uploaderService.onSuccessUpload = (item, response, status, headers) => {
        // success callback
        console.log("Success");
        this.toasterService.success("Ajout d'une activité avec succées");
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
