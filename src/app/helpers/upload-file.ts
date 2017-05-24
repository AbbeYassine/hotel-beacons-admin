/**
 * Created by Vyndee on 24/05/2017.
 */
/**
 * Created by Vyndee on 31/03/2017.
 */
import {UploadItem}    from 'angular2-http-file-upload';

export class UploadFile extends UploadItem {
  constructor(file: any, url: string) {
    super();
    this.url = url;
    /*if (token)
     this.headers = {"Authorization": "Bearer " + token};*/
    this.file = file;
  }
}
