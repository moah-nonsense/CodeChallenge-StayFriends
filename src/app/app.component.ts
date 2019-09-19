import {Component, OnInit} from '@angular/core';
import {StatesService} from './services/states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Testaufgabe - Bundesland';
  states = {};
  personCount = {};
  persons = [];

  constructor(private statesServiceService: StatesService) {}

  ngOnInit() {
    /// following code is the best practice approach if the request to the api is a success
    this.statesServiceService.getStates()
      .subscribe(response => {
        this.states = response;
      });

    this.statesServiceService.getPersonIndexCount()
      .subscribe(result => {
        this.personCount = result;
      })
    // tslint:disable-next-line:forin
    for (const person in this.personCount) {
      const currentPersonCount = {
        name: person,
        count: this.personCount[person]
      }
      if (this.personCount[person] > 0) {
        this.persons.push(currentPersonCount);
      }
    };
    // tslint:disable-next-line:forin
    // for (const person in this.states.personIndexCounts) {
    //   const currentPersonCount = {
    //     name: person,
    //     count: this.states.personIndexCounts[person]
    //   }
    //   if (this.states.personIndexCounts[person] > 0) {
    //     this.persons.push(currentPersonCount);
    //   }
    // };

    /// fetching mocked data from states.service -> statesData object
    // this.states = this.statesServiceService.getStates();
    // this.personCount = this.statesServiceService.getPersonIndexCount();
  }
}
