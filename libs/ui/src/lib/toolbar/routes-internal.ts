export interface RouteInternal {
  /**
   * Represents client path to page
   */
  path: string;

  /*
   * Represents text of the link going to be rendered
   */
  text: string;

  /**
   * Represents the title of the page belonging to the path
   */
  title: string;

  /**
   * Represents the subtitle of the page belonging to the path
   */
  subtitle: string;

  /**
   * Indicates whether route is entry point of the app.
   */
  isStartPage?: boolean;

  /**
   * Path to an image that should mit displayed instead of the text
   */
  imgSrc?: string;
}
