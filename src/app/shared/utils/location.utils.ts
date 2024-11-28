export class LocationUtils {

  public static createUrlWithOrigin(path: string): string {
    return `${location.origin}${path}`;
  }

}
