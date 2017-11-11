import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})

export class LeftBarComponent implements OnInit {

  @Input() actions: IAction[];

  applicationName: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute ) {
    this.applicationName = 'GAM';
  }

  ngOnInit() {
  }

  menuClickHandler = (event: any) => {
    if (!$(event.target).parents('.left-bar').is(':hidden')) {
      $(event.target).parents('.left-bar').addClass('hidden');
      $(event.target).parents('.left-bar').siblings().removeClass('hidden');
    }
  }

  navigate = (route: string) => {
    debugger;
    this.router.navigate([route], { relativeTo: this.route } );
  }

}

export interface IAction {
  description: string;
  route: string;
}

