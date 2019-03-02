import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  constructor(private router: Router) { }
  
  ngOnInit() {
    console.log("in on init");
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }
    this.router.navigate(['login']);
    return false; 
  } 

}
