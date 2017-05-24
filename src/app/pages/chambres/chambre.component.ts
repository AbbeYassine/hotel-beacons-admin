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
import {Chambre} from "../../models/chambre";
import {NotificationService} from "../../services/notification.service";


@Component({
  selector: 'chambre-component',
  styleUrls: ['./chambre.component.css'],
  templateUrl: './chambre.component.html'
})
export class ChambreComponent implements OnInit, OnDestroy {


  chambre: Chambre = new Chambre();
  fakeUrl: string = null;

  constructor(public uploaderService: Uploader, private toasterService: NotificationService) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }


  addChambre() {
    console.log(this.chambre);
    let uploadFile = (<HTMLInputElement>window.document.getElementById('photoEvent')).files[0];
    if (uploadFile) {
      let url = Config.apiUrl + "/chambres/add";
      let myUploadItem = new UploadFile(uploadFile, url);
      //myUploadItem.formData = {eventImageURL: uploadFile};  // (optional) form data can be sent with file

      myUploadItem.formData = {
        title: this.chambre.title
      };
      this.uploaderService.onSuccessUpload = (item, response, status, headers) => {
        // success callback
        console.log("Success");
        this.toasterService.success("Ajout chambre avec succées");
        console.log(item, response, status, headers);
      };
      this.uploaderService.onErrorUpload = (item, response, status, headers) => {
        // error callback
        console.log("Error");
        console.log(item, response, status, headers);

        this.toasterService.error("Erreur");
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
