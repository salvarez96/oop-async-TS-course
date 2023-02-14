export class MyDate {
  /* using the reserved word 'private' is how we can protect properties and methods from either
  accesing or modifying them from the outside: */
  private year: number;
  private month: number;
  private day: number;

  constructor(year: MyDate['year'], month: MyDate['month'], day: MyDate['day']) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  /* function to beautify the formated date that only needs to be used inside of class */
  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }

  getFormatedDate(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`
  }

  get(type: 'days' | 'months' | 'years') {
    switch(type){
      case 'days':
        return this.day;
      case 'months':
        return this.month;
      case 'years':
        return this.year;
    }
  }

  public add(amount: number, type: 'days' | 'months' | 'years'): void {
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

const myDate = new MyDate(2021, 1, 9);

console.log(myDate);
console.log(myDate.getFormatedDate()); // 09/01/2021

console.log(myDate.get('days')); // 9
console.log(myDate.get('months')); // 1
console.log(myDate.get('years')); // 2021
