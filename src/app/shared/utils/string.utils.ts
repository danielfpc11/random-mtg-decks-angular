export class StringUtils {

  public static format(string: string, ...args: any[]): string {
    return string.replace(/{(\d+)}/g, (match, index) => {
      return args[index] ?? match;
    });
  }

}
