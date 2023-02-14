export class MyDate {
  constructor(
    private year: number,
    private month: number,
    private _day: number
  ) {}

  /* in order to create getters in TS, we have to use underscore to change the name of our actual
  variable inside the constructor and refactor our code because we need to differenciate both
  the private value and the getter that returns that private value. Also, by definition, all
  getters must return something */
  get day() {
    return this.addPadding(this._day);
  }

  public add(amount: number, type: 'days' | 'months' | 'years'): void {
    const prevMonth = this.month;
    switch (type) {
      case 'days':
        if (amount >= 30 || this._day + amount > 30) {
          const accum = this._day + amount;
          const monthsToAdd = Math.floor(accum / 30);
          this._day = accum - (30 * monthsToAdd);
          this.month += monthsToAdd;

          if (this.month >= 12) {
            const yearsToAdd = Math.floor(this.month / 12);
            this.year += yearsToAdd;
            this.month = prevMonth + (monthsToAdd - 12 * yearsToAdd);
          }
        } else {
          this._day += amount
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

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }

  getFormatedDate(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`
  }

  get(type: 'days' | 'months' | 'years') {
    switch(type){
      case 'days':
        return this._day;
      case 'months':
        return this.month;
      case 'years':
        return this.year;
    }
  }

  /* getters are also useful when we want to do some internal logic inside our class but we also
  want to make the result accesible */
  get isLeapYear() {
    /* a leap year will always be divisible by 4 */
    if (this.year % 4 === 0) {
      /* except when they're both divisible by 100 and non divisible by 400 */
      if (this.year % 100 === 0 && this.year % 400 !== 0) {
        return false;
      }
      return true;
    }
    return false
  }
}

const myDate = new MyDate(2020, 1, 9);

console.log(myDate);
console.log(myDate.getFormatedDate()); // 09/01/2020

console.log(myDate.get('days')); // 9
console.log(myDate.get('months')); // 1
console.log(myDate.get('years')); // 2020

/* as usual with a getter, it works like a property, instead of a method */
console.log(myDate.day); // 09
console.log(myDate.isLeapYear); // true
