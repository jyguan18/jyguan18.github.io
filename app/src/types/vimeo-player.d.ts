declare module "@vimeo/player" {
  export default class Player {
    constructor(element: HTMLElement | string, options?: any);
    play(): Promise<void>;
    pause(): Promise<void>;
  }
}
