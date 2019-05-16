// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(input1) {
    this.data = null;
    this.url = "https://api.giphy.com/v1/gifs/search?";
    this.message = "q=" + input1 + "&api_key=gm2ZMlRhxG54KrlmuhJ8J4O2SREJW4G7&limit=25&rating=g";
    this.url = this.url + this.message;
    console.log(this.url);

    // TODO(you): Implement the constructor and add fields as necessary.
    function onJsonReady(json) {
      //  console.log(json.data[1]);
      let random = getRandomInt(25);
      const gif = document.querySelector('#gif');
      let img = document.createElement("img");
      img.src = json.data[random].images.downsized.url;


      //img.style.maxwidth = '100%';
      // img.style.maxheight = '100%';
      // img.style.width = '100%';
      // img.style.height = '100%';
      gif.append(img);

      //img.style.overflowY="hidden";
    }


    function onResponse(response) {
      return response.json();
    }
    // fetch('https://gist.githubusercontent.com/vrk/3dd93294a4a53970013dbc23ae7008b9/raw/6da6d6c9ce5a220a4eedbc8778ed6bf58d8f5021/gistfile1.txt')
    // fetch('http://api.giphy.com/v1/gifs/search?q=cat&limit=25&rating=g&api_key=dc6zaTOxFJmzC')
    //  fetch('https://api.giphy.com/v1/gifs/search?q=hot%20chocolate&api_key=dc6zaTOxFJmzC&limit=25&rating=g')
    //fetch("https://api.giphy.com/v1/gifs/search?q=cats&api_key=gm2ZMlRhxG54KrlmuhJ8J4O2SREJW4G7&limit=25&rating=g")
    fetch(this.url)
      .then(onResponse)
      .then(onJsonReady);

    // TODO(you): Implement the constructor and add fields as necessary.
  }
  // TODO(you): Add methods as necessary.
}
