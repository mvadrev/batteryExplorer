import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-dash-root',
  templateUrl: './dash-root.component.html',
  styleUrls: ['./dash-root.component.css']
})
export class DashRootComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  regDevS() {
    this.route.navigate(['/dashboard/registerDevice'])
  }

}
