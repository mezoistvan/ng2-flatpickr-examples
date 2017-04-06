import { Component, OnInit } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr/ng2-flatpickr';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  exampleOptions: FlatpickrOptions = {
    defaultDate: '2017-03-15'
  };

  dateTimeOptions: FlatpickrOptions = {
    enableTime: true
  };

  dateRangeOptions: FlatpickrOptions = {
    mode: 'range',
    weekNumbers: true
  };

  number: number;

  soon( number: number ) {
    this.number = number;
  }

  form: FormGroup;

  constructor( private formBuilder: FormBuilder ) {
    this.form = formBuilder.group({
      date: ''
    });
  }

  onSubmit() {
    console.log( this.form.value );
  }

  interval: any;
  randomDate: Date;

  ngOnInit() {
    this.initRandomDateToSet();
  }

  initRandomDateToSet() {
    if( this.interval ) { 
      clearInterval( this.interval );
    }
    this.interval = setInterval( () => this.doRandomDate( 1000, 2000000000000, 0, 23 ), 1000 );
  }

  doRandomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    this.randomDate = date;
  }
}
