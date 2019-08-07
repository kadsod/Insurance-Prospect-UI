import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBean } from '../model/form';
import { ToastrService } from 'ngx-toastr';

const url = 'https://insurance-prospect-backend.cfapps.io/data/postData ';
const urlDoc = 'https://insurance-prospect-backend.cfapps.io/data/file ';
@Injectable()
export class BackendApiService {

  contentRes: any;
  constructor(private http: HttpClient, private toast: ToastrService) { }


  submitData(model: FormBean) {
    return this.http.post<FormBean>(url, model).subscribe(data => this.contentRes = data.response
      , err => this.toast.error('Connection Issue'),
      () => this.toast.info(this.contentRes));
  }

  upload(formData: FormData) {
    this.http.post(urlDoc, formData).subscribe(
      data => this.contentRes = data,
      () => this.toast.info('Success'));
  }
}
