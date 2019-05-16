// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
      this.Submit=this.Submit.bind(this);
      this.url="";
      this.songName="";

      var menuElement = document.querySelector('#menu');
      menuElement.addEventListener('submit',this.Submit);


      var musicElement=document.querySelector('#main');


      this.MenuScreen = new MenuScreen(menuElement);
      this.MusicScreen = new MusicScreen(musicElement);
      this.MusicScreen.hide();
  }
    Submit(event)
    {
        event.preventDefault();
        this.MenuScreen.hide();
        this.MusicScreen.show();
        let choice=document.querySelectorAll('option');
        let gif=document.querySelector('input');
        var music;
        for(var i of choice)
            if(i.selected)
                music=i;
        console.log(gif.value);
        this.url=music.value;
        this.songName=music.textContent;
        this.GIF = new GifDisplay(gif.value);
        this.Buutton = new PlayButton(this.url,this.songName);
        console.log(music.value);
        console.log(music.textContent);
        console.log(event);
        
    }
}
