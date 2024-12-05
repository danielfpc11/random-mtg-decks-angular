export class UrlUtils {

  public static createUrlWithOrigin(path: string): string {
    return `${location.origin}${path}`;
  }

}
