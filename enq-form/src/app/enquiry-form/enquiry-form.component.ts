import { BackendApiService } from '../services/backend-api.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBean } from '../model/form';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {

  constructor(private modelVal: FormBean, private service: BackendApiService, private el: ElementRef, private toast: ToastrService) { }

  model = new FormBean();
  fileUri = '';
  isSubmitted = false;
  newFormBean() {
    this.model = new FormBean();
  }

  onSubmit() {
    this.service.submitData(this.model);
  }

  ngOnInit() {
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  selectFile() {
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#inputFile');

    if (this.el.nativeElement.querySelector('#inputFile').value !== '') {
      this.el.nativeElement.querySelector('#formUri').value = inputEl.files.item(0).name;
    } else {
      this.el.nativeElement.querySelector('#formUri').value = '';
      this.el.nativeElement.querySelector('#inputFile').value = '';
    }
  }

  uploadFile() {
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#inputFile');
    let fileCount: number;
    if (null !== inputEl.files.item(0)) {
       fileCount = inputEl.files.item(0).size;
    } else {
      this.toast.warning('Kindly select correct file using Browse');
    }
    if (fileCount > 0) {
      const formData = new FormData();
      formData.append('file', inputEl.files.item(0));
      this.service.upload(formData);
    } else {
      // do nothing
    }
  }

}
