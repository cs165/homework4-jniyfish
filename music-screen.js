// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(containerElement) {

    this.containerElement = containerElement;


  }

  show() {
    console.log("mu");
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
  // TODO(you): Add methods as necessary.
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
