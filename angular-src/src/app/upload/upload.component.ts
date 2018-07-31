import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { UploadService } from "./upload.service";
import { Upload } from "./upload";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
})
export class UploadComponent implements OnInit {
  @Input() fileURL: string;
  @Input() types = ".png,.jpeg,.jpg";
  @ViewChild("file") fileInput;
  type: string;
  file: File;

  constructor(private uploadService: UploadService) {}

  ngOnInit() {
    if (this.types.includes("jpg")) {
      this.type = "image";
    } else if (this.types.includes("pdf")) {
      this.type = "document";
    }
  }

  addFile() {
    this.fileInput.nativeElement.click();
  }

  previewFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      if (this.types.includes(".jpg")) {
        this.previewImage(this.file);
      }
    }
  }

  previewImage(image: any) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.fileURL = event.target.result;
    };
    reader.readAsDataURL(image);
  }

  onSubmit(fileRoute: string, fileName: string) {
    // console.log(this.file);
    const type = this.file.type;
    const fileTypeIndex = type.indexOf("/") + 1;
    const file = this.file;
    fileName += "." + type.substring(fileTypeIndex);
    console.log(fileName);
    return { file, fileName, fileRoute } as Upload;
  }
}
