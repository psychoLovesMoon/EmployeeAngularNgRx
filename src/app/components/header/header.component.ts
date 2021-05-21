import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blue, orange, Theme } from 'src/app/theme/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.changeTheme()
  }

  orangeTheme! : boolean
  greyTheme! : boolean
  blueTheme! : boolean

  themeChange(theme : string){
    localStorage.setItem("theme",theme);
    // window.location.reload();
    this.changeTheme();
  }


  changeTheme(){
    let theme! : Theme
    
    this.greyTheme = false;
    this.orangeTheme = false;
    this.blueTheme = false;

    switch(localStorage.getItem('theme')){
      case 'orange': this.orangeTheme = true;theme = orange;
                      break;
      case 'grey': this.greyTheme = true;
                      break;       
      case 'blue': this.blueTheme = true;theme = blue;
                      break;        
    }

    if(theme){
      Object.keys(theme.properties).forEach(property => {
        document.documentElement.style.setProperty(
          property,
          theme.properties[property]
        );
      });
    }
  }
}
