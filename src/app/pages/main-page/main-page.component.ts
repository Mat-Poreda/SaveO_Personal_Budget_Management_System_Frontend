import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import UserDetails from 'src/app/models/user-details.model';
import { UserServiceService } from 'src/app/service/user-service/user-service.service';
import { ImageService } from 'src/app/service/image-service/image-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/service/data-storage/data-storage.service';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

export class UserStats{
  playlistsCount: number;
  titlesCount: number;
  avgTitlesInPlaylist: number;
  maxTitlesInPlaylist: number;

  constructor() {
      this.playlistsCount = 0;
      this.titlesCount = 0;
      this.avgTitlesInPlaylist = 0;
      this.maxTitlesInPlaylist = 0;
  }
}



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  menuElement!: ElementRef;
  sticky: boolean = false;
  elementPosition: any;
  @Input() src: any;
  @Input() bioInput: any;
  @ViewChild('form')
  restoredSession: any;
  profileJson!: string;
  email!: string;
  img:any;
  username!: string;
  bio: string;
  id!: number;
  user!: AuthService["user$"];
  userDetails: UserDetails;
  selectedFile!: ImageSnippet;
  imageId!: number;
  form!: NgForm;
  isClicked: boolean = false;
  isImageLoading: boolean = false;
  userStats: UserStats;

  showCategories: boolean = false;
  categoryType: string = "EXPENSE";
  showBudget: boolean = true;
  

  constructor(private observer: BreakpointObserver, public auth: AuthService, private userService: UserServiceService, private dataStorageService: DataStorageService,  private httpClient: HttpClient, 
    private elementRef: ElementRef, private imageService: ImageService, private router: Router) {
      this.userDetails= localStorage.UserDetails;
      this.bio=this.userDetails.bio;
      this.userStats=new UserStats();
     }

  ngOnInit(): void {
    //GET AUTHENTICATION
    this.auth.user$.subscribe(
      (profile) => {

        localStorage.setItem('profile', JSON.stringify(profile, null, 2)); 
        let tempDetails=JSON.parse(localStorage.getItem('profile')!);
        this.userService.getUserDetails(tempDetails.email).subscribe(
          (data) => {
              if( data!="" && data!=null){
              this.userDetails=data;
              localStorage.setItem('UserDetails', JSON.stringify(this.userDetails));
              if(this.userDetails.imageId!=null){
                this.getImageFromService(this.userDetails.imageId);
              }
              if(this.userDetails.bio!=null && this.userDetails.bio!=""){
                this.bio=this.userDetails.bio;
              }
              }
              else{
              tempDetails.username=tempDetails.nickname;
              this.userService.postUserDetails(tempDetails).subscribe(
                  (data) => {
                          this.userDetails=data;
                          if(this.userDetails.username==null){
                             this.userDetails=tempDetails.nickname;
                            }
                  localStorage.setItem('UserDetails', JSON.stringify(this.userDetails));
                  
                  this.dataStorageService.postUserDetails(this.userDetails).subscribe(
                    (data) => {
                      console.log("Id from data storage: "+data.id);
                    }
                  )
                  
                  ;
                },
            );
          }
          });

        if( this.userDetails.imageId!=null && this.userDetails.imageId!=0){
          this.getImageFromService(this.userDetails.imageId);
        }
        this.userDetails=localStorage.UserDetails,
        this.username=localStorage.UserDetails.username,
        this.email=localStorage.UserDetails.email,
        this.bio=localStorage.UserDetails.bio,
        this.imageId=localStorage.UserDetails.imageId
        if(this.userDetails.imageId!=null && this.userDetails.imageId!=0){
        }
      },
    );

  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.elementPosition){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  buttonClicked(){
    this.isClicked = !this.isClicked;
   }

   public onSubmit(variable: any) {
    this.userDetails.bio=variable.updatedBio;
    this.updateUserDetails(this.userDetails.email, this.userDetails);
    this.isClicked = false;
  }





  public getUserDetails(details: UserDetails): UserDetails{
    this.userService.getUserDetails(details.email).subscribe(
      (data) => {
        details.id=data.id;
        details.username=data.username;
        details.email=data.email;
        details.bio=data.bio;
        details.imageId=data.imageId;
     });
     return details;
     }


  public updateUserDetails(email: string, userDetails: UserDetails){
    this.userService.updateUserDetails(email, userDetails).subscribe(
      (data) => {
        this.userService.getUserDetails(email).subscribe(
          (data) => {
            this.id=data.id;
            this.username=data.username;
            this.email=data.email;
            this.bio=data.bio;
            this.userDetails.id=data.id;
            this.userDetails.username=data.name;
            this.userDetails.email=data.email;
            this.userDetails.bio=data.bio;
            this.userDetails.imageId=data.image;
            localStorage.UserDetails=JSON.stringify(this.userDetails);
         });
        }
    )

    }


    processFile(imageInput: any,  email: string) {
      const file: File = imageInput.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', (event: any) => {
  
        this.selectedFile = new ImageSnippet(event.target.result, file);
        this.imageService.uploadImage(this.selectedFile.file,  email).subscribe(
          (res) => {
            this.getImageFromService(res);
            this.userDetails.imageId=res.valueOf();
            localStorage.UserDetails.userDetails;
          },
          (err) => {
          
          })
      });
  
      reader.readAsDataURL(file);

    }


  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
        this.img = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
      this.img=reader.result;
    }
  }

getImageFromService(imageId: number) {
    this.isImageLoading = true;
    this.imageService.getImage(imageId).subscribe(data => {
    this.createImageFromBlob(data);
    this.isImageLoading = false;
    }, 
    error => {
      this.isImageLoading = false;
      console.log(error);
  });

}

public updateBio(bioInput: any){
  this.userDetails.bio=bioInput.value;
  this.updateUserDetails(this.userDetails.email, this.userDetails);
}

employeeDetails(id: number){
this.router.navigate(['playlist', id]);
}
logout(): void {
  this.auth.logout({ returnTo: "/home" });
}

changePageComponent(type: any){
  this.ngOnInit();
  if(type=="budget"){
    this.showCategories=false;
    this.showBudget=true;
  }else{
    this.categoryType=type;
    this.showCategories=true;
    this.showBudget=false;
  }

}

}
