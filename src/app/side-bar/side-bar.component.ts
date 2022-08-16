import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router'




@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private route: Router) {}


  
gotoFunctionDash() {
  this.route.navigate(['/dashboard'])
}

  
gotoFunctionDevices() {
  console.log("devices..")
  this.route.navigate(['/dashboard/devices'])
}

gotoFunctionExp() {
  this.route.navigate(['/dashboard/experiments'])

}

gotoFunctionPro() {
  this.route.navigate(['/dashboard/profile'])

}


}
