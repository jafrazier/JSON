function getComicDc() {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myComic = JSON.parse(this.responseText);
        console.log(myComic.company.dc.batman.name);
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

function getComicDc() {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myComic = JSON.parse(this.responseText);
        console.log(myComic.company.dc.batman.name);
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
