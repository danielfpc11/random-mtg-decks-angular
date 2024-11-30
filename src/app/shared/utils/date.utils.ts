import { MAX_DATE_DIGITS, ONE_NUMBER, TIMEOUT_MILLISECONDS, ZERO_STRING } from '../constants';

export class DateUtils {

  public static formatDate(date: Date): string {
    date = new Date(date);
    return `${this.formatDateDigit(date.getDate())}/${this.formatDateDigit(date.getMonth() + ONE_NUMBER)}/${date.getFullYear()} `
           + `${this.formatDateDigit(date.getHours())}:${this.formatDateDigit(date.getMinutes())}`;
  }

  public static formatDateDigit(digit: number): string {
    return digit.toString().padStart(MAX_DATE_DIGITS, ZERO_STRING);
  }

  public static secondsToMilliseconds(seconds: number): number {
    return seconds * TIMEOUT_MILLISECONDS;
  }

}
