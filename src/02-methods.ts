export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: MyDate['year'], month: MyDate['month'], day: MyDate['day']) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  getFormatedDate(): string {
    return `${this.day}/${this.month + 1}/${this.year}`
  }

  /* for this exercise, we'll asume a year is 12 months and each month is 30 days. */
  add(amount: number, type: 'days' | 'months' | 'years'): void {
    const prevMonth = this.month;
    switch (type) {
      case 'days':
        if (amount >= 30 || this.day + amount > 30) {
          const accum = this.day + amount;
          const monthsToAdd = Math.floor(accum / 30);
          this.day = accum - (30 * monthsToAdd);
          this.month += monthsToAdd;

          if (this.month >= 12) {
            const yearsToAdd = Math.floor(this.month / 12);
            this.year += yearsToAdd;
            this.month = prevMonth + (monthsToAdd - 12 * yearsToAdd);
          }
        } else {
          this.day += amount
        }
        break;
        case 'months':
          if (this.month + amount >= 12) {
            const accum = this.month + amount;
            const yearsToAdd = Math.floor(accum / 12);
            this.year += yearsToAdd;
            this.month = prevMonth + (accum - 12 * yearsToAdd);
          } else {
            this.month += amount
          }
        break;
      case 'years':
        this.year += amount
        break;
    }
  }
}

const myDate = new MyDate(2021, 3, 13);

console.log(myDate);
console.log(myDate.getFormatedDate()); // 13/4/2021
myDate.add(10, 'months');
console.log(myDate.getFormatedDate()); // 13/5/2022
myDate.add(230, 'days');
console.log(myDate.getFormatedDate()); // 3/1/2023
console.log(myDate.day);
console.log(myDate.year);
