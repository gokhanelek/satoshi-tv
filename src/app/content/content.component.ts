import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../@core/models/user';
import { UserLocalStorageService } from '../@core/services/user-local-storage.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  user: User = {
    firstname: '',
    surname: '',
    email: ''
  };
  submitted = false;
  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private localStorageService: UserLocalStorageService
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get userFormControl() {
    return this.userForm.controls;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered',
      ignoreBackdropClick: false,
      keyboard: false
    });
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.user = form.value;
    this.localStorageService.setInfo(this.user);
    this.modalRef?.hide()
  }
}
