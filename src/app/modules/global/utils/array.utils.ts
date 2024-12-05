export class ArrayUtils {

  public static isEmpty(array: any[]) {
    return array.length === 0;
  }

  public static isNotEmpty(array: any[]) {
    return !this.isEmpty(array);
  }

}
