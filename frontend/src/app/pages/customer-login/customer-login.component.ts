import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Twig from 'twig';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('/userlogin-template')
      .subscribe((twigTemplate: any) => {
        Twig.twig({ data: twigTemplate }).render({ userlogin: '../../../../../../M1p10Mean-Eddy-Mino/views/userlogin.twig' });
      });
  }

}
