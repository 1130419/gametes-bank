import { IAction } from './../left-bar/left-bar.component';
import { Sample } from './../models/sample/Sample';
import { SampleService } from './../services/SampleService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {

  actions: IAction[];

  constructor() {
    this.actions = <IAction[]>[
      {
        description: 'Validar Amostra',
        route: '.'
      },
      {
        description: 'Gerar Espermograma',
        route: '.'
      },
      {
        description: 'Crio-perservar amostra',
        route: '.'
      },
      {
        description: 'Ver lista de trabalho',
        route: './work-list'
      }
    ];
  }

  ngOnInit() {
  }

}
