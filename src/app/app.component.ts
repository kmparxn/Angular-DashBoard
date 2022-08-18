import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  btnStyle = 'b1';
  slickBar = 'slickBar';
  btnStyle2 = 'we';
  title = 'SideBar';
  iconName = '';
  profile = ''
  ditail = '';
  
  submit() {
    /*if(this.btnStyle === 'b2'){
      this.btnStyle = 'b1';
      this.slickBar = 'slickBar'
    }
    else{
      this.btnStyle = 'b2';
      this.slickBar = 'slickBar2'
    } */

    if(this.btnStyle === 'b2'){
      this.btnStyle = 'b1';
      this.btnStyle2 = 'we';
      this.iconName = '';
      this.profile = '';
      this.ditail = '';
    }
    else{
      this.btnStyle = 'b2';
      this.btnStyle2 = 'we2';
      this.iconName = 'wima';
      this.profile = 'profile2';
      this.ditail = 'ditail';
    }

  }
}
