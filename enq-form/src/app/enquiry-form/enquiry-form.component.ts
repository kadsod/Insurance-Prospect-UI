import { BackendApiService } from '../services/backend-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBean } from '../model/form';


@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {

  constructor(private modelVal: FormBean, private service: BackendApiService) { }

  model = new FormBean();

  newFormBean() {
    this.model = new FormBean();
  }

  onSubmit()  {
    this.service.submitData(this.model);
  }

  ngOnInit() {
  }

}
