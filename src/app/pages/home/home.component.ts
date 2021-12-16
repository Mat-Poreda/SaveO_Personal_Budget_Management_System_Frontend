import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {
    if(localStorage.getItem('profile')==null){
      localStorage.setItem('profile', 
       JSON.stringify({
        'nickname': '',
        'name': '',
        'email': ''}
        ));

    }
    if(localStorage.getItem('UserDetails')==null){
      localStorage.setItem('UserDetails', "");
      localStorage.UserDetails.email="";
    }
  }
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundImage = 'url("assets/img/black_bck.jpg")';
    }

  ngOnInit(): void {
  }

}
