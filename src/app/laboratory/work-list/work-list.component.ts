import { Component, OnInit } from '@angular/core';
import { Sample } from '../../models/sample/Sample';
import { SampleService } from '../../services/SampleService';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {

  samples: Sample[];

  constructor(private sampleService: SampleService) {
    this.samples = sampleService.getSamples();
   }

  ngOnInit() {
  }

}
