const date = new Date();
const date2 = new Date(1993, 0, 12);

console.log(date);
console.log(date2);

class MyDate {
  /* when working with classes, TS would always wants us to initialize any variable we declare,
  so either we initialize it directly or use it inside a constructor. This is to avoid nullish
  values for those uninitialized variables */
  year: number;
  month: number;
  day: number;

  constructor(year: MyDate['year'], month: MyDate['month'], day: MyDate['day']) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

/* because myDate is an instance of MyDate, TS inferes its type as MyDate */
const myDate = new MyDate(2021, 3, 13);

console.log(myDate);
