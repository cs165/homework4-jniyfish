// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor(input1,input2) {
    this.url=input1;
    this.value=input2
    const button = document.querySelector('#button');
    this.audioPlayer = new AudioPlayer();
    this.onClick = this.onClick.bind(this);
    let img = document.createElement("img");
    img.src = "./images/play.png"
    button.append(img);
    img.style.width = "60px";
    img.style.height = "60px";
    img.addEventListener('click',this.onClick);

    // TODO(you): Implement the constructor and add fields as necessary.
  }
  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
  onClick(event)
  {
    alert("hi");
    this.audioPlayer.setSong(this.url);
    //this.audioPlayer.setSong("https://www.youtube.com/watch?v=y2x5e2pEsPY");
    this.audioPlayer.play();
  }

}
 // TODO(you): Add methods as necessary.
