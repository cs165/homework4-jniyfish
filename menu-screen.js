class MenuScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    function onJsonReady(json) {
      //   console.log(json);
      const albums = json;
      const themeList = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
      const SongList = albums;
      const select = document.querySelector('#song-selector');
      const input = document.querySelector('#query-input');
      const submit = document.querySelector('#submit');
      var random = getRandomInt(themeList.length);

      input.setAttribute("value", themeList[random]);

      for (let i of Object.keys(SongList)) {
        console.log(i);
        var option = document.createElement("option");
        select.append(new Option(SongList[i].title, SongList[i].songUrl));
      }
    }

    function onResponse(response) {
      return response.json();
    }
    fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json')
      .then(onResponse)
      .then(onJsonReady);
    // TODO(you): Implement the constructor and add fields as necessary.
  }
 

  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


