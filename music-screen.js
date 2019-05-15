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
    this.data = null;
  
    // TODO(you): Implement the constructor and add fields as necessary.
    function onJsonReady(json) {
    //  console.log(json.data[1]);
      var random=getRandomInt(25);
      const gif = document.querySelector('#gif');
      let img = document.createElement("img");
      img.src = json.data[random].images.downsized.url;

      //img.style.maxwidth = '100%';
     // img.style.maxheight = '100%';
     // img.style.width = '100%';
     // img.style.height = '100%';
      gif.append(img);
    }


    function onResponse(response) {
      return response.json();
    }
    // fetch('https://gist.githubusercontent.com/vrk/3dd93294a4a53970013dbc23ae7008b9/raw/6da6d6c9ce5a220a4eedbc8778ed6bf58d8f5021/gistfile1.txt')
   // fetch('http://api.giphy.com/v1/gifs/search?q=cat&limit=25&rating=g&api_key=dc6zaTOxFJmzC')
 //  fetch('https://api.giphy.com/v1/gifs/search?q=hot%20chocolate&api_key=dc6zaTOxFJmzC&limit=25&rating=g')
 fetch("https://api.giphy.com/v1/gifs/search?q=hot%20chocolate&api_key=dc6zaTOxFJmzC&limit=25&rating=g")
      .then(onResponse)
      .then(onJsonReady);


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
