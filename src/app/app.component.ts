import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formBuilder:FormBuilder, private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      `homeBA`,
      this.sanitizer.bypassSecurityTrustResourceUrl("./../assets/home.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `devicesBA`,
      this.sanitizer.bypassSecurityTrustResourceUrl("./../assets/devices.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `experimentsBA`,
      this.sanitizer.bypassSecurityTrustResourceUrl("./../assets/experiments.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `profileBA`,
      this.sanitizer.bypassSecurityTrustResourceUrl("./../assets/profile.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `logoutBA`,
      this.sanitizer.bypassSecurityTrustResourceUrl("./../assets/logout.svg")
    );
  }
  title = 'batteryExplorer';

}
