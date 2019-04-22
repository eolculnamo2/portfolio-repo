// @flow

/**
 * @note Custom scroll to function that allows control of speed without the need for importing jQuery.
 * @param {Object} destination
 * @param {Number} speed
 */
class ScrollTo {
  destination: Object;
  speed: number;
  offset: number;

  constructor(destination: Object, speed: number) {
    this.destination = destination;
    this.speed = speed;

    this.offset = 60;
    this.init();
  }

  init(): void {
    const start: number = performance.now();
    const destination = this.destination.current.offsetTop;
    const isGoingUp = destination < window.pageYOffset + this.offset;
    const bodyHeight = document.body ? document.body.offsetHeight : null;

    const step = timestamp => {
      const currentLocation = window.pageYOffset + this.offset;
      const progress = Math.abs(destination - currentLocation) * (.05 * this.speed) + 2;
      const threshold = isGoingUp ? destination >= currentLocation : destination <= currentLocation;
      const moveDistance = isGoingUp ? window.pageYOffset - progress : window.pageYOffset + progress;

      window.scrollTo({top: moveDistance});

      if (!threshold &&
          window.pageYOffset &&
          window.pageYOffset + window.innerHeight < bodyHeight) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }
}

export default ScrollTo;