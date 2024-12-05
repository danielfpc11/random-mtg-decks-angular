export class DateUtils {

  public static formatDate(date: Date): string {
    date = new Date(date);
    return `${this.formatDateDigit(date.getDate())}/${this.formatDateDigit(date.getMonth() + 1)}/${date.getFullYear()} `
           + `${this.formatDateDigit(date.getHours())}:${this.formatDateDigit(date.getMinutes())}`;
  }

  public static formatDateDigit(digit: number): string {
    return digit.toString().padStart(2, '0');
  }

  public static secondsToMilliseconds(seconds: number): number {
    return seconds * 1000;
  }

}
