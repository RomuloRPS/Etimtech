import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private route: Router) { }
  toMed(){
    this.route.navigate(['produtos'])
  }

  Logar(){
    
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Não encontramos sua conta!',
        footer: '<a href="https://api.whatsapp.com/send?phone=5547991574378">Cadastro para testes, clique aqui</a>'
      })
  }
  ngOnInit() {
  }
 
}
