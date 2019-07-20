import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBean } from '../model/form';
import { ToastrService } from 'ngx-toastr';

const url = 'http://localhost:8080/data/postData ';
@Injectable()
export class BackendApiService {

  contentRes: any;
  constructor(private http: HttpClient, private toast: ToastrService) { }


  submitData(model: FormBean) {
    return this.http.post<FormBean>(url, model).subscribe( data => this.contentRes = data.response
    , err => this.toast.error('Connection Issue'),
    () => this.toast.info(this.contentRes));
  }
}
