import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
// Define an array to store the days of the calendar
weeks: any[] = [];

constructor() { }

ngOnInit() {
  // Define a date object to represent the current month
  const today = new Date();

  // Define variables for the current year and month
  const year = today.getFullYear();
  const month = today.getMonth();

  // Define a date object for the first day of the current month
  const firstDayOfMonth = new Date(year, month, 1);

  // Define a variable for the number of days in the current month
  const numberOfDays = new Date(year, month + 1, 0).getDate();

  // Define a variable for the day of the week of the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // Define a variable to keep track of the day we are currently on
  let currentDay = 1;

  // Loop through the weeks of the month
  for (let i = 0; i < 6; i++) {
    // Define an array to store the days of the current week
    const week = [];

    // Loop through the days of the week
    for (let j = 0; j < 7; j++) {
      // If we haven't reached the first day of the month yet or we have gone past the last day of the month, add a blank space
      if ((i === 0 && j < firstDayOfWeek) || currentDay > numberOfDays) {
        week.push('');
      } else {
        // Otherwise, add the current day
        week.push(currentDay);
        currentDay++;
      }
    }

    // Add the week to the array of weeks
    this.weeks.push(week);
  }
}
}
