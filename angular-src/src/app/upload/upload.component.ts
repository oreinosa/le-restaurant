import { environment } from './../../environments/environment';
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { UploadService } from "./upload.service";
import { Upload } from "./upload";
import { of, Observable } from "rxjs";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
})
export class UploadComponent implements OnInit {
  @Input() fileURL: string;
  originalFileURL: string;
  @Input() types = ".png,.jpeg,.jpg";
  @ViewChild("file") fileInput;
  type: string;
  file: File;
  mode: string = 'new';

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
    if (this.fileURL) {
      this.mode = 'edit';
      this.originalFileURL = this.fileURL;
      this.originalFileURL = this.originalFileURL.replace(environment.static, '');
    }
    if (this.types.search(/(jpg|png|jpeg)/)) {
      this.type = "image";
    } else if (this.types.search(/pdf/)) {
      this.type = "document";
    }
  }

  addFile() {
    this.fileInput.nativeElement.click();
  }

  previewFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      if (this.type === "image") {
        this.previewImage(this.file);
      }
    }
  }

  previewImage(image: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.fileURL = event.target.result;
    };
    reader.readAsDataURL(image);
  }

  onDrop(ev) {
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          this.file = ev.dataTransfer.items[i].getAsFile();
          // console.log('... file[' + i + '].name = ' + file.name);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        // console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
        this.file = ev.dataTransfer.files[i];
      }
    }
    this.previewImage(this.file);
    // Pass event to removeDragData for cleanup
    this.removeDragData(ev)
  }

  private removeDragData(ev) {
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to remove the drag data
      ev.dataTransfer.items.clear();
    } else {
      // Use DataTransfer interface to remove the drag data
      ev.dataTransfer.clearData();
    }
  }

  onDragover(event) {
    // console.log('File(s) in drop zone');
    // Prevent default behavior (Prevent file from being opened)
    event.preventDefault();
  }

  onSubmit(fileRoute: string, fileName: string): Observable<string> {
    // console.log(this.file);
    const type = this.file.type;
    const fileTypeIndex = type.indexOf("/") + 1;
    fileName += "." + type.substring(fileTypeIndex);
    fileName = fileName.toLowerCase();
    console.log('submitting ', this.mode)
    if (this.mode === 'new') {
      return this.uploadService.uploadFile(fileRoute, fileName, this.file);
    } else if (this.mode === "edit") {
      if (this.originalFileURL === this.fileURL) {
        console.log('file did not change');
        return of(this.fileURL);
      } else {
        return this.uploadService.editFile(fileRoute, fileName, this.file, this.originalFileURL);
      }
    }
  }
}
