import { HOST } from './../shared/host';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private api = HOST + 'upload';

  constructor(
    private http: HttpClient
  ) { }

  uploadFile(route: string, fileName: string, file: File): Observable<any> {
    // const status = {};
    const formData: FormData = new FormData();
    formData.append('image', file, fileName);
    formData.append('route', route);
    // create a http-post request and pass the form
    // tell it to report the upload progress
    const req = new HttpRequest('POST', this.api, formData, {
      // reportProgress: true,
    });

    // create a new progress-subject for every file
    // const progress = new Subject<number>();

    // send the http-request and subscribe for progress-updates
    // this.http.request(req).subscribe(event => {
    //   if (event.type === HttpEventType.UploadProgress) {
    //     // calculate the progress percentage
    //     const percentDone = Math.round(100 * event.loaded / event.total);

    //     // pass the percentage into the progress-stream
    //     progress.next(percentDone);
    //   } else if (event instanceof HttpResponse) {
    //     // Close the progress-stream if we get an answer form the API
    //     // The upload is complete
    //     progress.complete();
    //   }
    // });
    // status[file.name] = {
    //   progress: progress.asObservable()
    // };
    // return status;
    return this.http.request(req);
  }
}
