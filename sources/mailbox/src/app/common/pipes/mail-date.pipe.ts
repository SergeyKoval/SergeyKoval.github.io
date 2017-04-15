import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mailDate'
})
export class MailDatePipe implements PipeTransform {
  private readonly SECONDS_MS: number = 1000;
  private readonly MINUTES_MS: number = 60 * this.SECONDS_MS;
  private readonly HOUR_MS: number = 60 * this.MINUTES_MS;
  private readonly DAY_MS: number = 24 * this.HOUR_MS;
  private readonly YESTERDAY: string = 'Yesterday';
  private readonly MONTHES: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  public transform(time: number): string {
    const date: Date = new Date();
    date.setTime(time);

    const currentDate: Date = new Date();
    const today: number = currentDate.getHours() * this.HOUR_MS + currentDate.getMinutes() * this.MINUTES_MS + currentDate.getSeconds() * this.SECONDS_MS;

    if (time > currentDate.getTime() - today) {
      const hours: string = date.getHours() < 10 ? `0${date.getHours()}` : String(date.getHours());
      const minutes: string = date.getMinutes() < 10 ? `0${date.getMinutes()}` : String(date.getMinutes());
      return `${hours}:${minutes}`;
    }

    const yesterday: number = today + this.DAY_MS;
    if (time > currentDate.getTime() - yesterday) {
      return this.YESTERDAY;
    }

    return `${date.getDate()} ${this.MONTHES[date.getMonth()]}`;
  }
}
