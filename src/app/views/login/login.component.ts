import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }
  public contactForm: FormGroup;

  


  constructor() {
    this.contactForm = this.createForm();
  }

  get name() { return this.contactForm.get('username'); }
  get email() { return this.contactForm.get('password'); }

  createForm() {
    return new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }
  

  onResetForm(): void {
    this.contactForm.reset();
  }

  onSaveForm() {
    console.log('Saved');
  }


}
