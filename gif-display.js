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
    this.len = 1;
    this.zindex = 1;
    this.getGIF = this.getGIF.bind(this);
    this.album = null;

    this.getGIF();

  }
  getGIF() {
    fetch(this.url)
      .then(onResponse => {
        return onResponse.json();
      })
      .then(json => {
        if(json.data.length<2)
        {
          alert("img less than 2 ");
          javascript: history.go(0)
        }
        //  this.album=json;
        let random = getRandomInt(json.data.length);
        this.album = json;

        console.log(random);
        const gif = document.querySelector('#gif');

        let img = document.createElement("img");
        img.setAttribute("id", "img1");
        img.style.zIndex = "1";
        img.style.position = "absolute";
        img.src = json.data[random].images.downsized.url;


        let img2 = document.createElement("img");
        img2.setAttribute("id", "img2");
        random = getRandomInt(json.data.length);
        if (random == json.data.length)
          random = 0;
        else
          random++;
        img2.src = json.data[random].images.downsized.url;
        img2.style.position = "absolute";
        img2.style.zIndex = "2";

        gif.append(img);
        gif.append(img2);

      });
  }
  change() {
    if (this.zindex == 1) {
      let img = document.querySelector('#img1');
      img.style.zIndex = "2";
      let img2 = document.querySelector('#img2');
      img2.style.zIndex = "1";
      let random = getRandomInt(this.album.data.length);
      img1.src = this.album.data[random].images.downsized.url;
      this.zindex = 0;
    }
    else {
      let img = document.querySelector('#img1');
      img.style.zIndex = "1";
      let img2 = document.querySelector('#img2');
      img2.style.zIndex = "2";
      let random = getRandomInt(this.album.data.length);
      img2.src = this.album.data[random].images.downsized.url;
      this.zindex = 1;
    }
  }
}
