function getComicDc() {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myComic = JSON.parse(this.responseText);
        document.getElementById('book1').innerHTML = myComic.company.dc.batman.name;
        document.getElementById('release1').innerHTML = myComic.company.dc.batman.release;
        document.getElementById('image1').src = myComic.company.dc.batman.image;
        document.getElementById('para1').innerHTML = myComic.company.dc.batman.content;
        document.getElementById('book2').innerHTML = myComic.company.dc.superman.name;
        document.getElementById('release2').innerHTML = myComic.company.dc.superman.release;
        document.getElementById('image2').src = myComic.company.dc.superman.image;
        document.getElementById('para2').innerHTML = myComic.company.dc.superman.content;
      }
    };
    xhttp.open('GET', 'https://raw.githubusercontent.com/jafrazier/JSON/master/new.json', true);
    xhttp.send();
}

function getComicMarvel() {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myComic = JSON.parse(this.responseText);
        document.getElementById('book1').innerHTML = myComic.company.marvel.xmen.name;
        document.getElementById('release1').innerHTML = myComic.company.marvel.xmen.release;
        document.getElementById('image1').src = myComic.company.marvel.xmen.image;
        document.getElementById('para1').innerHTML = myComic.company.marvel.xmen.content;
        document.getElementById('book2').innerHTML = myComic.company.marvel.avengers.name;
        document.getElementById('release2').innerHTML = myComic.company.marvel.avengers.release;
        document.getElementById('image2').src = myComic.company.marvel.avengers.image;
        document.getElementById('para2').innerHTML = myComic.company.marvel.avengers.content;
      }
    };
    xhttp.open('GET', 'https://raw.githubusercontent.com/jafrazier/JSON/master/new.json', true);
    xhttp.send();
}

function getRest() {
  document.getElementById('book1').innerHTML = 'title';
  document.getElementById('release1').innerHTML = 'release date';
  document.getElementById('image1').src = 'https://img.etsystatic.com/il/e9f6a7/1170498356/il_340x270.1170498356_tuoy.jpg?version=0';
  document.getElementById('para1').innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  document.getElementById('book2').innerHTML = 'title';
  document.getElementById('release2').innerHTML = 'release date';
  document.getElementById('image2').src = 'https://img.etsystatic.com/il/e9f6a7/1170498356/il_340x270.1170498356_tuoy.jpg?version=0';
  document.getElementById('para2').innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
}
