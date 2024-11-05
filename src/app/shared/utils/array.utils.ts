export class ArrayUtils {

  public static findAny(array: Array<any>): any {
    return array.at(Math.floor(Math.random() * array.length));
  }

}
