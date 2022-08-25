import { header } from './../../model/header.model';
import { TokenService } from 'src/app/service/token.service';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  header: header = new header("","");

  constructor(private router: Router, private tokenService: TokenService,public headerService: HeaderService) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.headerService.getHeader().subscribe((data) => {

      this.header = data;

    });
  }


  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }




}
